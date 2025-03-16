import React, { useState } from 'react';

const Task = ({addNewTask}) => {
    const [task, setTask] = useState('');
    const handleSubmitButton = () => {
        addNewTask(task);
        setTask('');
    }
    return(
    <div>
        <input type="text" name="task-name" onChange={(e) => setTask(e.target.value)} value={task}/>
        <button onClick={() => {handleSubmitButton()}}>Add Task</button>
    </div>)
}

export default Task;