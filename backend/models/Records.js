const mongoose = require('mongoose')



const recordSchema = mongoose.Schema(
  {
    dateApplied: {
      type: String,
      required: [true, 'Application date is required.']
    },
    dateGranted: {
      type: String,
      required: false
    },
    amount: {
      type: Number,
      required: false
    },
    status: {
      type: String,
      required: [true, 'Application status is required.']
    },
    pfp: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      required: [true, 'Last name is required.']
    },
    firstname: {
      type: String,
      required: [true, 'First name is required.']
    },
    middlename: {
      type: String,
      required: false
    },
    extname: {
      type: String,
      required: false
    },
    sex: {
      type: String,
      required: [true, 'Sex is required.']
    },
    bday: {
      type: String,
      required: [true, 'Birth date is required.']
    },
    address: {
      type: String,
      required: [true, 'Address is required.']
    },
    barangay: {
      type: String,
      required: [true, 'Barangay is required.']
    },
    city: {
      type: String,
      required: [true, 'City is required.']
    },
    province: {
      type: String,
      required: [true, 'Province is required.']
    },
    number: {
      type: String,
      required: [true, 'Contact number is required.']
    },
    email: {
      type: String,
      required: false
    },
    education: {
      type: String,
      required: [true, 'Education is required.']
    },
    income: {
      type: String,
      required: [true, 'Monthly income is required.']
    },
    family: {
      type: Array,
      required: false
    },
    remarks: {
      type: String,
      required: false
    },
    files: {
      type: Array,
      required: [true, 'File attachments are required.']
    },
    rating: {
      type: Number,
      required: false
    },
    suggestions: {
      type: String,
      required: false
    },
    encoder: {
      type: String,
      required: [true, 'Encoder is required.']
    },
    position: {
      type: String,
      required: [true, 'Position is required.']
    }
  },
  {
    timestamps: true
  }
)



module.exports = mongoose.model('Records', recordSchema)