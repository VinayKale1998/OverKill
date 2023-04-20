import React from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label"> Title</label>
          <input type="text" name="title" />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label"> Date</label>
          <input type="date" name="title" min="2019-01-01" max="2023-04-30" />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label"> Price</label>
          <input type="number" name="Price" min="0.01" step="0.01" />
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
