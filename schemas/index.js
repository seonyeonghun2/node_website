import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    required: true
  },
  tel: {
    type: String,
    required: true,
    trim: true,
    maxlength: 11
  },
  email: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    maxlength: 100
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;