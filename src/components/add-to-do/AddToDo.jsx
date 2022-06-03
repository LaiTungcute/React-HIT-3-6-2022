import React from 'react';
import './AddToDo.scss';

const AddToDo = ({todo, setTodo, handleAddTodo, elementInput}) => {
  return (
    <div className='add-to-do'>
        <div className='add-to-do_input'>
            <input ref={elementInput} value={todo.title} onChange={(e) => setTodo(prev => ({
              ...prev,
              title: e.target.value
            }))}
            onKeyUp={(e) => handleAddTodo(e)} type="text" placeholder='add a task here...'/>
        </div>
        <div onClick={handleAddTodo} className='add-to-do_btn'>
            <i className="fa-solid fa-plus"></i>
        </div>
    </div>
  )
}

export default AddToDo;