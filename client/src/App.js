import NewExpense from "./comp/NewExpense/NewExpense";
import Expenses from "./comp/Expenses/Expenses";
import { useState } from "react";
import './comp/UI/asset/collapseButton.css';
import './comp/UI/asset/App.css';


//expense push expenses
let dummyExpense = [
];
function App() {

  const [expense, addNewExpense] = useState(dummyExpense);
  const addExpenseHandler = async (ExpenseData) => {
    const { ExpenseTitle, ExpenseAmount, ExpenseDate } = ExpenseData;


    addNewExpense((prevEXpense) => {
      return [...prevEXpense, ExpenseData];
    });



    const res = await fetch("http://localhost:3000/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ExpenseTitle, ExpenseAmount, ExpenseDate
      })
    });
    const data = await res.json();



    const get = await fetch("http://localhost:3000/new", {
      method: "GET",

    });


    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Bill Added");
    }


  }
  const [isOpen, changeEdit] = useState(false);

  const addExpenseButtonHandler = () => {
    changeEdit(true);
  }

  const addCancelHandler = () => {
    changeEdit(false);
  }

  return (
    <div className="appMainContent">
      <div className="buttonContent">
        {isOpen && <NewExpense onAddNewExpense={addExpenseHandler} onCancelHandler={addCancelHandler} />}
        {!isOpen && <button className='newCollapse' onClick={addExpenseButtonHandler}>Add New Expense</button>}
      </div>
      <Expenses expenseDetails={expense} />
    </div>
  );
}

export default App;
