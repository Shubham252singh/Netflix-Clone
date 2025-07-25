export const checkValidEmailAndPassword = (email,password)=>{
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
    if(!emailRegex.test(email)){
        return "Enter a valid email id.";
    }
    if(!passwordRegex.test(password)){
        return "Enter a valid password.";
    }
    return null;
}