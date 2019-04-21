import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class JobDetailsModal extends React.Component {

    state = {
        modal: false,
        job : {}
    }

    //Sets the new state for the component
    componentDidMount() {
        let newState = {}
        newState.job = this.props.jobs
        console.log(newState)
        this.setState(newState)
    }


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render() {

        return (
            <div>
                <Button
                 color="secondary"
                 size="sm"
                 type="button"
                 onClick={() => {
                     this.toggle();
                     }}>
                 Details</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.job.name}</ModalHeader>
                    <ModalBody>
                    <p className="modalDescriptions">Description</p>
                    <br></br>{this.state.job.description}
                    <br></br>
                    <br></br>
                    Notes
                    <br></br>{this.state.job.jobNotes}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default JobDetailsModal;