import logo from './logo.svg';
import './App.css';
import Listtask from "./component/Listtask";
import {axios} from "axois"
import {useRef, useState} from "react";
import showTask from './component/showTask';

function App() {
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


    // const handleAddtask = () => {
    //     setUpdatetask(null)
    // }
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
  
  const inputNameRef = useRef(null);
  inputNameRef.current.value = "";
 const handleAddtask = () =>{
 }


  return (
    <div className="App">
      <form style={{position:"relative", width:"300px", left:"50%", top:"50%"}}>
        <h1>Todo List</h1>
        <p>Get things done, one item at time</p>
        <Listtask handleAddtask={handleAddtask}/>
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
        <button type="submit" class="btn btn-primary" onClick={handleAddtask}>Submit</button>
      </form>
      <showTask task ={detailttask}/>
    </div>
  );
}

export default App;
