import Expenseitem from "./ExpenseItem";
import './ExpenseList.css'
const ExpenseList = (props) => {
    if (props.list.length === 0) {
        return (<h2 className="expenses-list__fallback">No Expenses</h2>);
    } else {
        return (<ul>
            {props.list.map((items) => (
                <Expenseitem
                    key={items.id}
                    item={items} />
            ))}
        </ul>)
    }
};

export default ExpenseList;