import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../styles/ExpenseList.css";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expense are being found</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
