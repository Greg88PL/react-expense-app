import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
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

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
