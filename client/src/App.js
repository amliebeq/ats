import React, { useEffect } from "react";
import Login from "./features/login_page/Login.js";
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

  if (!user) return (<div className="h-screen pt-4 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500"><Login /></div>)

  return (
    <div className="flex gap-6 bg-white h-max">
      <SideBar />
      <div className="flex-grow w-11/12">
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