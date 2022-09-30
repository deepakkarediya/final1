import axios from "axios";
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import FormError from './FormError'
import FormMessage from "./FormMessage";

const AddStudent = (props) => {

  // const {params}=useParams();
  console.log(useParams());
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    collegeId: ''
  })
  const [inputError, setInputError] = useState({
    message: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    collegeId: '',
    type: ''
  })
  const changestate = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setInputError({});
  }
  //  if(id) {
  //     getdata()
  //   }
   const reset = () => {
    setForm({});

  }
  // const getdata = async () => {
  //   // let id = props.match.params.sid;
  //   axios.get("http://api.sunilos.com:9080/ORSP10/Student/get/"+id)
  //     .then((res) => {
  //       console.log(res);
  //       setForm(res.data.result.data);

  //     })
  // }

  const save = () => {
    axios.post("http://api.sunilos.com:9080/ORSP10/Student/save", form)
      .then((res) => {

        if (res.data.result.inputerror) {
          setInputError(res.data.result.inputerror);
        }
        else {
          props.showAlert("Add Student successfully", "success");
        }

      })

  }

  return (
    <>
      {(() => {
        if (inputError.message) {
          return (

            <FormMessage type={inputError.type} message={inputError.message} />
          )
        }
      })()
      }
      <center>
        <div id="data">
          <form>
              <h4>Add Student </h4>
             
            <table cellPadding="15" >
              <tbody>

                <tr>
                  <td>FirstName:</td>
                  <td style={{ width: "73%" }}>
                    <input type="text" id="t1" placeholder="Enter Firstname" name="firstName" value={form.firstName} onChange={changestate} />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.firstName} /></td>
                </tr>

                <tr>
                  <td>LastName:</td>
                  <td><input type="text" id="t1" placeholder="Enter Lastname" name="lastName" value={form.lastName} onChange={changestate} /></td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.lastName} /></td>
                </tr>
                <tr>
                  <td>email:</td>
                  <td><input type="email" id="t1" placeholder="Enter emailaddress" name="email" value={form.email} onChange={changestate} /></td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.email} /></td>
                </tr>

                <tr>
                  <td>MobileNo:</td>
                  <td><input type="number" id="t1" placeholder="Enter MobileNo" name="mobileNo" value={form.mobileNo} onChange={changestate} /></td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.mobileNo} /></td>
                </tr>
                <tr>
                  <td>CollegeId:</td>
                  <td><input type="number" id="t1" placeholder="Enter CollegeId" name="collegeId" value={form.collegeId} onChange={changestate} /></td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.collegeId} /></td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}> <button type='button' onClick={save} style={{ width: "91px" }} className='B'>Add</button> </td>
                  <td> <input type="reset" onClick={reset} className="B" /></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </center>
    </>
  )
}
export default AddStudent;

