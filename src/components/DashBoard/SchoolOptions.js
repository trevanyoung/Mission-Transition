
import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./DashBoard.css"

export default class SchoolOptions extends Component {


  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  constructNewSchoolOption = schoolOption => {
    console.log(schoolOption)
     if (this.props.schools.find(school =>
        school.institutionId === schoolOption.institutionId)=== undefined) {
            const newSchoolOption = {
                name: schoolOption.name,
                institutionId: schoolOption.institutionId,
                description: schoolOption.description,
                userId:parseInt(sessionStorage.getItem('credentials'))
            }

            // Create the School and redirect user to the dashboard
            this.props.addSchool(newSchoolOption).then(() => this.props.history.push("/dashboard"))
            console.log(newSchoolOption)

        } else {
            window.alert("You Already Have This School")
        }

}

  render() {
    return (
      <div>
        <p className="viewSchoolsButton">
          <Button
          color="info"
          size="sm"
          onClick={this.toggle}>{this.props.buttonLabel}
          View Schools
          </Button>
        </p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>School Options</ModalHeader>
          <ModalBody>
          <section className="schoolContainer">
                   {
                this.props.schoolOptions.map(schoolOption =>
                    <div key={schoolOption.id}>
                        {schoolOption.name}
                        <Button
                            color="primary"
                            size="sm"
                            type="button"
                            className=""
                            onClick={()=>this.constructNewSchoolOption(schoolOption)}
                            >Add
                        </Button>
                    </div>
                )
            }
                </section>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close Window</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
