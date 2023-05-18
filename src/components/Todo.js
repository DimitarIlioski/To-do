import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({
    value,
    isComplete,
    id,
    removeTodo,
    onEditClick,
    completeTodo
}) => {
    return (
        <div className={isComplete ? 'todo-row complete' : 'todo-row'}>
            <div onClick={() => completeTodo(id)}>{value}</div>

            <div className='icons'>
                <TiEdit 
                className='edit-icon'
                onClick={() => onEditClick({ id, value })}
                />
                <RiCloseCircleLine onClick={() => removeTodo(id)} className='delete-icon' />

            </div>
        </div>
    )
}

export default Todo