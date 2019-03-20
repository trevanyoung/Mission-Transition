import React, { Component } from "react"
import ChatBubbleCard from "./ChatBubbleCard";
import "./ChatForm.css"

export default class ChatList extends Component {

    state = {
        chats: ""
    }


    render() {
        console.log("render -- ChatList")
        // const {messages} = this.props;
        return (
            <section className="chats">
            <div className="">
            {
                this.props.chats.map(chat =>
                    <div key={chat.id}>
                        <div>
                            <ChatBubbleCard
                            chat={chat}
                            />
                        </div>
                    </div>
                )
            }
            </div>
        </section>
    )}
}