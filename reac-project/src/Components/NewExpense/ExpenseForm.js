import React from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {



  const [eneteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  // Alternatively

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const dateEnteredHandler = (event) => {
    setEnteredDate(event.target.value);
    //  setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const priceEnteredHandler = (event) => {
    setEnteredPrice(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  
  const submitHandler=(event)=>{
    event.preventDefault();
    
    const expenseData={
      title:eneteredTitle,
      date:enteredDate,
      price:enteredPrice
    }
    props.onSaveExpenseData(expenseData);
    //erasing the input fields after we submit 
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredPrice("")

  };

  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label"> Title</label>
          <input type="text"  placeholder=" Enter Title" onChange={titleChangeHandler}  value={eneteredTitle}/>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label"> Date</label>
          <input
          placeholder="Enter Date"
            type="date"
            name="title"
            min="2019-01-01"
            max="2023-04-30"
            value={enteredDate}
            onChange={dateEnteredHandler}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label"> Price</label>
          <input
            type="number"
            placeholder="Enter Price"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceEnteredHandler}
          />
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
