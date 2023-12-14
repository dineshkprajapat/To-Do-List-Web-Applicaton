import React from "react";
import { useEffect, useState } from "react";
import "./todoapp.css";
function Todoapp(){
    
    const [mytxt,setMytxt]= useState("");
    const [arr,setArray]= useState([]);
    const [toggle,setToggle]= useState(true);
    const [edititem,setEdititem]= useState(null);

   
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(arr));
      }, [arr]);

    
    const txtData = (e)=>{
        var a = e.target.value;
        setMytxt(a);
    }

    const AddData  = ()=>{
        if(mytxt === ""){
            alert(" Filled Required ");
        }else if( mytxt && !toggle){
              setArray(
                arr.map((val,i)=>{
                    if(i === edititem){
                        return  val = mytxt;
                    
                    }
                    return val;
                })
              )
              setMytxt("");
              setToggle(true);
              setEdititem(null);
        }else{
            var a1 = mytxt;
            var myarray = arr;
            myarray.push(a1);
             setArray(myarray);
             setMytxt(""); 
        }
            
        }

                  
    const editBtn = (ind)=>{
        var updateedit = arr.find((val,id)=>{
            return id === ind;
        })
        setMytxt(updateedit);
       setToggle(false);
       setEdititem(ind);
    }

    const deleteBtn = (ind)=>{
        var updatedelete = arr.filter((val,i)=>{
            return ind !== i;
        })
        setArray(updatedelete);
       
    }

    return(
        <>
           <div className="todo">
            <h1> To Do List </h1>
         Name : <input type="text" placeholder="Enter Name" onChange={txtData} value={mytxt}/>
         {
            toggle ? <button onClick={AddData}> Add </button>: <button style={{backgroundColor:"green",color:"black"}} onClick={AddData}> Update </button>
         }
         
         <h3> { arr.map((val,ind)=>{
           return <div key={ind}>
                 <li> {val}   <button style={{backgroundColor:"green",color:"black"}} onClick={ ()=> editBtn(ind)}> Edit </button> <button style={{backgroundColor:"red",color:"white"}} onClick={()=> deleteBtn(ind)}> Delete </button> </li>
            </div>
         })} </h3> 
         </div> 
        </>
    )
}
export default Todoapp;