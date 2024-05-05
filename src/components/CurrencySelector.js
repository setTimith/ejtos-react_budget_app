import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function CurrencySelector() {
  const { dispatch } = useContext(AppContext);
  const setCurrency = (currency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };
  return (
    <select
      className="btn btn-success dropdown-toggle alert alert-success"
      id="inputGroupSelect02"
      onChange={(event) => setCurrency(event.target.value)}
    >
      <option defaultValue value="$">
        Currency ($ Dollar)
      </option>
      <option value="£">Currency (£ Pound)</option>
      <option value="€">Currency (€ Euro)</option>
      <option value="₹">Currency (₹ Rupee)</option>
    </select>
  );
}
