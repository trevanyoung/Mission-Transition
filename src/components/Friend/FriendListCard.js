import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

// const FriendListCard = (props) => {


export default class FriendListCard extends React.Component{


render (){
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> {this.props.users.find(
                        user => user.id === this.props.friend.personId
                    ).username}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
            <Button
              type="button"
              className=""
              onClick={() => this.props.deleteFriend(this.props.friend.id)}
            >Unfollow
            </Button>
        </CardBody>
      </Card>
    </div>
  );
};
}