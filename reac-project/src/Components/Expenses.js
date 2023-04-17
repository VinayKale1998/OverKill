import ExpenseItem from "./Expenseitem.js"
import "./Expenses.css"
import  Card from "./Card"
import React from "react"

function Expenses(props) {
  // const para = document.createElement("h1")
  // para.textContent="This is vanilla JS";
  // document.getElementById("root").append(para)

 
  return (
    <Card className="Expenses">
      
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].Price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].Price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].Price}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
