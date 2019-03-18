import React, { Component } from "react"
import { Route } from "react-router-dom"

import SchoolList from "./DashBoard/SchoolList"
import SchoolForm from "./DashBoard/SchoolForm"
import SchoolEdit from "./DashBoard/SchoolEdit"
import SchoolManager from "../modules/SchoolManager"

import SchoolOptions from "./DashBoard/SchoolOptions"
import SchoolOptionManager from "../modules/SchoolOptionManager"

import JobOptions from "./DashBoard/JobOptions"
import JobOptionManager from "../modules/JobOptionManager"

import JobList from "./DashBoard/JobList"
import JobForm from "./DashBoard/JobForm"
import JobEdit from "./DashBoard/JobEdit"
import JobManager from "../modules/JobManager"

import ChatList from "./Chat/ChatList";
import ChatForm from "./Chat/ChatForm"
import ChatFormEdit from "./Chat/ChatFormEdit"
import ChatManager from "../modules/ChatManager"

import FriendList from "./Friend/FriendList"
import FriendManager from "../modules/FriendManager"

import UserManager from "../modules/UserManager"



class ApplicationViews extends Component {


  state = {
    chats: [],
    users: [],
    schools:[],
    schoolOptions:[],
    jobs:[],
    jobOptions:[],
    friends:[]
  }

  addChat = (chat) => {
    return ChatManager.addChat(chat)
      .then(() => ChatManager.getAll())
      .then(chats => this.setState({
        chats: chats
      })
      )
  }

  updateChat = (chat) => {
    return ChatManager.updateChat(chat)
      .then(() => ChatManager.getAll())
      .then(chats => this.setState({
        chats: chats
      })
      )
  }

  deleteChatMessage = (id) => {
    // if (this.state.chats.userId === parseInt(sessionStorage.getItem('credentials')))
    fetch(`http://localhost:8088/chats/${id}`, {
      "method": "DELETE"
    })
      .then(() => fetch("http://localhost:8088/chats?_expand=user"))
      .then(r => r.json())
      .then(chats => this.setState({ chats: chats }))
      // else {
      //   window.alert("You can only delete your message XD")
      // }
  }

  addSchool = (school) => {
    return SchoolManager.addSchool(school)
      .then(() => SchoolManager.getAll())
      .then(schools => this.setState({
        schools: schools
      })
      )
  }

  updateSchool = (school) => {
    return SchoolManager.updateSchool(school)
      .then(() => SchoolManager.getAll())
      .then(schools => this.setState({
        schools: schools
      })
      )
  }

  deleteSchool = (id) => {
    fetch(`http://localhost:8088/schools/${id}`, {
      "method": "DELETE"
    })
      .then(() => fetch("http://localhost:8088/schools?userId"))
      .then(r => r.json())
      .then(schools => this.setState({ schools: schools }))
  }

  addSchoolOption = (schoolOption) => {
    return SchoolOptionManager.addSchoolOption(schoolOption)
      .then(() => SchoolOptionManager.getAll())
      .then(schoolOptions => this.setState({
        schoolOptions: schoolOptions
      })
      )
  }

  addJob = (job) => {
    return JobManager.addJob(job)
      .then(() => JobManager.getAll())
      .then(jobs => this.setState({
        jobs: jobs
      })
      )
  }

  updateJob = (job) => {
    return JobManager.updateJob(job)
      .then(() => JobManager.getAll())
      .then(jobs => this.setState({
        jobs: jobs
      })
      )
  }

  deleteJob = (id) => {
    fetch(`http://localhost:8088/jobs/${id}`, {
      "method": "DELETE"
    })
      .then(() => fetch("http://localhost:8088/jobs?userId="))
      .then(r => r.json())
      .then(jobs => this.setState({ jobs: jobs }))
  }

  addJobOption = (jobOption) => {
    return JobOptionManager.addJobOption(jobOption)
      .then(() => JobOptionManager.getAll())
      .then(jobOptions => this.setState({
        jobOptions: jobOptions
      })
      )
  }

  deleteFriend = (id) => {
    fetch(`http://localhost:8088/friends/${id}`, {
      "method": "DELETE"
    })
      .then(() => fetch("http://localhost:8088/friends?userId="))
      .then(r => r.json())
      .then(jobs => this.setState({ jobs: jobs }))
  }


  componentDidMount() {
    const activeuserId = parseInt(sessionStorage.getItem('credentials'))
    const newState = {}
      UserManager.getAll()
        .then(users => newState.users = users)
      ChatManager.getAll()
        .then(chats => newState.chats = chats)
      SchoolManager.getAll(activeuserId)
        .then(schools => newState.schools = schools)
      SchoolOptionManager.getAll()
        .then(schoolOptions => newState.schoolOptions = schoolOptions)
      JobManager.getAll(activeuserId)
        .then(jobs => newState.jobs =jobs)
      JobOptionManager.getAll()
        .then(jobOptions => newState.jobOptions =jobOptions)
      FriendManager.getAll(activeuserId)
        .then(friends => newState.friends = friends)

      .then(() => this.setState(newState))
  }
  render() {
    console.log(this.props.activeUser)
    return <React.Fragment>
            <Route exact path="/dashboard" render={(props) => {
                    return <SchoolList
                        {...props}
                        schools={this.state.schools}
                        deleteSchool={this.deleteSchool}
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <SchoolForm
                        {...props}
                        schools={this.state.schools}
                        addSchool={this.addSchool}
                         />
                }} />
            <Route exact path="/dashboard/:schoolId(\d+)/edit" render={(props) => {
                    return <SchoolEdit
                        {...props}
                        schools={this.state.schools}
                        updateSchool={this.updateSchool}
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <SchoolOptions
                        {...props}
                        schools={this.state.schools}
                        schoolOptions={this.state.schoolOptions}
                        addSchoolOption={this.addSchoolOption}
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <JobList
                        {...props}
                        jobs={this.state.jobs}
                        deleteJob={this.deleteJob}
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <JobForm
                        {...props}
                        jobs={this.state.jobs}
                        addJob={this.addJob}
                         />
                }} />
            <Route exact path="/dashboard/:jobId(\d+)/edit" render={(props) => {
                    return <JobEdit
                        {...props}
                        jobs={this.state.jobs}
                        updateJob={this.updateJob}
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <JobOptions
                        {...props}
                        jobs={this.state.jobs}
                        jobOptions={this.state.jobOptions}
                        addJobOption={this.addJobOption}
                         />
                }} />
           <Route exact path="/chats" render={(props) => {
                    return <ChatList
                        {...props}
                        chats={this.state.chats}
                        users={this.state.users}
                        deleteChatMessage={this.deleteChatMessage}/>
                }} />
           <Route exact path="/chats" render={(props) => {
                    return <ChatForm
                        {...props}
                        chats={this.state.chats}
                        users={this.state.users}
                        addChat={this.addChat}/>
                }} />
            <Route exact path="/chats/:chatId(\d+)/edit" render={(props) => {
                    return <ChatFormEdit
                        {...props}
                        chats={this.state.chats}
                        updateChat={this.updateChat}/>
                }} />
            <Route exact path="/friendslist" render={(props) => {
                    return <FriendList
                        {...props}
                        users={this.state.users}
                        friends={this.state.friends}
                        deleteFriend={this.deleteFriend}/>
                }} />
           </React.Fragment>
  }
}

export default ApplicationViews
