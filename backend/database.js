const mongoose = require('mongoose');
const DB_URL='mongodb+srv://ruchi:Kumari123@cluster0.kdsaye1.mongodb.net/sympathy';


function DbConnect() {
    console.log('coming here...', DB_URL);
    // Database connection
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;









