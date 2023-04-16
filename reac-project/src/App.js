import Expenses from "./Components/Expenses.js"

function App() {
  // const para = document.createElement("h1")
  // para.textContent="This is vanilla JS";
  // document.getElementById("root").append(para)
  const typee = "Personal";


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
    <div>
     <h1> Let's get started</h1>
      <Expenses items= {expenses}></Expenses>
    </div>
  );
}

export default App;
