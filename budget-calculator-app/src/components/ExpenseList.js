import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import ExpenseItem from "./ExpenseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ExpenseList = React.memo(({ handleClick, budgetData, setBudgetData }) => {

    // TODO: 목록 지우기 버튼을 누르면 모든 항목들이 다 삭제되는 기능을 구현해야 된다.

    const handleEnd = (result) => {
        if (!result.destination) return;
        const newBudgetData = budgetData;
        const [reorderedItem] = newBudgetData.splice(result.source.index, 1);

        newBudgetData.splice(result.destination.index, 0, reorderedItem);
        setBudgetData(newBudgetData);
    }

    return (
        <div className="w-full bg-white p-4">
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="budget-calculator">
                    {(provided, snapshot) => (
                        <div className="list-none border-0 p-0" {...provided.droppableProps} ref={provided.innerRef}>
                        {budgetData.map((data, index) => (
                            <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <ExpenseItem handleClick={handleClick} key={data.id} id={data.id} expense={data.expense} budgetData={budgetData} setBudgetData={setBudgetData} provided={provided} snapshot={snapshot} />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button className="px-4 py-2 border rounded">목록 지우기 <FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    )
})

export default ExpenseList;
