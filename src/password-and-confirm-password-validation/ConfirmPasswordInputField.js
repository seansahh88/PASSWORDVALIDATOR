function ConfirmPasswordInputField({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError}){
    return (
        <>
     <div className="form-group my-3">
        <input type="password" value={confirmPasswordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="Confirm Password" className="form-control" />
        <p className="text-danger">{confirmPasswordError}</p>
        <button className='button' disabled={handleValidation ? true : false}>Submit</button>
    </div>
        </>
    );
}

export default ConfirmPasswordInputField;