import { useState } from "react";
import Button from "../Button";


export default function Counter({startValue, increase}){
  
    const [number, setNumber] = useState(startValue  ? startValue : 0 &&  increase  ? increase : 0 )


    return(
        <div className="counter">
            <h3> Counter</h3>
            <input type="number" value={number}  onChange={(e)=>setNumber(e.target.value)} />
            <Button onClick={()=>setNumber( number >0  ? number-5 : number )} text={'Minus'}  />
            <Button onClick={()=>setNumber(number + 5 )} text={'Plus'}   />
        </div>
    )
}