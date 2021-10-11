import './ExpenseItems.css';

function ExpenseItems(props){
    const LocationOfExpenditure = 'CarInsurance';
   

    return  <div className="expense-item">
                <div>{props.date.toISOString()}1</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                    <div>{LocationOfExpenditure}</div>
                </div>
            </div>

}
export default ExpenseItems;