import React, { useState } from 'react'

const List = React.memo(({ id, title, completed, todoData, setTodoData, provided, snapshot, handleClick }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompleChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.completed =!data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);
    }

    return (
        <div 
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounderd`} 
        key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
            <div className="items-center">
                <input type="checkbox" onChange={() => handleCompleChange(id)} defaultChecked={false} />{" "}
                <span className={completed ? "line-through" : undefined}>{title}</span>
            </div>
            <div className="items-center">
                <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                <button className="px-4 py-2 float-right" onClick={() => setIsEditing(true)}>edit</button>
            </div>
        </div>
      );
});

export default List
