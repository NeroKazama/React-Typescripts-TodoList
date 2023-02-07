import React, { Fragment, useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
    text: string
    complete: boolean
}

export default function App(): JSX.Element {

    const [value, setValue] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([])
    
    const handleSubmit = (e: FormElem): void => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    const addTodo = (text: string): void => {
        const newTodos: ITodo[] = [...todos, {text, complete: false}]
        setTodos(newTodos)
    }

    const completeTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const deleteTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} required/>
                <button type='submit' className='btn'>
                    Add Todo
                </button>
            </form>
            <section>
                <div className='parent'>
                {todos.map((todo: ITodo, index: number) => 
                    <Fragment>
                        <div className='container'>
                            <div style={{textDecoration: todo.complete ? 'line-through' : ''}} className='items' key={index}>{todo.text}</div>
                            <button className='button-3' type='button' onClick={() => completeTodo(index)}>
                                {todo.complete ? 'Complete' : 'InComplete'}
                            </button>
                            <button className='button-4' type='button' onClick={() => completeTodo(index)}>
                                X
                            </button>
                        </div>
                    </Fragment>
                )}
                </div>
            </section>
        </Fragment>
    );
}
