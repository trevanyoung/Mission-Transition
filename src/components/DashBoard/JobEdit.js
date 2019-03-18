import React, { Component } from "react"
import JobManager from '../../modules/SchoolManager'




export default class SchoolEdit extends Component {
    // Set initial state
    state = {
        name: "",
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
          userId:parseInt(sessionStorage.getItem('credentials'))
        };

    this.props.updateJob(editedJob)
    .then(() => this.props.history.push("/dashboard"))

  }

    componentDidMount() {
      JobManager.get(this.props.match.params.job)
      .then(job => {
        this.setState({
            job: this.state.job
        });
      });
    }


    render() {
        return (
          <React.Fragment>
            <form className="JobEditForm">
              <div className="form-group">
                <label htmlFor="jobName">New Career Name</label>
                <input
                  type="text"
                  required
                  className=""
                  onChange={this.handleFieldChange}
                  id="name"
                  value = {this.state.jobName}
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