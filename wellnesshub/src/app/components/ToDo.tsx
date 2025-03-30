'use client'; 
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const ToDo = () => 
    {
    const [userInput, setUserInput] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; // Prevent hydration mismatch

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setUserInput(e.target.value);
    }

    const handleDelete = (todo) => {
        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    
        setTodoList(updatedArr)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (userInput.trim() === '') return;

        setTodoList([
            userInput,
            ...todoList
        ]);
        setUserInput('');
    };


    return (
        <div>
            <h2 className="text-4xl ">to do: </h2>
            <form onSubmit={handleSubmit}>

                <input type="text" value={userInput} style={{ textAlign: 'left' }}  onChange={handleChange} placeholder="Enter task..."/>
                <button type="submit" style={{ marginLeft: "5px"}}> submit </button>

            </form>
            <ul>
                {todoList.map((todo, idx) => (
                    <li key={idx}>- {todo}<button onClick={(e) => {
                        e.preventDefault();
                        handleDelete(todo)

                    }} style={{marginLeft: "10px"}}>(done!)</button></li>
                    ))}
            </ul>
            </div>
            );
        };

        export default ToDo