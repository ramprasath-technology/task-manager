import React from "react";

const TaskItem = ({task, index}) => {
    return <div key={index}>{task}</div>
}

export default TaskItem;