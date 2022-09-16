import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Sunglasses',
    amount: 349.00,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 3499.99, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 1100.00,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 400.00,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{return[expense, ...prevExpenses]})
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
