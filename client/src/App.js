import React, { useEffect } from "react";
import Login from "/home/amliebeq/Developement/code/ats/client/src/features/login_page/Login.js";
import { useDispatch, useSelector} from "react-redux";
import { userAdded } from "./features/login_page/loginSlice";
import { ApplicantList } from "./features/applicants/ApplicantList";
import { Route, Switch } from "react-router-dom";
import { SideBar } from "./features/navigation/SideBar";
import './App.css'
import { JobsList } from "./features/Jobs/JobList";
import { ListList } from "./features/lists/ListList";
import { ApplicantDetail } from "./features/applicants/ApplicantDetail";
import { ListDetail } from "./features/lists/ListDetail";
import { HomePage } from "./features/home/HomePage";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login.user)
  console.log(user)
  
  useEffect(() => { 
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then ((user) => dispatch(userAdded(user)))
      }
    })
  }, [dispatch])

  if (!user) return <Login />

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col">
        <Switch>
        <Route exact path = '/'>
            <HomePage />
          </Route>
          <Route exact path = '/applicants'>
            <ApplicantList />
          </Route>
          <Route exact path = '/applicants/:id'>
            <ApplicantDetail />
          </Route>
          <Route exact path = '/jobs'>
            <JobsList />
          </Route>
          <Route exact path = '/lists'>
            <ListList />
          </Route>
          <Route exact path = '/lists/:id'>
            <ListDetail />
          </Route>
        </Switch>
      </div>
    </div>
  )

}

export default App;