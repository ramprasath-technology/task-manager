import React from "react";
import TaskItem from "./task-item";

const TaskList = ({ tasks }) => {
    return (
        tasks.length > 0 &&
        <div>
            <h1>The items are:</h1>
            {tasks.map((task, index) => {
                return <TaskItem task={task} index={index} />
            })}
        </div>
    )
}

export default TaskList;