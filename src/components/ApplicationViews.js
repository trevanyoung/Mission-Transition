import React, { Component } from "react"
import { Route } from "react-router-dom"

import LandingPage from "./LandingPage"

import SchoolList from "./DashBoard/SchoolList"
// import SchoolForm from "./DashBoard/SchoolForm"
import SchoolEdit from "./DashBoard/SchoolEdit"
import SchoolManager from "../modules/SchoolManager"

import SchoolOptions from "./DashBoard/SchoolOptions"
import SchoolOptionManager from "../modules/SchoolOptionManager"

import JobOptions from "./DashBoard/JobOptions"
import JobOptionManager from "../modules/JobOptionManager"

import JobList from "./DashBoard/JobList"
// import JobForm from "./DashBoard/JobForm"
import JobEdit from "./DashBoard/JobEdit"
import JobManager from "../modules/JobManager"

import ChatList from "./Chat/ChatList";
import ChatForm from "./Chat/ChatForm"
import ChatFormEdit from "./Chat/ChatFormEdit"
import ChatManager from "../modules/ChatManager"

import FriendList from "./Friend/FriendList"
import FriendOption from "./Friend/FriendOption"
import FriendManager from "../modules/FriendManager"

import GiBillInfo from "./GiBill/GiBillInfo.js"

import UserManager from "../modules/UserManager"
let activeuserId = parseInt(sessionStorage.getItem('credentials'))


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

  addJobOption = (jobOption) => {
    return JobOptionManager.addJobOption(jobOption)
      .then(() => JobOptionManager.getAll())
      .then(jobOptions => this.setState({
        jobOptions: jobOptions
      })
      )
  }

  addFriend = (friendOption) => {
    return FriendManager.addFriend(friendOption)
      .then(() => FriendManager.getAll())
      .then(friends=> this.setState({
        friends: friends
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

        .then(()=>ChatManager.getAll())
        .then(chats => newState.chats = chats)

        .then(()=>SchoolManager.getAll(activeuserId))
        .then(schools => newState.schools = schools)

        .then(()=>SchoolOptionManager.getAll())
        .then(schoolOptions => newState.schoolOptions = schoolOptions)

        .then(()=>JobManager.getAll(activeuserId))
        .then(jobs => newState.jobs =jobs)

        .then(()=>JobOptionManager.getAll())
        .then(jobOptions => newState.jobOptions =jobOptions)

        .then(()=>FriendManager.getAll(activeuserId))
        .then(friends => newState.friends = friends)



      .then(() => this.setState(newState))
  }
  render() {
    console.log(this.props.activeUser)
    return <React.Fragment>
            <Route exact path="/" render={(props) => {
                    return <LandingPage
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <SchoolList
                        {...props}
                        schools={this.state.schools}
                        deleteSchool={this.deleteSchool}
                         />
                }} />
            <Route exact path="/dashboard/:schoolId(\d+)/schooledit" render={(props) => {
                    return <SchoolEdit
                        {...props}
                        schools={this.state.schools}
                        updateSchool={this.updateSchool}
                         />
                }} />
            <Route exact path="/dashboard" render={(props) => {
                    return <JobList
                        {...props}
                        jobs={this.state.jobs}
                        deleteJob={this.deleteJob}
                         />
                }} />
            <Route exact path="/dashboard/:jobId(\d+)/jobedit" render={(props) => {
                    return <JobEdit
                        {...props}
                        jobs={this.state.jobs}
                        updateJob={this.updateJob}
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
                <Route exact path="/gibill" render={(props) => {
                    return <GiBillInfo
                         />
                        }} />
           </React.Fragment>
  }
}

export default ApplicationViews
