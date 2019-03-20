// import React, { Component } from "react"


// export default class JobForm extends Component {

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
//     constructNewJob = evt => {
//         evt.preventDefault()
//         if (this.state.job === "") {
//             window.alert("Please Enter Career Name")
//         } else {
//             const job = {
//                 name: this.state.name,
//                 userId:parseInt(sessionStorage.getItem('credentials'))
//             }

//             // Create the School and redirect user to the dashboard
//             this.props.addJob(job).then(() => this.props.history.push("/dashboard"))
//             console.log(job)
//         }
//     }

// render() {
//     console.log("render -- DashBoardList")
//     return (
//         <React.Fragment>
//             <React.Fragment>
//                 <form className="jobForm">
//                     <div className="form-group">
//                         <label htmlFor="schoolName">Enter New Career</label>
//                         <input type="text" required
//                                className=""
//                                onChange={this.handleFieldChange}
//                                id="name"
//                                placeholder="Career name" />
//                     </div>
//                     <button type="submit" onClick={this.constructNewJob} className="">Submit</button>
//                 </form>
//             </React.Fragment>
//         </React.Fragment>
//         )
//     }
// }