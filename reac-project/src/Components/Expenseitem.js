import React from "react";
import "./ExpenseItem.css";
import   ExpenseDate from "./ExpenseDate.js"
import Card from "./Card.js"
import React from "react"

// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
export default function ExpenseItem(props) {
  // const expenseDate= new Date();
  // const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  // const date= (new Date()).toLocaleDateString('en-US', DATE_OPTIONS)
  // const expenseTitle= "carInsurance"
  // const expesePrice= 200;

  // const month = props.date.toLocaleString("en-us", { month: "short" });
  // const year = props.date.toLocaleString("en-us", { year: "numeric" });
  // const day = props.date.toLocaleString("en-us", { day: "numeric" });

  return (
    <Card  className="expense-item">
     
       
      <ExpenseDate Date={props.date}></ExpenseDate>
     
      <div className="expense-item__description ">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
}
