import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/AddExpense/NewExpense";
import React, {useState} from 'react';

const STATIC_EXPENSES = [
  {
    id: "e1",
    title: "EMI",
    amount: 50000,
    date: new Date(2021, 3, 14),
  },
  {
    id: "e2",
    title: "Gas",
    amount: 1000,
    date: new Date(2020, 3, 15),
  },
  {
    id: "e3 ",
    title: "Petrol",
    amount: 2000,
    date: new Date(2019, 3, 16),
  },
  {
    id: "e4 ",
    title: "Groceries",
    amount: 2750,
    date: new Date(2019, 8, 5),
  },
  {
    id: "e5 ",
    title: "Veg",
    amount: 1250,
    date: new Date(2020, 7, 4),
  },
  {
    id: "e6 ",
    title: "School",
    amount: 1750,
    date: new Date(2021, 6, 3),
  },
  {
    id: "e7 ",
    title: "Books",
    amount: 1500,
    date: new Date(2019, 5, 2),
  },
  {
    id: "e8 ",
    title: "Tour",
    amount: 2500,
    date: new Date(2020, 4, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(STATIC_EXPENSES);



  const newRowAddHandler = (newAddedRow) => {
    // expenses = {
    //   ...expenses,
    //   newAddedRow
    // }
    setExpenses((prevExpenses) => {
      return [newAddedRow, ...prevExpenses];
    })
    //console.log(newAddedRow);
    //console.log(expenses);
  }



  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <NewExpense onNewRow={newRowAddHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
