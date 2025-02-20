import { useState } from "react";


const UseFormInput = (initialvalue) => {

    const [value,setValue] = useState(initialvalue);
    
    const handleChange = (e)=>{
        setValue(e.target.value);
    }

    const inputForm = {
        value:value,
        onChange:handleChange
    };

    return inputForm;

}
 
export default UseFormInput;