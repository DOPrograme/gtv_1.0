import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters']
    },
    wechat: {
        type: String,
        required: [true, 'Please provide a WeChat ID']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    message: {
        type: String,
        required: [true, 'Please provide a message']
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)