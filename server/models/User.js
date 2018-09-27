const hash = require('../helpers/hashHelper')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: String,
    username: String,
    email: {
        type: String,
        unique : true,
        required: [true, 'Please input email'],
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'], 
        validate: {
            validator: function(v) {
                if(v.length <= 5) return false
                return true
            }
        }
    },
    role: { type: String, default: 'member' },
    deleteAt: { type: Date, default: null},    
}, { timestamps:true });

userSchema.post('validate', function() {
    this.password = hash.bcencode(this.password)
});


const User = mongoose.model('User', userSchema);
module.exports = User
