const mongoose = require('mongoose');
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

/**
 * Connect to MongoDB using the Mongoose client.
 */
const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('Successfully connected to MongoDB!');
  } finally {
    await mongoose.disconnect();
  }
};

export default connectDB;
