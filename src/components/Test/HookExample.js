import React , {useState, useEffect} from "react";

const HookExample = () =>
{
    const [count, setCount]= useState(0);

    useEffect(() => {
        // Document Title (Browser Tab Title) will show count
        document.title = `You clicked ${count} times`;
      });

    return(
        <div>
            <p> you have clicked {count} times </p>
            <button onClick={()=>setCount (count+1)}> Click me </button>
        </div>
    );
}

export default HookExample;