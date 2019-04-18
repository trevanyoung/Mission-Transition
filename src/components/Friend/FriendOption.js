
import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class FriendOption extends Component {

    state = {
        username: "",
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



  constructNewFriendOption = user => {
    console.log(user)
     if (this.props.friends.find(friend =>
        friend.personId === user.id)=== undefined) {
            const newFriend = {
                personId:user.id,
                userId:parseInt(sessionStorage.getItem('credentials'))
            }

            // Create the School and redirect user to the dashboard
            this.props.addFriend(newFriend).then(() => this.props.history.push("/friendslist"))
            console.log(newFriend)

        } else {
            window.alert("You Already Follow This Veteran!")
        }

}

  render() {
    return (
      <div>
        <Button
        color="danger"
        size="sm"
        onClick={this.toggle}>{this.props.buttonLabel}
        View Users
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Users</ModalHeader>
          <ModalBody>
          <section className="friendOptionContainer">
                   {
                this.props.users.map(user =>
                    <div key={user.id}>
                        {user.username}
                        <Button
                            color="primary"
                            size="sm"
                            type="button"
                            className=""
                            onClick={()=>this.constructNewFriendOption(user)}
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
