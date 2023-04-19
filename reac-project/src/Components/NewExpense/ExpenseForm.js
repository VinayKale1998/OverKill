import React from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  return (
    <form>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <title  className="new-expense__control label"> Title</title>
          <input type="text" name="title" />
        </div>

        <div className="new-expense-control">
          <title className="new-expense__control label" for="Date">Date</title>
          <input type="text" name="title" min="2019-01-01" max="2023-04-30" />
        </div>

        <div className="new-expense-control">
          <title   className="new-expense__control label">Price</title>
          <input type="text" name="Price" min="0.01" step="0.01" />
        </div>
        <div>
          <button type="submit" className="new-expense-actions">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
