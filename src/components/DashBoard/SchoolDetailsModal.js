import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SchoolDetailsModal extends React.Component {

    state = {
        modal: false,
        school : {}
    }

    //Sets the new state for the component
    componentDidMount() {
        let newState = {}
        newState.school = this.props.schools
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
                 color="primary"
                 size="sm"
                 type="button"
                 onClick={() => {
                     this.toggle();
                     }}>
                 Details</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.school.name}</ModalHeader>
                    <ModalBody>
                    Description
                    <br></br>{this.state.school.description}
                    <br></br>
                    <br></br>
                    Notes
                    <br></br>{this.state.school.notes}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default SchoolDetailsModal;