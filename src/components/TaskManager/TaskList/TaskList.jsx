import React from 'react'
import { ListGroup, Alert } from 'reactstrap';
import TaskItem from './TaskItem/TaskItem';

const TaskList=props=>{
    const {tasks}=props;
    if(tasks.length===0){
        return <Alert>No tasks to show.</Alert>
    }
    return(
        <ListGroup>
           {tasks.map((task)=><TaskItem key={task.id} task={task}/>)}
        </ListGroup>
    )
}

export default TaskList;