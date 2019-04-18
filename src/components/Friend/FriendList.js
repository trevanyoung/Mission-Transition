import React, { Component } from "react"

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';


import FriendManager from "../../modules/FriendManager"
import FriendOptionManager from "../../modules/FriendOptionManager"
import UserManager from "../../modules/UserManager"
import FriendOption from "./FriendOption"
import FriendListCard from "./FriendListCard";

let activeuserId = parseInt(sessionStorage.getItem('credentials'))


export default class FriendList extends Component {

    state = {
        friends: [],
        friendOptions: [],
        users:[]
    }

    componentDidMount() {

        let newState ={}
         FriendManager.getAll(activeuserId)
         .then(friends => newState.friends = friends)
         .then(()=>FriendOptionManager.getAll())
         .then(friendOptions => newState.friendOptions = friendOptions)
         .then(()=>UserManager.getAll())
         .then(users => newState.users = users)

         .then(() => this.setState(newState))
     }


     addFriend = (friendOption) => {
        return FriendManager.addFriend(friendOption)
          .then(() => FriendManager.getAll(activeuserId))
          .then(friends=> this.setState({
            friends: friends
          })
          )
      }

      deleteFriend = (id) => {
        fetch(`http://localhost:8088/friends/${id}`, {
          "method": "DELETE"
        })
          .then(() => FriendManager.getAll(activeuserId))
          .then(friends => this.setState({ friends: friends }))
      }



    render() {
        return (
            <React.Fragment>
                <section className="friendContainer" >
                   <h2 className="title">My Friends</h2>
                   {
                    this.state.friends.map(friend=>
                    <div key={friend.id}>
                        <div>
                            <FriendListCard key={`friendContainer-${friend.id}`}
                                {...this.props}
                                friend={friend}
                                users={this.state.users}
                                deleteFriend={this.deleteFriend}
                                />
                        </div>
                    </div>
                )
            }
                </section>
                    <FriendOption
                    {...this.props}
                    addFriend={this.addFriend}
                    friendOptions={this.state.friendOptions}
                    />
            </React.Fragment>
        )
    }
}