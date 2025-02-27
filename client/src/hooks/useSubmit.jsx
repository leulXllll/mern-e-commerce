import { useEffect ,useState} from "react";
import axios from 'axios';
export default function useSubmit(url,userData,call){

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    async function submitData(url,data){

        try{
            setLoading(true);

            let user = {"name":data.name.value,"email":data.email.value,"password":data.password.value,"profilePic":data.profilePic.value};

            let response = await axios.post(url,user,{headers:{
                'content-type':"application/json"
            }});
            
            setData(response.data);
            setLoading(false);
            console.log(response.data.data);
            
        }catch(error){

            console.log('some error');
            console.log(error.response.data);

            setError(error.response);
            setLoading(false);
            
        }

    }

    useEffect(()=>{

        if(call&&url){
            submitData(url,userData);
            
        }
    },[url,call]);

    return {data,error,loading};

}