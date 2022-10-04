const mongoose = require('mongoose');


const {Schema} = mongoose;

// معدل الصرف
const ExpenseSchema = Schema({
    amount : {type : Number},
    description : {type : String},
    creates : {type: Date ,default : new Date()},
    owner:
    {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}
);



const Expense = mongoose.model('Expense',ExpenseSchema);
module.exports = Expense;
