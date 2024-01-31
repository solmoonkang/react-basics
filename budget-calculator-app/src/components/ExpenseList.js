import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = React.memo(() => {

    return (
        <div className="w-full bg-white p-4">
            <ul className="list-none border-0 p-0">
                <ExpenseItem />
            </ul>
            <button className="px-4 py-2 border rounded">목록 지우기</button>
        </div>
    )
})

export default ExpenseList;