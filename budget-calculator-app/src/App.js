import "./App.css";
import React, { useState, useCallback } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [budgetData, setBudgetData] = useState([]);
  const [expense, setExpense] = useState({ category: "", amount: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let newBudgetData = {
      id: Date.now(),
      expense: expense
    }

    // 원래 있던 경비에 새로운 경비를 추가해준다.
    setBudgetData(prev => [...prev, newBudgetData]);
    // TODO: 추가적으로, localStorage에도 값을 저장하는 코드를 구현해야 한다.

    // 입력 폼에 있는 내용을 지워줘야 한다.
    setExpense({ category: "", amount: "" });
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-yellow-100">
      <div className="w-full p-6 m-4 rounded lg:w-3/4 lg:max-lg">
        <div className="flex justify-between mb-3 text-4xl">
          <h1>예산 계산기</h1>
        </div>
        <ExpenseForm handleSubmit={handleSubmit} expense={expense} setExpense={setExpense} />
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