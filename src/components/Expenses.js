
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
};

const filteredExpenses = props.items.filter(item =>  {return item.date.getFullYear().toString()===filteredYear;
});

    return (
    <div className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items = {filteredExpenses}/>
    </div>);;
}

export default Expenses;
