import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input , setInput] = useState("")
  const handleClick = (value)=>{
    if (value=== '='){
      try{
        if (input.includes("/0")){
          alert("Error: Division by zero is not allowed")
          setInput("")
        }
        else{
          setInput(eval(input).toString())
        }
        
      } catch(err){
        setInput("Error")
      }
    }
    else if(value==='AC'){
      setInput("") 
    }
    else if (value==='DEL'){
      setInput(input.slice(0,-1))
    }
    else{
      setInput(input+value)
    }
  }

  return (
    <>
    {/* Calculator app using react  */}
    <div className=' d-flex justify-content-center align-items-center min-vh-100 bg-dark'>
      <div className='bg-light rounded p-3' style={{width:"300px"}}>
        <input type="text" className='form-control mb-3 bg-dark text-white text-end' readOnly value={input || 0} style={{ height: "60px", fontSize: "1.5rem", borderRadius: "10px" }}/>
       
        <div className='row g-2 mb-1'>
          <div className='col-6'>
            <button  className='btn w-100 btn-dark px-5' onClick={()=>handleClick("AC")} style={{ height: "60px", fontSize: "1.2rem" }}>AC</button>
          </div>
          
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("DEL")} style={{ height: "60px", fontSize: "1.2rem" }}>DEL</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("/")} style={{ height: "60px", fontSize: "1.2rem" }}>/</button>
          </div>
        </div>

        <div className='row g-2 mb-1'>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark' onClick={()=>handleClick("7")} style={{ height: "60px", fontSize: "1.2rem" }}>7</button>
          </div>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark ' onClick={()=>handleClick("8")} style={{ height: "60px", fontSize: "1.2rem" }}>8</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("9")} style={{ height: "60px", fontSize: "1.2rem" }}>9</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("+")} style={{ height: "60px", fontSize: "1.2rem" }}>+</button>
          </div>
        </div>

        <div className='row g-2 mb-1'>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark' onClick={()=>handleClick("4")} style={{ height: "60px", fontSize: "1.2rem" }}>4</button>
          </div>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark ' onClick={()=>handleClick("5")} style={{ height: "60px", fontSize: "1.2rem" }}>5</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("6")} style={{ height: "60px", fontSize: "1.2rem" }}>6</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("-")} style={{ height: "60px", fontSize: "1.2rem" }}>-</button>
          </div>
        </div>
       
        <div className='row g-2 mb-1'>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark' onClick={()=>handleClick("3")} style={{ height: "60px", fontSize: "1.2rem" }}>3</button>
          </div>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark ' onClick={()=>handleClick("2")} style={{ height: "60px", fontSize: "1.2rem" }}>2</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("1")} style={{ height: "60px", fontSize: "1.2rem" }}>1</button>
          </div>
          <div className='col-3'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("*")} style={{ height: "60px", fontSize: "1.2rem" }}>*</button>
          </div>
        </div>

        <div className='row g-2 mb-1'>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark' onClick={()=>handleClick("0")} style={{ height: "60px", fontSize: "1.2rem" }}>0</button>
          </div>
          <div className='col-3'>
            <button  className='btn w-100 btn-dark ' onClick={()=>handleClick(".")} style={{ height: "60px", fontSize: "1.2rem" }}>.</button>
          </div>
          
          <div className='col-6'>
            <button className='btn w-100 btn-dark' onClick={()=>handleClick("=")} style={{ height: "60px", fontSize: "1.2rem" }}>=</button>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
