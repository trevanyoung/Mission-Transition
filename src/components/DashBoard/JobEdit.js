import React, { Component } from "react"
import JobManager from '../../modules/JobManager'




export default class JobEdit extends Component {
    // Set initial state
    state = {
        id:Number(this.props.match.params.schoolId),
        name:"",
        jobNotes: "",
        description:"",
        careerId: "",
        userId:"",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingJob = evt => {
      evt.preventDefault()

        const editedJob = {
          id: this.props.match.params.jobId,
          name: this.state.name,
          careerId:this.state.careerId,
          description:this.state.description,
          jobNotes: this.state.jobNotes,
          userId:parseInt(sessionStorage.getItem('credentials'))
        };

    this.props.updateJob(editedJob)
    .then(() => this.props.history.push("/dashboard"))

  }

    componentDidMount() {
      JobManager.get(this.props.match.params.jobId)
      .then(job => {
        this.setState({
          name:job.name,
          careerId:job.careerId,
          description:job.description,
          jobNotes: job.jobNotes,
          userId: job.userId
        });
      })
      .then(params=>console.log(this.state))
    }


    render() {
        return (
          <React.Fragment>
            <form className="JobEditForm">
              <div className="form-group">
                <label htmlFor="jobName">New Career Notes</label>
                <input
                  type="text"
                  required
                  className=""
                  onChange={this.handleFieldChange}
                  id="jobNotes"
                  value = {this.state.jobNotes}
                />
              </div>

              <button
                type="submit"
                onClick={this.updateExistingJob}
                className=""
                >Submit
              </button>
            </form>
          </React.Fragment>
        );
      }
  }