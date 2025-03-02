const backendDomain = "http://localhost:4000";

const allApi ={
    signup:{
        url:`${backendDomain}/api/signup`
    },
    signin:{
        url:`${backendDomain}/api/signin`
    },
    current_user:{
        url:`${backendDomain}/api/user-details`,
    }
};


export default allApi;