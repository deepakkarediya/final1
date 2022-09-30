import axios from "axios";
import React,{useState} from "react";
import FormError from "./FormError";
import FormMessage from "./FormMessage";

const Registration =(props)=> {

  const [form,setForm] = useState({
        firstName:'',
        lastName:'',
        loginId:"",
        password:"",
        roleId:'138'
    })
  const [inputError,setInputError] = useState({
        message:"",
        type:'',
        firstName:'',
        lastName:'',
        loginId:"",
        password:"",
        roleId:''
    })
   const changestate = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
      setInputError({});
   }
       
  const save=()=>{
    axios.post("http://api.sunilos.com:9080/ORSP10/User/save/",form)
    .then((res)=>{
        console.log(res);
        if(res.data.result.inputerror)
            {
                setInputError(res.data.result.inputerror)
            }
           else if(res.data.result.message){
              props.showAlert(res.data.result.message,"warning");
            }
           else {
              props.showAlert("Register successfully","success");
              // setInputError({message:"Register Succesfully",type:"success"})
            }
     
    });
  }
 const reset=()=>{
 setForm({});
 setInputError({});
  }
    return (
      <>
      {(()=>{
        if(inputError.message){
          return (

        <FormMessage type={inputError.type} message={inputError.message}/>
          )
        }
      })()
      }
        <center>
          <div id="data">
          <form>
          <h4>Student Registration</h4>  
          
          <table cellPadding="15" > 
          <tbody>

          <tr>
          <td>FirstName:</td>
          <td style={{width:"73%"}}>
          <input type="text" id="t1" placeholder="Enter Firstname" value={form.firstName} onChange={changestate} name="firstName" />
          </td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError error={inputError.firstName} /></td>          
          </tr> 
          
          <tr>
          <td>LastName:</td>
          <td><input type="text" id="t1"  placeholder="Enter Lastname" value={form.lastName} onChange={changestate} name="lastName" /></td>
          </tr>
          
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError error={inputError.lastName} /></td>          
          </tr> 
          <tr>
          <td>LoginId:</td>
          <td><input type="text" id="t1"  placeholder="Enter LoginId" value={form.loginId} onChange={changestate} name="loginId" /></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError error={inputError.loginId} /></td>          
          </tr> 
          <tr>
          <td>Password:</td>
          <td><input type="text" id="t1"  placeholder="Enter password" value={form.password} onChange={changestate} name="password" /></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError error={inputError.password} /></td>          
          </tr> 
         
          <tr>
          <td>RoleId:</td>
          <td><input type="text" id="t1"  placeholder="Enter RoleId" value={form.roleId} onChange={changestate} name="roleId" /></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError error={inputError.roleId} /></td>          
          </tr> 
          <tr>
          <td style={{textAlign:"center"}}> <button type='button' onClick={save} style={{width:"91px"}} className='B'>Register</button> </td>
          <td> <input type="reset" onClick={reset} className="B"/></td>
          </tr>
          </tbody>
          </table>
          </form>
          </div>
          </center>
      </>
    )
  }
export default Registration;
