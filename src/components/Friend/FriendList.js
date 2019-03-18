import React, { Component } from "react"




export default class FriendList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="friendContainer" >
                   <h2 className="title">My Friends</h2>
                   {
                this.props.friends.map(friend=>
                    <div key={friend.id}>
                    {this.props.users.find(
                        user => user.id === friend.personId
                    ).username}
                        <button
                            type="button"
                            className=""
                            onClick={() => this.props.deleteFriend(friend.id)}
                            >Delete
                        </button>
                    </div>
                )
            }
                </section>
            </React.Fragment>
        )
    }
}