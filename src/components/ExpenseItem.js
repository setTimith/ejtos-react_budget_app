import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          style={{
            background: "#4fac5c",
            borderRadius: "50%",
            fontWeight: "900",
            color: "white",
            fontSize: "30px",
            border: "none",
            padding: "0px 10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          style={{
            background: "#af2419",
            borderRadius: "50%",
            fontWeight: "900",
            color: "white",
            fontSize: "30px",
            border: "none",
            padding: "0px 15px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(event) => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
