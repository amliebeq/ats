import React, { useEffect } from "react";
import Login from "./features/login_page/Login.js";
import { useDispatch, useSelector} from "react-redux";
import { userAdded } from "./features/login_page/loginSlice";
import { ApplicantList } from "./features/applicants/ApplicantList";
import { SideBar } from "./features/navigation/SideBar";
import './App.css'
import { JobsList } from "./features/Jobs/JobList";
import { ListList } from "./features/lists/ListList";
import { ApplicantDetail } from "./features/applicants/ApplicantDetail";
import { ListDetail } from "./features/lists/ListDetail";
import { HomePage } from "./features/home/HomePage";
import { Route, Routes } from "react-router-dom";
import { JobDetail } from "./features/Jobs/JobDetail.js";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login.user)
  
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
        <Routes>
          <Route exact path = '/' element={<HomePage />} />
          <Route exact path = '/candidates' element={<ApplicantList />} />
          <Route exact path = '/candidates/:id' element={<ApplicantDetail />} />
          <Route exact path = '/jobs' element={<JobsList />} />
          <Route exact path = '/jobs/:id' element={<JobDetail />} />
          <Route exact path = '/lists' element={<ListList />} />
          <Route exact path = '/lists/:id' element={<ListDetail />} />
        </Routes>
      </div>
    </div>
  )

}

export default App;