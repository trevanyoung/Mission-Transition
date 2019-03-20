import React, { Component } from "react"
import { Button } from 'reactstrap';


import "./DashBoard.css"
import SchoolDetailsModal from "./SchoolDetailsModal";

export default class SchoolList extends Component {
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
                <section className="schoolContainer">
                   <h2 className="title">My Schools</h2>
                   {
                this.props.schools.map(school =>
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
                            color="primary"
                            size="sm"
                            type="button"
                            className=""
                            onClick={() => this.props.deleteSchool(school.id)}
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
                </section>
            </React.Fragment>
        )
    }
}