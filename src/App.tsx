import './App.css';
import ToDoList, {ListItem} from "./Components/ToDoList";
import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout";

const App: React.FC=():JSX.Element=> {
    const [list, setList]=useState<ListItem[]>([])

    const handleAddItem=({id, title}:ListItem)=>{
        setList(prevState => {
            const newSt=[...prevState]
            newSt.push({
                id, title
            })
            return newSt
        })
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) =>{
                setList(json)
            })
    }, [])

  return (
    <div className="App">
        <Layout style={{background:"Brown"}}>
            <ToDoList
                list={list}
                handleAddItem={handleAddItem}/>
        </Layout>
    </div>
  );
}

export default App;
