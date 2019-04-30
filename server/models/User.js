const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   googleId: String
});
// loading a model into mongo via mongoose: one argument signifies extraction; two arguments signify the creation of a class
mongoose.model('users', userSchema);

// Important Note: we don't export this file via module.exports in a testing environment
// because the model files will be required into the project multiple times, thus confusing
// mongoose; it will think you're attempting to load multiple files called User