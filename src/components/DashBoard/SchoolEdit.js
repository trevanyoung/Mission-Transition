import React, { Component } from "react"
import SchoolManager from '../../modules/SchoolManager'




export default class SchoolEdit extends Component {
    // Set initial state
    state = {
        notes: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingSchool = evt => {
      evt.preventDefault()

        const editedSchool = {
          id: this.props.match.params.schoolId,
          institutionId:this.state.institutionId,
          description:this.state.description,
          notes: this.state.notes,
          userId:parseInt(sessionStorage.getItem('credentials'))
        };

    this.props.updateSchool(editedSchool)
    .then(() => this.props.history.push("/dashboard"))

  }

    componentDidMount() {
      SchoolManager.get(this.props.match.params.school)
      .then(school => {
        this.setState({
            school: school
        });
      });
    }


    render() {
        return (
          <React.Fragment>
            <form className="SchoolEditForm">
              <div className="form-group">
                <label htmlFor="schoolName">Notes</label>
                <input
                  type="text"
                  required
                  className=""
                  onChange={this.handleFieldChange}
                  id="notes"
                  value = {this.state.notes}
                />
              </div>

              <button
                type="submit"
                onClick={this.updateExistingSchool}
                className=""
                >Submit
              </button>
            </form>
          </React.Fragment>
        );
      }
  }