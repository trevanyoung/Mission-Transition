import React, { Component } from "react"
import { Button } from 'reactstrap';
import "./ChatForm.css"
// Set initial state
//State must match Id value of input fields

export default class ChatBubbleCard extends Component {

    state = {
        chats: "",
        users:","
    }


    render() {
        console.log("render -- ChatList")
        // const {messages} = this.props;
        return (
            <section className="chats">
            <div className="speech-bubble">
            {
                this.props.chat.message}
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
                        <Button
                            type="button"
                            color="primary"
                            size="sm"
                            className="btn btn-success"
                            onClick={() => this.props.deleteChatMessage(this.props.chat.id)}
                            >Delete
                        </Button>
                    </div>
                )
            }
        </section>
    )}
}