import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    const newBudget = event.target.value;
    if (newBudget > 20000) {
      alert("The budget cannot exceed the upper limit of 20000");
      setNewBudget(20000);
      return;
    }

    if (newBudget < totalExpenses) {
      alert(`The budget cannot be lower than total expenses: ${totalExpenses}`);
      setNewBudget(2000);
      return;
    }
    setNewBudget(newBudget);
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
