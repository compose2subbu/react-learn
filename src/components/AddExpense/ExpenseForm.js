import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setuserTitle] = useState("");
  const [enteredAmount, setuserAmount] = useState("");
  const [enteredDate, setuserDate] = useState("");
  // const [userinput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setuserTitle(event.target.value);
    // setUserInput({
    //     ...userinput,
    //     enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // })
    //console.log(enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setuserAmount(event.target.value);
    // setUserInput({
    //     ...userinput,
    //     enteredAmount: event.target.value
    // });
    //console.log(enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setuserDate(event.target.value);
    // setUserInput({
    //     ...userinput,
    //     enteredDate: event.target.value
    // });
    //console.log(enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onNewUserInput(expenseData);
    setuserTitle('');
    setuserAmount('');
    setuserDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
          value={enteredTitle}
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;