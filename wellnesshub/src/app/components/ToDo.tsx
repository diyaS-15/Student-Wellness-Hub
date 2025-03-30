'use client'; 
import React, {useState} from 'react';
export default function ToDo() {
    const [task, setTask] = useState(''); 
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 
    
    const createTask = () => {};
    const updateTask = () => {};
    const deleteTask = () => {}; 
    const completeTask = () => {}; 
    const deleteList = () => {}; 


    return (
        <div>
            <h2 className="text-4xl ">To Do: </h2>
            <div className="">
            <input type="text"
            className="rounded-lg"
            placeholder="Enter Text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={createTask} className="bg-[#deceae] rounded-lg pl-2 pr-2 m-1" >Add</button>
            <button onClick={deleteList} className="bg-[#deceae] rounded-lg pl-2 pr-2" >Reset</button>
            </div>
            list.map()
            <div>
                
            </div>
        </div>
    )
}