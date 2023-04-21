
import React from "react"
import ExpenseItem from "./Expenseitem"
import "./ExpensesList.css"
const ExpenseList=(props)=>{

    let expensesContent = <p> No expenses found </p>;
  if(props.items.length===0)
  {
    return <h2 className="expenses-list__fallback"> found no expenses</h2>
    
  }

  return (
    <ul className="expenses-list">
        {props.items.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.price}
        ></ExpenseItem>
      ))}

        
    </ul>
    
  )


}

export default ExpenseList;