import React, { Component } from "react"
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';


import "./DashBoard.css"
import SchoolDetailsModal from "./SchoolDetailsModal";
import SchoolManager from "../../modules/SchoolManager";
import SchoolOptionManager from "../../modules/SchoolOptionManager"
import SchoolOptions from "./SchoolOptions";
import JobList from "./JobList";
let activeuserId = parseInt(sessionStorage.getItem('credentials'))
export default class SchoolList extends Component {

    state = {
        schools: [],
        schoolOptions: []
    }

    componentDidMount() {

       let newState ={}
        SchoolManager.getAll(activeuserId)
        .then(schools => newState.schools = schools)
        .then(()=>SchoolOptionManager.getAll())
        .then(schoolOptions => newState.schoolOptions = schoolOptions)

        .then(() => this.setState(newState))
    }

    addSchool = (school) => {
        return SchoolManager.addSchool(school)
          .then(() => SchoolManager.getAll(activeuserId))
          .then(schools => this.setState({
            schools: schools
          })
          )
      }

      deleteSchool = (id) => {
        fetch(`http://localhost:8088/schools/${id}`, {
          "method": "DELETE"
        })
          .then(() => SchoolManager.getAll(activeuserId))
          .then(schools => this.setState({ schools: schools }))
      }



    render() {
        return (
            <React.Fragment>
                <div className="dashBoardContainer">
                    <section className="jobContainer">
                    <JobList
                            {...this.props}
                            jobs={this.props.jobs}
                            deleteJob={this.props.deleteJob}
                            addJob={this.props.addJob}/>
                            </section>
                        <section className="schoolContainer">
                        <h2 className="schoolTitle">My Schools</h2>
                        {
                        this.state.schools.map(school =>
                            <div key={school.id}>
                                {school.name}
                                <Button
                                    color="primary"
                                    size="sm"
                                    className=""
                                    onClick={() => {
                                        this.props.history.push(`/dashboard/${school.id}/schooledit`);
                                    }}
                                    >Edit
                                </Button>
                                <Button
                                    color="danger"
                                    size="sm"
                                    type="button"
                                    className=""
                                    // onClick={() => this.props.deleteSchool(school.id)}
                                    onClick={() =>this.deleteSchool(school.id)}
                                    >Delete
                                </Button>
                                <div>
                                    <SchoolDetailsModal key={`schoolContainer-${school.id}`}
                                        schools={school}

                                        />

                            </div>
                        </div>
                        )
                    }
                                    <SchoolOptions
                                    {...this.props}
                                    addSchool={this.addSchool}
                                    schoolOptions={this.state.schoolOptions}
                                    />
                        </section>
                </div>
            </React.Fragment>
        )
    }
}