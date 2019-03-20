// import React, { Component } from "react"
// import { Button } from 'reactstrap';

// export default class SchoolForm extends Component {

//     state = {
//         name: "",
//     }

//     // Update state whenever an input field is edited
//     handleFieldChange = evt => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     /*
//         Local method for validation, creating animal object, and
//         invoking the function reference passed from parent component
//      */
//     constructNewSchool = evt => {
//         evt.preventDefault()
//         if (this.state.school === "") {
//             window.alert("Please Enter School Name")
//         } else {
//             const school = {
//                 name: this.state.name,
//                 userId:parseInt(sessionStorage.getItem('credentials'))
//             }

//             // Create the School and redirect user to the dashboard
//             this.props.addSchool(school).then(() => this.props.history.push("/dashboard"))
//             console.log(school)
//         }
//     }

// render() {
//     console.log("render -- DashBoardList")
//     return (
//         <React.Fragment>
//             <React.Fragment>
//                 <form className="schoolForm">
//                     <div className="form-group">
//                         <label htmlFor="schoolName">Enter New School</label>
//                         <input type="text" required
//                                className=""
//                                onChange={this.handleFieldChange}
//                                id="name"
//                                placeholder="Schools name" />
//                     </div>
//                     <Button
//                         color="primary"
//                         size="sm"
//                         type="submit" onClick={this.constructNewSchool} className="">
//                         Submit</Button>
//                 </form>
//             </React.Fragment>
//         </React.Fragment>
//         )
//     }
// }