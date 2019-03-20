import React, { Component } from "react"
import SchoolManager from '../../modules/SchoolManager'




export default class SchoolEdit extends Component {
    // Set initial state
    state = {
        id:Number(this.props.match.params.schoolId),
        name:"",
        notes: "",
        description:"",
        institutionId:"",
        userId:"",
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
          name:this.state.name,
          institutionId:this.state.institutionId,
          description:this.state.description,
          notes: this.state.notes,
          userId:parseInt(sessionStorage.getItem('credentials'))
        };

    this.props.updateSchool(editedSchool)
    .then(() => this.props.history.push("/dashboard"))

  }

    componentDidMount() {
      SchoolManager.get(this.props.match.params.schoolId)
      .then(school => {
        this.setState({
          name:school.name,
          institutionId:school.institutionId,
          description:school.description,
          notes: school.notes,
          userId: school.userId
      });
  })
.then(params=>console.log(this.state))
}


    render() {
        return (
          <React.Fragment>
            <form className="SchoolEditForm">
              <div className="form-group">
                <label htmlFor="schoolName">New School Notes</label>
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