import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {

    const [ExpenseTitle, setExpenseTitle] = useState('')
    const [ExpenseAmount, setExpenseAmount] = useState('')
    const [ExpenseDate, setExpenseDate] = useState('')



    const titleHandler = (event) => {
        setExpenseTitle(event.target.value);
    }
    const amountHandler = (event) => {
        setExpenseAmount(event.target.value);
    }
    const dateHandler = (event) => {
        setExpenseDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!ExpenseAmount || !ExpenseDate || !ExpenseTitle) return;

        // const res = await fetch("http://localhost:3000/new", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         ExpenseTitle, ExpenseAmount, ExpenseDate
        //     })
        // });

        // const data = await res.json();

        // if (data.status === 422 || !data) {
        //     window.alert("Invalid Registration");
        // } else {
        //     window.alert("Bill Added");
        // }

        const enteredExpenseData = {
            ExpenseTitle: ExpenseTitle,
            ExpenseAmount: +ExpenseAmount,
            ExpenseDate: new Date(ExpenseDate)
        };
        props.onSaveExpenseData(enteredExpenseData);
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
    };
    return (<form onSubmit={submitHandler} method='POST'>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label for='ExpenseTitle'>Title</label>
                <input type='text' id='ExpenseTitle' onChange={titleHandler} value={ExpenseTitle} placeholder='Enter the title' />
            </div>
            <div className='new-expense__control'>
                <label for='ExpenseAmount'>Amount</label>
                <input type='number' id='ExpenseAmount' min='10' step='100' onChange={amountHandler} value={ExpenseAmount} placeholder='Enter the amount(Rupees)' />
            </div>
            <div className='new-expense__control'>
                <label for='ExpenseDate'>Date</label>
                <input type='date' id='ExpenseDate' onChange={dateHandler} value={ExpenseDate} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>)
}

export default ExpenseForm;