import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import {useState} from 'react';

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState("false");
    const saveUserInputHandler = (enteredUserInput) => {
        const userInput = {
            ...enteredUserInput,
            id: Math.random().toString()
        };
        props.onNewRow(userInput);
        console.log(userInput);
        setAddNewExpense("false");
    };
    const newExpenseHandler = () => {
        setAddNewExpense("true");
    }
    const cancelExpenseHandler = () => {
        setAddNewExpense("false");
    }

    const  addExpense = (addNewExpense) => {
        if (addNewExpense === "true"){
            return (<ExpenseForm onNewUserInput={saveUserInputHandler} onCancel={cancelExpenseHandler}/>)
        }else{
            return (<button onClick={newExpenseHandler}>Add new Expense</button>)
        }
    }

    return (
        <div className="new-expense">
            
            {addExpense(addNewExpense)}
        </div>
    )
}

export default NewExpense;