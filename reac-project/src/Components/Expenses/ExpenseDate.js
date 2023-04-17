import "./ExpenseDate.css"
import React from "react"
import   ".././UI/Card.css"

export default function ExpenseDate(props) {
  const Month = props.Date.toLocaleString("en-US", { month: "short" });
  const Day = props.Date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.Date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date_month">{Month}</div>
      <div className="expense-date_day">{Day}</div>
      <div className="expense-date_year">{Year}</div>
    </div>
  );
}
