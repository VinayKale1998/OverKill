import Expenses from "./Components/Expenses/Expenses"
import React, {useState} from "react"
import NewExpense from "./Components/NewExpense/NewExpense";
let dumy_expenses= [
  {
    id: "e1",
    title: "CarInsurance",
    price: 1000,
    date: new Date(2021,4,13)
  },
  {
    id: "e2",
    title: "Gas",
    price: 500,
    date: new Date(2020,4,15)
  },
  {
    id: "e3",
    title: "Maintenance",
    price: 800,
    date: new Date(2022,4,14)
  },
]

function App() {
  // const para = document.createElement("h1")
  // para.textContent="This is vanilla JS";
  // document.getElementById("root").append(para)   


  const [expenses,setExpenses]= useState(dumy_expenses);

  const addExpenseHandler= expense=>{

    console.log(expense)
    setExpenses(prevExpenses=>{return [expense,...prevExpenses]})
    console.log(expenses)

    
    
  }
  






  return (

    

    // Alternative for the below code
    // React.createElement("div",{}, React.createElement("h1",{}, "let's get started"),React.createElement(Expenses,{items:expenses}))
    
    <div>
     <NewExpense addData={addExpenseHandler}></NewExpense>
     {console.log(typeof false)}
      <Expenses items= {expenses}></Expenses>
    </div>



  );
}

export default App;
