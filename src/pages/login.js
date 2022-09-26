import { useRouter } from "next/router";
import Account from "../components/account";
const Login = ()=>{
    const router = useRouter()
    const submitForm = async(formData)=>{
        let {email,password} = formData;
        let response = await fetch("api/account/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({email,password})
        })
        let resData = await response.json();
        alert(resData.message);
        localStorage.setItem("token",resData.token);
        if(resData.success){router.push('/')}
    }
    return (
        <Account formType="Login" submitForm={(formData)=>{submitForm(formData)}}/>
    )   
}

export default Login;