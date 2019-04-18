import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class LandingPAge extends React.Component{


render (){
    return (
        <section>
            <div>
                <Jumbotron>
                    <h1 className="display-3">What is Mission Transition?</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p>Mission Transition is a social media platform focused on non traditional, vocational, and associate degree educational programs to help veterans quickly find their next place in the civillian job market</p>
                    <p className="lead">
                    <Button
                        color="primary"
                        href="/dashboard"
                    >Click here to get started!</Button>
                    </p>
                </Jumbotron>
            </div>
        </section>
        );
    };
}