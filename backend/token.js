const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);


//13c352a6f2b6c7c95a8d9d17ef03d58a8f4b6ca5c0695b61c1423648204322b8a2b4e0e91b05ff12e8ebafed1363bdbf40174e45429e1a66248ecd651aff7d7f
//d6274342d1b80a281a9d8ab178839b4504cdde6d26d3724bf398b091ee570b4f66069ecf2ed66c47a1de3d1882cc3bff8af4213af8493eaef28d0eecbe0f3125