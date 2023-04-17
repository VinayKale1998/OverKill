import Expenses from "./Components/Expenses/Expenses"
import React from "react"

function App() {
  // const para = document.createElement("h1")
  // para.textContent="This is vanilla JS";
  // document.getElementById("root").append(para)



  const expenses = [
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
  return (

    


    // <div>
    //  <h1> Let's get started</h1>
    //   <Expenses items= {expenses}></Expenses>
    // </div>

    //Alternative for the above code
    React.createElement("div",{}, React.createElement("h1",{}, "let's get started"),React.createElement(Expenses,{items:expenses}))
  );
}

export default App;
