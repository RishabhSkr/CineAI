    
    export const formValidate = (email, password) => {   
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        
        if (!isEmailValid) {
            return "Invalid email address!";
        }
        
        if (!isPasswordValid) {
            return "Invalid password! Password must contain at least 8 characters, including uppercase, lowercase, and numeric characters.";
        }
        
        return null;
    }
    