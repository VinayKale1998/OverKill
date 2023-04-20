import React from "react";
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
import "./ExpenseForm.css"  

const NewExpense = (props) => {
  return (
    <div className="new-expense"> 
    <ExpenseForm />
    </div>
  );
};

export default NewExpense;
