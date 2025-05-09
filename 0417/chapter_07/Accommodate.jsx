import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
const MAX_CAPACITY = 10;
function Accommodate(props) {
const [isFull, setIsFull] = useState(false);
const [count, increaseCount, decreaseCount] = useCounter(0);
useEffect(() => {
console.log("======================");
console.log("useEffect() iscalled.");
console.log(`isFull: ${isFull}`);
});
useEffect(() => {
setIsFull(count>= MAX_CAPACITY);
console.log(`Current countvalue: ${count}`);
}, [count]);
return(
    <div style={{ padding: 16 }}>
    <p>{`총${count}명수용했습니다.`}</p>
    <button onClick={increaseCount} disabled={isFull}>
   입장
   </button>
    <button onClick={decreaseCount}>퇴장</button>
    {isFull&& <p style={{ color: "red" }}>정원이가득찼습니다.</p>}
    </div>
    );
    }
    export default Accommodate;