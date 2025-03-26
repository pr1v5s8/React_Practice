import { useState } from "react";

export default function Form(){
    let [fullName, setFullName] = useState("");

    let updateName = (event) => {
        setFullName(event.target.value);
    }

    return(
        <form action="">
            <input type="text" value={fullName} onChange={updateName}></input>
            <button>Submit</button>
        </form>
    )
}