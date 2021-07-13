const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://user-123:user-123@cluster0.ychce.mongodb.net/products?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    mongoose.Promise = await global.Promise;
    
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    await console.log('database connection success')
  } catch (error) {
    console.log('database connection fail');
    process.exit(1);
  }
}

module.exports = connectDB;