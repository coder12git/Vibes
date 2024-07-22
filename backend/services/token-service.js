const jwt = require('jsonwebtoken');
const accessTokenSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJleGFtcGxlVXNlcklkIiwidXNlcm5hbWUiOiJleGFtcGxlVXNlcm5hbWUiLCJpYXQiOjE3MjE1MTQwOTgsImV4cCI6MTcyMTUxNDk5OH0.57OyulvoGMGrTent9Y5jPNYB3l-HXPyYtpc0Pp8KJAY';
const refreshTokenSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJleGFtcGxlVXNlcklkIiwidXNlcm5hbWUiOiJleGFtcGxlVXNlcm5hbWUiLCJpYXQiOjE3MjE1MTQwOTgsImV4cCI6MTc1MzA3MTY5OH0.hLOmeqsJGd4UZVwaPzp4IzfIrQItisDKTKahjFWgjR4'
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
        return jwt.verify(token, accessTokenSecret);
    }

    async verifyRefreshToken(refreshToken) {
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
