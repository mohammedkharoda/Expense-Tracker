import React, { useState } from "react";
import Card from "../UI/Card";
import "../styles/Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2019");

  const filterChangeHandler = (selectedYears) => {
    setFilterYear(selectedYears);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // Code block

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpense} />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
}

export default Expense;
