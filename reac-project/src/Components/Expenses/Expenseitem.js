import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from ".././UI/Card";
import React, { useState } from "react";


// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
 const  ExpenseItem= (props)=>{
  // const expenseDate= new Date();
  // const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  // const date= (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)
  // const expenseTitle= "carInsurance"
  // const expesePrice= 200;

  // const month = props.date.toLocaleString("en-us", { month: "short" });
  // const year = props.date.toLocaleString("en-us", { year: "numeric" });
  // const day = props.date.toLocaleString("en-us", { day: "numeric" });
  const [title, setTitle] = useState(props.title);
  console.log("Expense Item Evaluated by React")

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.date}></ExpenseDate>

      <div className="expense-item__description ">{title}</div>
      <div className="expense-item__price">{props.amount}$</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;