import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({todoData, setTodoData}) {
    
    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id!== id);
        setTodoData(newTodoData);
    };

    const handleCompleChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.completed =!data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);
    }

    const handleEnd = (result) => {
        if (!result.destination) return;
        const newTodoData = todoData;

        // 1. 변경시키는 아이템을 배열에서 제거한다.
        // 2. return 값으로 제거된 아이템을 잡아준다.
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        // 원하는 자리에 reorderItem을 insert 해준다.
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="to-dos">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        {todoData.map((data, index) => (
                            <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                            
                                {(provided, snapshot) => (
                                    <div 
                                    className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounderd`} 
                                    key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                        <div className="items-center">
                                            <input type="checkbox" onChange={() => handleCompleChange(data.id)} defaultChecked={false} />{" "}
                                            <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                                        </div>
                                        <div className="items-center">
                                            <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
            </DragDropContext>
        </div>
    );
}
