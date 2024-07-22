const crypto = require('crypto');
const hashService = require('./hash-service');

class OtpService {

    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }

    async sendBySms(phone, otp) {
        // Mock implementation to log OTP to the console
        console.log(`Sending OTP ${otp} to phone number ${phone}`);
        return Promise.resolve(); // Simulate async behavior
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }
}

module.exports = new OtpService();
