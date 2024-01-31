import React, { useEffect, useState } from 'react';
import axios from "axios"


const Listtask = (props) => {

    const [database, setDatabase] = useState([]);
    const [updatetask, setUpdatetask] = useState([]);
    const [detailttask,setDetailtask] = useState([])
    console.log("database", database);

    const handleDeletetask = (id) =>{
        const newtask = [...database];
        const indextask = newtask.findIndex((x)=>x.id===id);
        if(indextask>-1){
            newtask.splice(indextask,1)
            setDatabase(newtask)
        }
    };
// add more task


    const handleAddtask = () => {
        setUpdatetask(null)
    }
    const handleDetailtask = (item) => {
        setDetailtask(item)
    }

    const handleEdittask = () => {
    
    }
    
    useEffect(() => {
        AIP()
    },[])

    const AIP = async () => {
        const res = await axios.get("http://localhost:3001/task")
        console.log("res.data :", res.data)
        setDatabase(res.data)
    }

    return (
        
        <table>
            <tb>
                {database?.map((item, index) => 
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                        <button onClick={()=>{handleDeletetask(item.id)}}>
                            delete
                        </button>/
                        <button onClick={()=>{handleDetailtask(item)}}>
                            detail
                        </button>
                        <button onClick={()=>{handleEdittask(item.id)}}>
                            edit
                        </button>
                    </td>  
                </tr>
                )}
            </tb>
        </table>

    )
};

export default Listtask;