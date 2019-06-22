import React, { Component } from "react"
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import "./DashBoard.css"
import JobDetailsModal from "./JobDetailsModal";
import JobManager from "../../modules/JobManager"
import JobOptionManager from "../../modules/JobOptionManager"
import JobOptions from "./JobOptions";
let activeuserId = parseInt(sessionStorage.getItem('credentials'))
export default class JobList extends Component {


    state = {
        jobs: [],
        jobOptions: []
    }

    componentDidMount() {

        let newState ={}
         JobManager.getAll(activeuserId)
         .then(jobs => newState.jobs = jobs)
         .then(()=>JobOptionManager.getAll())
         .then(jobOptions => newState.jobOptions = jobOptions)

         .then(() => this.setState(newState))
     }


    addJob = (job) => {
        return JobManager.addJob(job)
          .then(() => JobManager.getAll(activeuserId))
          .then(jobs => this.setState({
            jobs: jobs
          })
          )
      }


    render() {
        return (
            <React.Fragment>
                {/* <div className="componentContainer">
                <div className="dashBoardContainer">
                    <section className="jobContainer" > */}
                    <h2 className="jobTitle">My Jobs</h2>
                    {
                    this.props.jobs.map(job =>
                        <div className="jobDiv" key={job.id}>
                            <div className="jobNameDiv">
                            {job.name}
                            </div>
                                <div className="buttonDiv">
                                {job.salary}
                                {job.credential}
                                <Button
                                    color="primary"
                                    size="sm"
                                    className="editButton"
                                    onClick={() => {
                                        this.props.history.push(`/dashboard/${job.id}/jobedit`);
                                    }}
                                    >Edit
                                </Button>
                                <Button
                                    color="danger"
                                    size="sm"
                                    className="deleteButton"
                                    onClick={() =>this.props.deleteJob(job.id)}
                                    >Delete
                                </Button>
                                <JobDetailsModal key={`jobContainer-${job.id}`}
                                        jobs={job}
                                        />
                                </div>
                        </div>
                    )
                }
                <JobOptions
                {...this.props}
                addJob={this.props.addJob}
                jobOptions={this.state.jobOptions}
                />
                        {/* </section>

                </div>
                </div> */}
            </React.Fragment>
        )
    }
}