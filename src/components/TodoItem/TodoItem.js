import { useState } from 'react';
import './TodoItem.css';
import EditTodo from '../EditTodo/EditTodo';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

function TodoItem(props) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="todo-item">
            {
                isEditing ? (
                    <div className="edit-todo-container">
                        <EditTodo todoObj={props.todoObj} updateTodo={props.editTodo} setIsEditing={setIsEditing} > </EditTodo>
                    </div>
                )
                : (
                    <div className="list-todo-container">
                        <div>
                            <p className="todo-content">{props.todoObj.content}</p>  
                        </div>
                        <div className="todo-actions">
                            <div>
                                <button 
                                    className="edit-todo-btn"
                                    onClick={(e) => setIsEditing(!isEditing)}
                                > <FaEdit size={'18px'}/>
                                </button>
                            </div>
                            <div>
                                <button 
                                    className="delete-todo-btn"
                                    onClick={() => props.deleteTodo(props.todoObj)}
                                >
                                    <FaTrash size={'18px'}/>
                                </button>
                            </div>

                        </div>
                    </div>    
                ) 
            }
        </div>
    );
}

export default TodoItem;
