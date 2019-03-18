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

    schoolDetails = () => {
        alert("THIS MODAL LIVES")
        // const schoolDetails = {
        //     id: this.state.id,
        //     name: this.state.name,
        //     description:this.state.description,
        //     userId: this.state.userId,

        // };

        // this.setState({ modal: false })
        // this.props.displayDetails(schoolDetails)


    };

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
                    {this.state.school.description}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

console.log("why")
export default SchoolDetailsModal;