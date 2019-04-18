import React, { Component } from "react"
import { Button } from 'reactstrap';
import "./ChatForm.css"

import ChatManager from "../../modules/ChatManager"
// Set initial state
//State must match Id value of input fields

export default class ChatBubbleCard extends Component {

    state = {
        chats: "",
        users:","
    }

    deleteChatMessage = (id) => {
        // if (this.state.chats.userId === parseInt(sessionStorage.getItem('credentials')))
        fetch(`http://localhost:8088/chats/${id}`, {
          "method": "DELETE"
        })
            .then(() => ChatManager.getAll())
            .then(chats => this.setState({ chats: chats }))
          // else {
          //   window.alert("You can only delete your message XD")
          // }
      }


    render() {
        console.log("render -- ChatList")
        // const {messages} = this.props;
        return (
            <div className="speech-bubble-container">
                <div className="speech-bubble">
                {
                    this.props.chat.message}
                    <br></br>
                            <Button
                                type="button"
                                color="primary"
                                size="sm"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/chats/${this.props.chat.id}/edit`);
                                }}
                                >Edit
                            </Button>
                    <br></br>
                            <Button
                                type="button"
                                color="primary"
                                size="sm"
                                className="btn btn-success"
                                onClick={() => this.deleteChatMessage(this.props.chat.id)}
                                >Delete
                            </Button>
                </div>
            </div>
    )}
}