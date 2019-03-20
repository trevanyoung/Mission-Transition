import React, { Component } from "react"

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

import FriendListCard from "./FriendListCard";


export default class FriendList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="friendContainer" >
                   <h2 className="title">My Friends</h2>
                   {
                    this.props.friends.map(friend=>
                    <div key={friend.id}>
                        <div>
                            <FriendListCard key={`friendContainer-${friend.id}`}
                                {...this.props}
                                friend={friend}
                                users={this.props.users}
                                />
                        </div>
                    </div>
                )
            }
                </section>
            </React.Fragment>
        )
    }
}