import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenticaion =()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthenticaion;

/* steps for authenticaition 
---------------------------
 Step-1 Initial SetUp
1. firebase : create project
2. create  web app
3. get configurantion
4. initialize firebase
5.Enable auth method

-------------------
Step-2 
1. Create Login Component 
2. Create Login Component 
3. create Route for Login and Register
-------------------------
Setp 3: set auth system
1. set up sign in method
2. setup sign out method 
3.user state
4. special observer
5.return necessary nethods and states from useFirebase
--------------------------
setp-4 create auth context hook(useAuth)
1.  create a auth context 
2. Create context Provider
3. set Context Provider context  value
4. use Auth Provider
5. Create useAuth Hook
----------------------------
Step-5 create private route
1. create private Route 
2. set private route
--------------------------
Step-6:Navigate after login
1.after login navigate user to their desired  destination
 
*/