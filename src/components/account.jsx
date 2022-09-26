import Image from "next/image";
import { useState } from "react";


const Account = ({ formType, submitForm } = props) => {
   const [passwordView, setPasswordView] = useState(false);
   const [confirmPasswordView, setConfirmPasswordView] = useState(false);

   const [formData, setFormData] = useState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const updateFormData = (event) => {
      setFormData((preValue) => {
         return {
            ...preValue,
            [event.target.name]: event.target.value
         };
      });
   };

   const submit = (event)=>{
        event.preventDefault();
        // check password
        let {password, confirmPassword} =  formData;
        if(password !== confirmPassword && formType === "Signup") alert("Password is not Same");
        // call submitForm function
        submitForm(formData);
   }

   return (
      <>
         <section className="d-flex account_sec">
            <div className="account_sec_img">
               <Image src="/account-bg-img.png" alt="Picture of the author" layout="fill" />
            </div>
            <div className="account_sec_content">
               <div className="account_sec_inner">
                  <h2 className="account_sec_heading text-white">
                     {formType} with <b> Novagems </b>
                  </h2>
                  <p className="account_sec_subheading text-white">Enter your details below.</p>
                  <form className="account_form" onSubmit={submit}>
                     {formType == "Signup" && 
                        <div className="form_group">
                            <label htmlFor="name" className="form_control_label d-inline-block text-white">
                            Username
                            </label>
                            <input type="text" id="name" name="userName" className="form_control d-block" placeholder="User Name" required onChange={updateFormData} value={formData.userName} />
                        </div>
                     }
                     <div className="form_group">
                        <label htmlFor="name" className="form_control_label d-inline-block text-white">
                           Email
                        </label>
                        <input type="text" id="email" name="email" className="form_control d-block" placeholder="User Email" required onChange={updateFormData} value={formData.email} />
                     </div>
                     <div className="form_group">
                        <label htmlFor="password" className="form_control_label d-inline-block text-white">
                           Password
                        </label>
                        <div className="password_wrap">
                           <input type={passwordView ? "text" : "password"} id="password" name="password" className="form_control d-block" placeholder="Password" required onChange={updateFormData} value={formData.password} />
                           <button
                              type="button"
                              className="togglePassword"
                              onClick={() => {
                                 setPasswordView(!passwordView);
                              }}
                           >
                              {passwordView ? <Image src="/view.svg" width="20px" height="20px" /> : <Image src="/notvisible.svg" width="20px" height="20px" />}
                           </button>
                        </div>
                     </div>
                     {formType == "Signup" && 
                        <div className="form_group">
                            <label htmlFor="confirmPassword" className="form_control_label d-inline-block text-white">
                            Confirm Password
                            </label>
                            <div className="password_wrap">
                            <input type={confirmPasswordView ? "text" : "password"} id="confirmPassword" name="confirmPassword" required className="form_control d-block" placeholder="confirm Password" onChange={updateFormData} value={formData.confirmPassword} />
                            <button
                                type="button"
                                className="togglePassword"
                                onClick={() => {
                                    setConfirmPasswordView(!confirmPasswordView);
                                }}
                            >
                                {confirmPasswordView ? <Image src="/view.svg" width="20px" height="20px" /> : <Image src="/notvisible.svg" width="20px" height="20px" />}
                            </button>
                            </div>
                        </div>
                     }
                     <div className="form_group">

                        <button className="cta cta-dark" type="submit">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
};

export default Account;
