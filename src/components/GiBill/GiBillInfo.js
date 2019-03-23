import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class GiBillInfo extends React.Component{


render (){
    return (
        <section>
            <div>
                <Jumbotron>
                    <h1 className="display-3">Post 9/11 Gi Bill</h1>
                    <p className="lead">The Post-9/11 GI Bill offers higher education and training benefits to Veterans and Servicemembers who served after Sept. 10, 2001, and, in some cases, to their families. The Post-9/11 GI Bill covers support for the following activities:</p>
                    <hr className="my-2" />
                    <p>Click below to learn more</p>
                    <p className="lead">
                    <Button
                    color="primary"
                    href="https://explore.va.gov/education-training/gi-bill"
                    >Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
            <br></br>
            <br></br>
            <div>
                <Jumbotron>
                    <h1 className="display-3">Montgomery GI Bill (MGIB)</h1>
                    <p className="lead">The Montgomery GI Bill (MGIB) assists active duty Servicemembers and Reservists in pursuing higher education degrees, certificates, and other education and training. MGIB supports those who enlist in the U.S. armed forces through two main programs:</p>
                        <Button
                        href="https://www.va.gov/education/about-gi-bill-benefits/montgomery-active-duty/"
                        >Montgomery GI Bill Active Duty
                        </Button>
                            <br></br>
                        <Button
                        href="https://www.va.gov/education/about-gi-bill-benefits/montgomery-selected-reserve/"
                        >Montgomery GI Bill Selected Reserve
                        </Button>
                    <hr className="my-2" />
                    <p>Click below to learn more about The Gi Bill !</p>
                    <p className="lead">
                    <Button
                    color="primary"
                    href="https://explore.va.gov/education-training/montgomery-gi-bill"
                    >Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
            <div>
                <Jumbotron>
                    <h1 className="display-3">Veterans Job Training</h1>
                    <p className="lead">VA benefits provide on-the-job training and apprenticeship support through programs that typically involve a training contract with an employer or union for a specific period of time. Use VA’s Comparison Tool to locate training or apprenticeships in your state.</p>
                    <hr className="my-2" />
                    <p>Click below to learn more</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        </section>
        );
    };
}