import{fireAuth} from './utils/firebase.config'
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth"; 
import{useState} from 'react'
import './App.css'
import EmailPassword from './featurs/EmailPassword';
import EmailPasswordSignUp from './featurs/EmailPasswordSignUp';
import AgeCalc from './featurs/AgeCalc';

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [verificationId, setVerificationId] = useState<any>();

const handleSendOTP = async (e: { preventDefault: () => void })=>{
  e.preventDefault();
   const appVerifier = new RecaptchaVerifier(fireAuth, "sign-in-button", 
  { size: "invisible", });
   try { 
    const confirmation = await signInWithPhoneNumber( fireAuth, `+91${phoneNumber}`, appVerifier );
    setVerificationId(confirmation); 
  } 
   catch (error) { 
    console.error("Error sending OTP:", error); 
  } 
  }  

const handleVeryfyOTP = async (e: { preventDefault: () => void }) => {
  e.preventDefault();
  try {
    const confirmation = await verificationId.confirm(verificationCode); 
    console.log("confirmation---> ", confirmation);
    localStorage.setItem("userID", confirmation?.user?.uid);
  } catch (error) {
    console.error("Error verifying OTP:", error);
  }
}

  return (
    
    <> 
    <form>
      <h1>Login with phoneNumber</h1>
      <br/>
      <br/>
    <label htmlFor="sign-in-button">Enter your phone number : </label>
    <input type="tel" style={{padding:"20px"}} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="enter PhoneNumber" id="sign-in-button" name="phone" required />
    <button type="button" style={{margin:"10px"}} onClick={handleSendOTP}>Send veryfication</button>
    <label htmlFor="verificationCode">Enter your OTP : </label>
    <input type="text" style={{padding:"20px"}} value={verificationCode} onChange={(e)=> setVerificationCode(e.target.value)} placeholder="enter OTP" name="verificationCode" id="verificationCode" min="6" max="6" required />
    <button type="button" style={{margin:"10px"}} onClick={handleVeryfyOTP}>OTP veryfication</button>
    </form>
    <br/>
    <br/>
    <br/>
    <EmailPassword/>
    <EmailPasswordSignUp/>
    <br/>
    <br/>
    <br/>
    <AgeCalc/>
    </>
  )
}

export default App
