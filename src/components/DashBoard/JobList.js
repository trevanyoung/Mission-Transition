import React, { Component } from "react"
import { Button } from 'reactstrap';

import "./DashBoard.css"
import JobDetailsModal from "./JobDetailsModal";

export default class JobList extends Component {
        constructor(props) {
        super(props);
        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render() {
        return (
            <React.Fragment>
                <section className="jobContainer" >
                   <h2 className="title">My Jobs</h2>
                   {
                this.props.jobs.map(job =>
                    <div key={job.id}>
                        {job.name}
                        {job.salary}
                        {job.credential}
                        <Button
                            type="button"
                            className=""
                            onClick={() => {
                                this.props.history.push(`/dashboard/${job.id}/edit`);
                            }}
                            >Edit
                        </Button>
                        <Button
                            type="button"
                            className=""
                            onClick={() => this.props.deleteJob(job.id)}
                            >Delete
                        </Button>
                        <JobDetailsModal key={`jobContainer-${job.id}`}
                                jobs={job}
                                />
                    </div>
                )
            }
                </section>
            </React.Fragment>
        )
    }
}