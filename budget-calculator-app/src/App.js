import "./App.css";
import React, { useState, useCallback } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-yellow-100">
      <div className="w-full p-6 m-4 rounded lg:w-3/4 lg:max-lg">
        <div className="flex justify-between mb-3 text-4xl">
          <h1>예산 계산기</h1>
        </div>
        <ExpenseForm />
        <ExpenseList />
        <div className="flex justify-end mt-4">
          <p className="text-3xl">
            총지출: 
            <span>원</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;