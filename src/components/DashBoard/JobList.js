import React, { Component } from "react"
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

      deleteJob = (id) => {
        fetch(`http://localhost:8088/jobs/${id}`, {
          "method": "DELETE"
        })
          .then(() => JobManager.getAll(activeuserId))
          .then(jobs => this.setState({ jobs: jobs }))
      }

    render() {
        return (
            <React.Fragment>
                <div className="dashBoardContainer">
                    <section className="jobContainer" >
                    <h2 className="title">My Jobs</h2>
                    {
                    this.state.jobs.map(job =>
                        <div key={job.id}>
                            {job.name}
                            {job.salary}
                            {job.credential}
                            <Button
                                color="primary"
                                size="sm"
                                className=""
                                onClick={() => {
                                    this.props.history.push(`/dashboard/${job.id}/jobedit`);
                                }}
                                >Edit
                            </Button>
                            <Button
                                color="danger"
                                size="sm"
                                className=""
                                onClick={() =>this.deleteJob(job.id)}
                                >Delete
                            </Button>
                            <JobDetailsModal key={`jobContainer-${job.id}`}
                                    jobs={job}
                                    />
                        </div>
                    )
                }
                    </section>
                </div>
                <JobOptions
                {...this.props}
                addJob={this.addJob}
                jobOptions={this.state.jobOptions}
                />
            </React.Fragment>
        )
    }
}