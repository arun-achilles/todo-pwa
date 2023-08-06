import { useState } from 'react';
import './EditTodo.css'
import { FaRegSave } from 'react-icons/fa';
import { FaRegTimesCircle } from 'react-icons/fa';

function EditTodo (props) {
    const [todo, setTodo ] = useState(props.todoObj.content);

    return (
        <div className="edit-todo">
            <div className="todo-input-container">
                <input 
                    className='edit-todo-input'
                    placeholder='Enter your plan ...'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value) }
                    >
                </input>
            </div>
            <div className="update-actions">
                <button 
                    className="update-todo-btn"
                    onClick={(e) => {
                        props.updateTodo({idx: props.todoObj.idx, content: todo});
                        props.setIsEditing(false);
                    }}
                >
                        <FaRegSave size={'18px'}/>
                </button>
                <div>
                    <button 
                        className="cancel-todo-btn"
                        onClick={(e) => props.setIsEditing(false)}
                    >
                            <FaRegTimesCircle size={'18px'}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default  EditTodo;