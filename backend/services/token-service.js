const jwt = require('jsonwebtoken');
const accessTokenSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEwZTdiMDU3MmFkODA2YWY1NjBhMTIiLCJhY3RpdmF0ZWQiOmZhbHNlLCJpYXQiOjE3MjE4MjExMDQsImV4cCI6MTcyMTgyMjAwNH0.bwV3UBS0RvTuPvY0xjyNlh86QWCEb8180xbMYLvhqZc';
const refreshTokenSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEwZTdiMDU3MmFkODA2YWY1NjBhMTIiLCJhY3RpdmF0ZWQiOmZhbHNlLCJpYXQiOjE3MjE4MjExMDQsImV4cCI6MTc1MzM3ODcwNH0.JmMx2eGRrdnKyTRBz6qCOFxxe17oUWnIDGQXqJry_nQ'
const refreshModel = require('../models/refresh-model');
class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '15m',
        });
        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: '1y',
        });
        return { accessToken, refreshToken };
    }

    async storeRefreshToken(token, userId) {
        try {
            await refreshModel.create({
                token,
                userId,
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    async verifyAccessToken(token) {
        console.log("Access: ",token===accessTokenSecret);
        return jwt.verify(token, accessTokenSecret);
    }

    async verifyRefreshToken(refreshToken) {
        console.log("Refresh: ",refreshToken===refreshTokenSecret)
        return jwt.verify(refreshToken, refreshTokenSecret);
    }

    async findRefreshToken(userId, refreshToken) {
        return await refreshModel.findOne({
            userId: userId,
            token: refreshToken,
        });
    }

    async updateRefreshToken(userId, refreshToken) {
        return await refreshModel.updateOne(
            { userId: userId },
            { token: refreshToken }
        );
    }

    async removeToken(refreshToken) {
        return await refreshModel.deleteOne({ token: refreshToken });
    }
}

module.exports = new TokenService();
