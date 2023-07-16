import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/CardWrapper/Card';
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseItem/ExpenseList";
import ExpenseChart from './ExpenseItem/ExpenseChart';


const Expenses = (props) => {

    const [selectedYear, slectYear] = useState('ALL');
    const filterYearHandler = (filterYear) => {
        slectYear(filterYear);
    }

    const filteredYearExpenses = props.expenseDetails.filter((item) => {
        if (selectedYear === 'ALL') return true;
        return item.ExpenseDate.getFullYear().toString() === selectedYear;
    });


    return (<div>
        <Card>

            <ExpensesFilter onFilterYearHandler={filterYearHandler} selected={selectedYear} />
            <ExpenseChart expenses={filteredYearExpenses} />
            <ExpenseList list={filteredYearExpenses} />
        </Card>
    </div>)
}

export default Expenses;