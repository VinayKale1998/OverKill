import "./Card.css"
import React from "react"
import "../Expenses/ExpenseItem.css"
function Card(props){
    const classes= "Card "+ props.className;
    return(
         <div className={classes}>{props.children}</div>



    )
}
export default Card;