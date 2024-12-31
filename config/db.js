const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        
        if (!uri) {
            console.error("MONGO_URI is not defined in your environment variables");
            process.exit(1);
        }

        await mongoose.connect(uri);  // No need for deprecated options anymore
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
