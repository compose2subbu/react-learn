import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
      date: new Date(2021, 3, 15),
    },
    {
      id: "e2",
      title: "Petrol",
      amount: 2000,
      date: new Date(2021, 3, 16),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
