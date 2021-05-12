import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpensesChart';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");
  const [newList, setNewList] = useState(props.items);
  const filterHandler = (inputYear) => {
    setFilteredYear(inputYear);
    const newItems = props.items.filter(item => item.date.getFullYear().toString() === inputYear);
    setNewList(newItems)

  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
      <ExpenseChart expenses={newList} />
      <ExpensesList items={newList} />
    </Card>
  );
}

export default Expenses;
