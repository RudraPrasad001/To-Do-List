import React,{useState} from 'react'
function ToDoList(){

    const [tasks,setTasks] = useState([])

    const addTask = ()=>{
        let taskText = document.getElementById("taskInput")
        if(taskText.value!=""){
        setTasks([...tasks,taskText.value])}
        taskText.value=""
    }
    const removeTask =(key)=>{
        setTasks(t=>t.filter((_,i)=>i!==key))
    }
    const moveUp =(key)=>{
        let updatedTasks = [...tasks]
        if(key>0){
            let temp = updatedTasks[key]
            updatedTasks[key]=updatedTasks[key-1]
            updatedTasks[key-1]=temp
            setTasks(updatedTasks)
        }
    }
    const moveDown =(key)=>{
        let updatedTasks = [...tasks]
        if(key<tasks.length-1){
            let temp = updatedTasks[key]
            updatedTasks[key]=updatedTasks[key+1]
            updatedTasks[key+1]=temp
            setTasks(updatedTasks)
        }
    }
    return(
        <div className='container'>
            <h1 id='heading'>To Do List</h1>
            <input type='text' id='taskInput' placeholder='Task' onKeyDown={(e)=>{if(e.key==="Enter"){addTask()}}}></input>
            <button id='adder' onClick={addTask}>Add</button>
            {tasks.map((task,index)=>
            <div className='tasks' key={index}>
                <p className='task'>{task} </p>
                <button className='remove' onClick={()=>{removeTask(index)}}>Remove❌</button>
                <button className='move-up'onClick={()=>{moveUp(index)}}>Up👆</button>
                <button className='move-down' onClick={()=>{moveDown(index)}}>Down👇</button>
                </div>)}
        </div>
    )
}
export default ToDoList