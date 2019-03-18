
import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./DashBoard.css"

export default class JobOptions extends Component {

    state = {
        name: "",
    }

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

  componentDidMount() {

  }

  constructNewJobOption = jobOption => {
    console.log(jobOption)
     if (this.props.jobs.find(job =>
        job.careerId === jobOption.careerId)=== undefined) {
            const newJobOption = {
                name: jobOption.name,
                careerId: jobOption.careerId,
                description: jobOption.description,
                userId:parseInt(sessionStorage.getItem('credentials'))
            }

            // Create the School and redirect user to the dashboard
            this.props.addJobOption(newJobOption).then(() => this.props.history.push("/dashboard"))
            console.log(newJobOption)

        } else {
            window.alert("You Already Have This Job")
        }

}

  render() {
    return (
      <div>
        <Button
        color="danger"
        size="sm"
        onClick={this.toggle}>{this.props.buttonLabel}
        View Jobs
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Job Options</ModalHeader>
          <ModalBody>
          <section className="schoolContainer">
                   {
                this.props.jobOptions.map(jobOption =>
                    <div key={jobOption.id}>
                        {jobOption.name}
                        <Button
                            color="primary"
                            size="sm"
                            type="button"
                            className=""
                            onClick={()=>this.constructNewJobOption(jobOption)}
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
