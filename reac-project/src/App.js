import Expenses from "./Components/Expenses/Expenses"
import React from "react"
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  // const para = document.createElement("h1")
  // para.textContent="This is vanilla JS";
  // document.getElementById("root").append(para)   




  let expenses = [
    {
      id: "e1",
      title: "CarInsurance",
      Price: 1000,
      date: new Date(2023,4,13)
    },
    {
      id: "e2",
      title: "Gas",
      Price: 500,
      date: new Date(2023,4,15)
    },
    {
      id: "e3",
      title: "Maintenance",
      Price: 800,
      date: new Date(2023,4,14)
    },
  ];

    const addNewData=(newEntry)=>{
      expenses=[...expenses,newEntry] 
      
      console.log(expenses)

    }


  return (

    

    // Alternative for the below code
    // React.createElement("div",{}, React.createElement("h1",{}, "let's get started"),React.createElement(Expenses,{items:expenses}))
    
    <div>
     <NewExpense addData={addNewData}></NewExpense>
      <Expenses items= {expenses}></Expenses>
    </div>



  );
}

export default App;
