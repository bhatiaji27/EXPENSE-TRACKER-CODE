import React , {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

const [newText, setNewText] = useState('');
const [newAmt, setNewAmt] = useState('');
const [newDate, setNewDate] = useState('');

const titleChangeHandler = (event) => {
    setNewText(event.target.value);
}
const amountChangeHandler = (event) => {
    setNewAmt(event.target.value);
}
const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
}

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: newText,
        amount: +newAmt,
        date: new Date(newDate)
    }

    props.onSaveExpenseData(expenseData);
    setNewText('');
    setNewAmt('');
    setNewDate('');
}

    console.log(newText,newAmt);

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expenses__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newText} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={newAmt} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={newDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div> 
            <div className="new-expense__actions">
                <button className="new-expense__buttons" type="button" onClick={props.onCancel}>Cancel</button>
                <button className="new-expense__buttons" type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;


//ALTERNATIVE MULTI STATE APPROACH :- PREFERED PREVSTATE FORMAT FOR SAFE PLAY OF GETTING LATEST SNAPSHOT OF THE PREV STATE OF OBJECT.

// const [userInput, setUserInput] = useState({
    //     enteredTitle : "",
    //     enteredAmount : "",
    //     enteredDate : "",
    // });

    // const titleChangeHandler = (event) => {
    //     setUserInput( (prevState) => return{
    //         ...prevState,
    //         enteredTitle : event.target.value
    //     })
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount(event.target.value);
    //     })
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate(event.target.value);
    //     })
    // }