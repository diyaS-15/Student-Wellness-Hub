'use client'; 
import React, {useState} from 'react';
export default function ToDo() {
    const [task, setTask] = useState(''); 
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 
    
    return (
        <div>
            <h2 className="text-xl ">To Do: </h2>
            <div className="flex">
            <input type="text"
            placeholder={"Enter Text"}/>
            <button className="bg-[#deceae] pl-2 pr-2">Add</button>
            </div>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    )
}