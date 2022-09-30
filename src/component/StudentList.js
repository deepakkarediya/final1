import React, { useState,useEffect} from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';

export default function StudentList(props) {
    const [list, setList] = useState([]);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        collegeId: '',
        email: '',
        mobileNo: '',
    })
    const [inputError, setInputError] = useState({
        message: "",

    })
    const changestate = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        setInputError({});
     }
    
    useEffect(() => {
        search(); 
    },)
    
    const reset=()=>{
        setForm({});
     
    }


   const search=()=> {
        axios.post("http://api.sunilos.com:9080/ORSP10/Student/search/",form)
            .then((res) => {
               setList(res.data.result.data);
            });
    }
    const datadelete= async (id)=> {
        let url = "http://api.sunilos.com:9080/ORSP10/Student/delete/" + id;
        axios.get(url).then((res) => {
           
            props.showAlert("Data Deleted successfully","success");
            search();
        });
    }

    return (
        <>
        <form action="">
            <div style={{ margin: '5px' }} className="container overflow-hidden text-center my-5">
                <div className="row gx-2">
                    <div className="col text-end">
                        <div className="p-3 ">  <input name="collegeId" type="number" placeholder='Search by collegeId'
                            value={form.collegeId}
                            onChange={changestate} /></div>
                    </div>
                    <div className="col text-start">
                        <div className="p-3 "><input name="email" placeholder='Search by email' type="email"
                            value={form.email}
                            onChange={changestate} /> &nbsp; &nbsp;
                            <button type='button'
                                onClick={search}>Search</button> &nbsp; &nbsp;
                            <input type="reset" onClick={reset} />
                            </div>
                    </div>

                </div>
            </div>
            </form>
            <table style={{ width: "70%", margin: "0px 200px" }} className="table table-success table-hover table-bordered border-success">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">id</th>

                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">email</th>
                        <th scope="col">collegeId</th>
                        <th scope="col">mobileNo</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((ele, i) => (
                        <tr key={i}>

                            <td>{ele.id}</td>

                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.email}</td>
                            <td>{ele.collegeId}</td>
                            <td>{ele.mobileNo}</td>


                            <td> <button className="btn btn-primary " type="button" onClick={()=>datadelete(ele.id)}>Delete</button> </td>
                            <td><Link to={`/addstudent/${ele.id}`}>Edit</Link></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}
