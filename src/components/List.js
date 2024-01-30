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

    const handleEditChange = (event) => {
        setEditedTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.title = editedTitle;
            }
            return data;
        });
        setTodoData(newTodoData);
        setIsEditing(false);
    }

    if (isEditing) {
        return ( <div>editing..</div> );
    } else {
        return (
            <div className={`flex items-center justify-between w-full px-4 py-1 my-2 bg-grat-100 text-gray-600 border rounderd`}>
                <div className="items-center">
                    <form onSubmit={handleSubmit}>
                        <input className="w-full px-3 py-2 mr-4 text-gray-500" onChange={handleEditChange} value={editedTitle} autoFocus />
                    </form>
                </div>
                <div className="items-center">
                    <button className="px-4 py-2 float-right" onClick={() => setIsEditing(false)}>x</button>
                    <button className="px-4 py-2 float-right" onClick={handleSubmit} type="submit">save</button>
                </div>
            </div>
        );
    }
});

export default List
