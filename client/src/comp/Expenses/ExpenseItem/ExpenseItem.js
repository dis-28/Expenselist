
import "./ExpenseItem.css";
import DisplayDate from "./DisplayDate/DisplayDate";

function Expenseitem(props) {


    return (<div className="expense-item">
        <DisplayDate DateString={props.item.ExpenseDate} />
        <div className="expense-item__description">
            <h2>{props.item.ExpenseTitle}</h2>
            <div className="expense-item__price">{props.item.ExpenseAmount} Rupees</div>
        </div>
    </div>);
}

export default Expenseitem;