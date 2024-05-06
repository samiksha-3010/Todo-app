import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth.context";

function Login (){
    const  {state,login,logout} = useContext (AuthContext);
    // console.log(state, "state")
    const [userData, setUserData] = useState({email: "", password: ""});
    const router = useNavigate ();

    const handleChange = (event) =>{
         setUserData ({ ...userData ,[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password){
            const users = JSON.parse(localStorage.getItem("User"))
            console.log(users)
            var flag = false;
           for (let i = 0; i< users.length; i++ ){
            if (users[i].email == userData.email && users[i].password == userData.password) {         // re assign
                flag = true;
                break;
            } 
           }
           if (flag == false){
            return alert ("please check credentails..")
           }else{
            // localStorage.setItem("Current-user", JSON.stringify(userData))
            login(userData);            //current user
            alert ("Login Sucessfull..");


            setUserData({ email: "", password: "" })
            router('/home')
           }

        }else{
            alert ("fill the all field....")
        }
    }

    return(
        <div id="register-style">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label><br/>
            <input type="name" name='email' onChange={handleChange}/><br/>
            <label>Password</label><br/>
            <input type="password" name='password' onChange={handleChange}/><br/>
           <div id="button-type"><input type='submit' value='Login'/><br/></div>
           <button onClick={() => router("/register")}>Register</button>
          
        </form>
         </div>
    )
}
export default Login;