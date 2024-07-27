const jwt = require('jsonwebtoken');
const accessTokenSecret = '13c352a6f2b6c7c95a8d9d17ef03d58a8f4b6ca5c0695b61c1423648204322b8a2b4e0e91b05ff12e8ebafed1363bdbf40174e45429e1a66248ecd651aff7d7f';
const refreshTokenSecret = 'd6274342d1b80a281a9d8ab178839b4504cdde6d26d3724bf398b091ee570b4f66069ecf2ed66c47a1de3d1882cc3bff8af4213af8493eaef28d0eecbe0f3125';
const refreshModel = require('../models/refresh-model');

// let refreshToken;
class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '1m',
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
        try {
            const decoded = jwt.verify(token, accessTokenSecret);
            return decoded;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async verifyRefreshToken(refreshTokenFromCookie) {
        return jwt.verify(refreshTokenFromCookie, refreshTokenSecret);
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
