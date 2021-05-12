import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
  //let title = props.title;
  // const [title, setTitle] = useState(props.title);
  //console.log('Expense Item evaluated by REACT')
  // const clickHandler = () => {
  //   console.log(title);
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  //const expenseDate = new Date(2021, 3, 14);
  //const expenseTitle = 'EMI';
  //const expenseAmount = 50000;
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
