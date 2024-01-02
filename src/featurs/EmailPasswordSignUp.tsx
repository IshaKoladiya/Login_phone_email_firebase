import { useState } from "react"
import {signInWithEmailAndPassword } from "firebase/auth";
import {fireAuth} from "../utils/firebase.config"

const EmailPasswordSignUp = () => {

    const [emailPass, setemailPass] = useState({email:"" , password: ""});

    const emPass = (e : React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setemailPass({...emailPass , [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
           const res = await signInWithEmailAndPassword(
                fireAuth, 
                emailPass.email,
                emailPass.password,
            );
            console.log("sign In---> ", res );
        } catch (error) {
            console.log(error)
        }
}


  return (
    <>
    <div>
        <h1>sing In with EmailPassword</h1>
      <br/>
      <br/>
    <form onSubmit={handleSubmit}>
    <label>Log In Email : &nbsp;&nbsp;
    <input type="email" style={{padding:"20px"}} value={emailPass.email} onChange={emPass} placeholder="enter Email" name="email" required />
    </label> &nbsp;&nbsp;
    <label>PassWord : &nbsp;&nbsp;
    <input type="password" style={{padding:"20px"}} value={emailPass.password} onChange={emPass} placeholder="enter password" name="password" required />
    </label>
    <input type="submit" style={{margin:"10px" , padding:"10px"}} value="Sign In"/>
    </form>
    <br/>
    </div>
    </>
  )
}

export default EmailPasswordSignUp
