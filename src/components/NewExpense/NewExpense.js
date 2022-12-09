import React , {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {
 
    const [isEditing, setisEditing] = useState(false);   

    const handleIsEditing = () => {
        setisEditing(true);
    }
    const dishandleIsEditing = () => {
        setisEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setisEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={handleIsEditing}>Add new expense</button>}
            {isEditing &&< ExpenseForm onCancel={dishandleIsEditing} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;