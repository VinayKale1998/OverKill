
import "./Expenses.css";
import Card from "../UI/Card";
import ".././UI/Card.css";
import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList"

function Expenses(props) {
  // const para = document.createElement("h1")
  // para.textContent="This is vanilla JS";
  // document.getElementById("root").append(para)

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.toLocaleString("en-US", { year: "numeric" }) === filteredYear
    );
  });

 
  return (
    <li>
    <Card className="Expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={filteredExpenses}/>

      {/* {filteredExpenses?.length === 0 && <p>No Expenses Found!!</p>}

      {filteredExpenses?.length > 0 &&
        filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.price}
          ></ExpenseItem>
        ))} */}

 {/* lets go with an alternative approach for conditional rendering, look above (outside the return statement) */}
        {/* {expensesContent}  */}
        {/* { the above dynamic value will render all the items  } */}




    </Card>
    </li>
  );
}

export default Expenses;
