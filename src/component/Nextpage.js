import React,{useState} from 'react'
import Navbar2 from './Navbar2'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FormMessage from './FormMessage';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
// import AddMarkSheet from './AddMarkSheet';
// import MarkSheetList from './MarkSheetList';
// import CollegeDetails from './CollegeDetails';
// import CollegeList from './CollegeList';

// import AddRole from './AddRole';
// import RoleList from './RoleList';
// import AddUser from './AddUser';
// import UserList from './UserList';

export default function Nextpage(props) {
  const [alert,setAlert]=useState(null);
 
  const showAlert=(message,type)=>{
    setAlert({
      message : message,
      type:type
    }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
    <>
     <Router>
     <Navbar2/>
     <FormMessage alert={alert} />

    <Switch>
    
 <Route exact path="/addstudent" ><AddStudent  showAlert={showAlert} /></Route>
  <Route exact path="/studentlist" ><StudentList showAlert={showAlert}/></Route> 
 <Route exact path="/addstudent/:id" ><AddStudent  showAlert={showAlert} /></Route>
  
  
    {/* <Route exact path="/addstudent/:sid"><AddStudent showAlert={showAlert}/></Route> */}
   {/* <Route exact path="/addmarksheet" component={AddMarkSheet} />
    <Route exact path="/marksheetlist" component={MarkSheetList}/>
    <Route exact path="/addmarksheet/:pid" component={AddMarkSheet} />
    <Route exact path="/collegedetails" component={CollegeDetails} />
    <Route exact path="/collegelist" component={CollegeList} />
    <Route exact path="/collegedetails/:cid" component={CollegeDetails} />
    <Route exact path="/addrole" component={AddRole} />
    <Route exact path="/rolelist" component={RoleList} />
    <Route exact path="/addrole/:rid" component={AddRole} />
    <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/userlist" component={UserList} />
    <Route exact path="/userlist/:uid" component={AddUser} /> 
     */}
    
    </Switch>
      </Router>
    </>
  )
}
