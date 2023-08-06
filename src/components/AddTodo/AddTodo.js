import { useState } from 'react';
import './AddTodo.css'
function AddTodo (props) {
    const [todo, setTodo ] = useState("");
    const onEnter = (e) => {
        if (e.key == 'Enter'){
            props.addTodo(todo);
            setTodo('');
        }

    }
    return (
        <div className="add-todo-container">
            <input 
                className='todo-input'
                placeholder='Enter your plan ...'
                value={todo}
                onChange={(e) => setTodo(e.target.value) }
                onKeyPress={onEnter}
            >
            </input>
        </div>
    );
}

export default  AddTodo;