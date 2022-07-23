import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./ExpenseForm";
import "../styles/NewExpense.css";

function NewExpense(props) {
  // State
  const [isEditing, setIsEditing] = useState(false);
  // Handler
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
  };

  const setEditingHandler = () => {
    setIsEditing(true);
  };

  const setCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={setCancelHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
