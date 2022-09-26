import { useRouter } from 'next/router';
import Account from "../components/account";


const Signup = () => {
  const router = useRouter()
  const submitForm = async (formData)=>{
      let response = await fetch(`api/account/signup`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      let resData = await response.json();
      alert(resData.message);
      if(resData.success){router.push('login')}
    }
   return (
      <>
        <Account formType="Signup" submitForm={(formData)=>{submitForm(formData)}}/>
      </>
   );
};

export default Signup;
