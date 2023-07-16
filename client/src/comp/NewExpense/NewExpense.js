
import './NewExpense.css';
import ExpenseForm from './comp/ExpensesForm/ExpenseFrom';



const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        props.onAddNewExpense(enteredExpenseData);
    }
    const cancelAddExpenseHandler = () => {
        props.onCancelHandler();
    }
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        <button onClick={cancelAddExpenseHandler} className='cancelButton'>Cancel</button>

    </div>)
}
export default NewExpense;