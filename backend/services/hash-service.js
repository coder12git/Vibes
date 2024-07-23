const crypto = require('crypto');


class HashService {
    hashOtp(data) {
        const st = process.env.HASH_SECRET; //'ee66646048d85bdc534912d9ee8cb31a3e680d963c9889ed009ab2f9d1ef7990da7dfdbaa480fccefd4d755325705186c1446b79e420b01027aaa7e1f747a741'
        return crypto
            .createHmac('sha256', st)
            .update(data)
            .digest('hex');
    }
}

module.exports = new HashService();
