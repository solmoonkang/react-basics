import React from 'react'

function List() {

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

    return (
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
      )
}

export default List
