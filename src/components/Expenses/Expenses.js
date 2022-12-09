import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearChangeHandler = (changedValue) => {
    setFilteredYear(changedValue);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          displayYear={filteredYear}
          onDropdownChange={filterYearChangeHandler}
        />

        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
