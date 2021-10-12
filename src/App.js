// import logo from './logo.svg';
import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 300, date: new Date(2021, 3, 27) },
    { id: 'e2',title: 'Bike Insurance', amount: 250, date: new Date(2021, 1, 15)},
    { id: 'e3', title: 'Mobile Insurance', amount: 700, date: new Date(2021, 2, 28)}
  ];
  return (
    
    <div className="App">
      
      
         <h2> Let's get started  </h2>
         <ExpenseItems 
         title={expenses[0].title} 
         amount={expenses[0].amount} 
         date={expenses[0].date}
         ></ExpenseItems>
         <ExpenseItems 
         title={expenses[1].title} 
         amount={expenses[1].amount} 
         date={expenses[1].date}
         ></ExpenseItems>
         <ExpenseItems
         title={expenses[2].title} 
         amount={expenses[2].amount} 
         date={expenses[2].date}
         ></ExpenseItems>
        
    </div>
  );
}

export default App;
