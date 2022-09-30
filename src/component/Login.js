import React, { useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Nextpage from "./Nextpage";
import FormError from "./FormError";
// import FormMessage from "./FormMessage";

export default function Login(props) {
    const [form, setForm] = useState({
        loginId: '',
        password: ''
    })
    const [inputError, setInputError] = useState({
        message: "",
        type: '',
        loginId: '',
        password: ''

    })

    const changestate = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const login = () => {

        axios.post("http://api.sunilos.com:9080/ORSP10/Auth/login", form)
            .then((res) => {
                // console.log(res);
                if (res.data.success === true) {
                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    root.render(<Nextpage />);

                }
               else if (res.data.result.inputerror) {
                    setInputError(res.data.result.inputerror)
                }
                else if(res.data.result.message) {
                    props.showAlert(res.data.result.message,"warning");
                    // setInputError({ message: res.data.result.message })

                }
            })




    }


    return (
        <>
           
              <center>
                <div id="data">
                    <form>
                        <h2 style={{
                            borderRadius: "16px",
                            display: "inline-block",
                            width: "25%",
                            background: "linear-gradient(358deg, #ffe7e7, #bda1a108)"
                        }}>Login</h2>



                        <table cellPadding="15" >
                            <tbody>

                                <tr>
                                    <td>Enter UserId:</td>
                                    <td style={{ width: "61%" }}>
                                        <input type="text" id="t1" placeholder="Enter UserName" name="loginId" value={form.loginId} onChange={changestate} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.loginId} /></td>
                                </tr>

                                <tr>
                                    <td>Enter Password:</td>
                                    <td><input type="number" id="t1" placeholder="Enter Password" name="password" value={form.password} onChange={changestate} /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError error={inputError.password} /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: "center" }}> <button type='button' onClick={login} className='B'>Login</button> </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </center>
        </>
    )
}
