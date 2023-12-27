import React, { useState } from 'react';
import PasswordInputField from "./PasswordInputField";
import ConfirmPasswordInputField from "./ConfirmPasswordInputField";
function PasswordAndConfirmPasswordValidation(){

const [passwordError, setPasswordErr] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");
const [passwordInput, setPasswordInput]= useState({
    password:'',
    confirmPassword:''
})

const handlePasswordChange =(evnt)=>{

    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
    setPasswordInput(NewPasswordInput);
    
}
const handleValidation= (evnt)=>{

    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;

if(passwordInputFieldName==='password'){
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{6,}/;

    const passwordLength =      passwordInputValue.length;
    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);

    let errMsg ="";
    if(passwordLength===0){
            errMsg="Password is empty";
    }else if(!uppercasePassword){
            errMsg="At least one Uppercase";
    }else if(!lowercasePassword){
            errMsg="At least one Lowercase";
    }else if(!digitsPassword){
            errMsg="At least one digit";
    }else if(!specialCharPassword){
            errMsg="At least one Special Characters";
    }else if(!minLengthPassword){
            errMsg="At least minumum 6 characters";
    }else{
        errMsg="";
    }
    setPasswordErr(errMsg);
    }

    // for confirm password
    if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
            
        if(passwordInput.confirmPassword!==passwordInput.password)
        {
        setConfirmPasswordError("Confirm password is not matched");
        }else{
        setConfirmPasswordError("");
        }
        
    }

}

    return(
        <div className="row justify-content-center text-center m-5">
            <div className="col-sm-4">
                <h1>Password Validator</h1>
                <PasswordInputField 
                handlePasswordChange={handlePasswordChange} 
                handleValidation={handleValidation} 
                passwordValue={passwordInput.password} 
                passwordError={passwordError}/>
                <ConfirmPasswordInputField 
                handlePasswordChange={handlePasswordChange} 
                handleValidation={handleValidation} 
                confirmPasswordValue={passwordInput.confirmPassword} 
                confirmPasswordError={confirmPasswordError}/>
            </div>
        </div>
    );
}

export default PasswordAndConfirmPasswordValidation;