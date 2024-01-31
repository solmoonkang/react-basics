import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faSave } from "@fortawesome/free-solid-svg-icons";

const ExpenseItem = React.memo(({ id, expense, budgetData, setBudgetData, provided, snapshot, handleClick }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedExpense, setEditedExpense] = useState(expense);

    const handleEditChange = (event) => {
        setEditedExpense({...editedExpense, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        let newBudgetData = budgetData.map((data) => {
            if (data.id === id) {
                data.expense = editedExpense;
            }
            return data;
        });
        setBudgetData(newBudgetData);
        localStorage.setItem("budgetData", JSON.stringify(newBudgetData));

        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div>
                <li className="bg-white leading-6 px-5 py-2.5 mb-4 border border-gray-300 flex justify-between transition-all duration-300 transform hover:scale-105">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between w-3/5">
                            <input name="category" className="mr-8" value={editedExpense.category} onChange={handleEditChange} autoFocus />
                            <input name="amount" className="font-light text-base py-0.5 px-0.5 ml-auto" value={editedExpense.amount} onChange={handleEditChange} autoFocus />
                        </div>
                    </form>
                    <div>
                        <button className="bg-transparent border-none text-x1 focus:outline-none cursor-pointer text-green-500 m-1" onClick={handleSubmit}><FontAwesomeIcon icon={faSave} /></button>
                        <button className="bg-transparent border-none text-x1 focus:outline-none cursor-pointer text-red-500 m-1" onClick={() => setIsEditing(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                </li>
            </div>
        );
    } else {
        return (
            <div className={`${snapshot.isDragging ? "bg-gray-400" : "gb-gray-100"}`} key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                <div className="bg-white leading-6 px-5 py-2.5 mb-4 border border-gray-300 flex justify-between transition-all duration-300 transform hover:scale-105">
                    <div className="flex justify-between w-3/5">
                        <input className="mr-8" />{expense.category}
                        <span className="font-light text-base py-0.5 px-0.5 ml-auto">{Number(expense.amount).toLocaleString()} 원</span>
                    </div>
                    <div>
                        <button className="bg-transparent border-none text-x1 focus:outline-none cursor-pointer text-green-500 m-1" onClick={() => setIsEditing(true)}><FontAwesomeIcon icon={faEdit} /></button>
                        <button className="bg-transparent border-none text-x1 focus:outline-none cursor-pointer text-red-500 m-1" onClick={() => handleClick(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                </div>
            </div>
        );
    }
})

export default ExpenseItem;
