import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const [enteredYear, setFilterYear] = useState("2020");

  const saveFilterHandler = (event) => {
    setFilterYear(event.target.value);
    //console.log(event.target.value);
    props.onFilter(event.target.value);
    //console.log(enteredYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={enteredYear} onChange={saveFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
