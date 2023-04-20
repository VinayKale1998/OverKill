import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const onSaveData = (enteredExpenseData) => {
    const expenseData = {  id: Math.random().toString() ,...enteredExpenseData};
    console.log(expenseData);
    props.addData(expenseData);
  };

  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveData} />
    </div>
  );
};

export default NewExpense;
