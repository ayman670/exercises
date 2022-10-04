const Expense = require("../models/expense.model");

const expenseController = {};

expenseController.get = async (req, res, next) => {
    const { user } = req;
    const query = {
        owner: user._id,
    };
    try {
        const expenses = await Expense.find({ query });
        res.send({
            expenses,
        });
    } catch (e) {
        console.log(e);
    }
};

expenseController.create = async (req, res, next) => {
    const { amount, description } = req.body;
    const newExpanse = new Expense({
        amount,
        description,
        owner: req.user,
    });

    try {
        const saved = await newExpanse.save();
        res.send({
            success: true,
            expense: saved,
        });
    } catch (e) {
        console.log(e);
    }
};

expenseController.update = async (req, res, next) => {
    const id = req.params._id;
    const { amount, description } = req.body;
try {
    const expense = await Expense.updateOne({ _id: id }, { amount, description });
    res.send({
        success: true,
        expense
    });
} catch (e) {
    console.log(e)
}
 
};

expenseController.destroy = async (req, res, next) => {
    const id = req.params._id;
    try {
        await Expense.deleteOne({ _id: id });
        res.send({
            success: true,
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = expenseController;
