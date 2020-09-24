import React ,{ useContext, useState } from 'react';
import Header from '../Header/Header';
import'./Auth.css';
import img from '../../Icon/fb.png';
import img1 from "../../Icon/google.png"
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './AuthManager';

const Auth = () => {
    const  [user,setUser] = useState({
        isSignedIn: false,
        newUser: false,
        firstName:'',
        lastName:'',
        email:'',
        error:'',
        password:'',
        photo: '',
      })

      initializeLoginFramework()

   const {loggedInUser, setLoggedInUser} = useContext(UserContext);
   const history = useHistory();
   const location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const googleSignIn = () => {
     handleGoogleSignIn()
     .then(res => {
       setUser(res);
       setLoggedInUser(res);
       history.replace(from);
     })
   }
   const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }
   const signOut = () => {
        handleSignOut()
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
        })
   }
   const [newUser, setNewUser] = useState(false)

     
      const handleBlur = (e) => {
          let isFieldValid = true;
          if(e.target.name === 'email'){
              isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
          }
          if(e.target.name === 'password') {
                const isPasswordValid = e.target.value.length> 6;
                const passwordHasNumber = /\d{1}/.test(e.target.value)
                isFieldValid = isPasswordValid && passwordHasNumber
          }
          if(isFieldValid){
            const newUserInfo  =  {...user};
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
          }
      }
      const handleSubmit = (e) => {
        if(newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name,user.email, user.password)
            .then(res =>{
              setUser(res);
              setLoggedInUser(res);
              history.replace(from); 
            })
        }

        if(!newUser && user.email && user.password){
          signInWithEmailAndPassword(user.email, user.password)
          .then(res =>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from); 
          })
        }
        e.preventDefault();
      }
      
    return (
        <div className="auth">
            <Header></Header>

            <form onSubmit={handleSubmit} className="p-4 text-center style">
                <h4>Create an account</h4>
               { newUser && <input  type="text" onBlur={handleBlur}  name="firstName" required placeholder="First name"/>}
                <br/>
                 {newUser && <input  type="text" onBlur={handleBlur}  name="lastName" required  placeholder="Last name"/>}
                <br/>
                <input onBlur={handleBlur} type="text" name="email" required placeholder="Username or email"/>
                <br/>
                <input onBlur={handleBlur} type="password" id="password"name="password" required placeholder="password"/>
                <br/>
                <br/>
                {newUser && <input onBlur={handleBlur} className='bg-warning' type="submit" value=" Create an account"/>}
                {!newUser && <input className='bg-warning' type="submit" value=" Log in "/>}
                {newUser && <p>Already have an account?<span  className='text-warning' cursor="pointer"  onClick={() =>setNewUser(!newUser)}>Log in </span></p>}
                {!newUser && <p>Don't have an account?<span className='text-warning' onClick={() =>setNewUser(!newUser)}>Sign in  </span></p>}
                <p style={{color:'red',text:'center'}}>{user.error}</p>
                {user.success && <p style={{color:'green',text:'center'}}>User {newUser ? 'created' :'logged in' } successfully</p>}
            </form>
            
            
            <hr style={{width:'300px'}}/>
            <div className="icon">
                <button onClick={fbSignIn} className="text-center ml-5 button "> <img src={img} className="icon-img"alt=""/> Continue with facebook</button>
                <br/>
                <br/>
                <button onClick={googleSignIn} className="text-center ml-5 button "> <img src={img1} className="icon-img" alt=""/> Continue with Google</button>
            </div>
        </div>
    );
};

export default Auth;