import React, { Component } from "react";
import '../stylesheets/book.css'
import '../stylesheets/person.css'

// function Person(){
//     return (
//       <div>
//         <h1>adder a new person</h1>
//       </div>
//     );
//     // return React.createElement('div', null, React.createElement('h1', null, 'adder a new person'))
// }

// let Person = (info) => {
//     console.log(info)
//     return (
//         <div className="person-info">
//             <h3>Name : { info.name }</h3>
//             <h3>Age: { info.age }</h3>
//             <h3>Bio: { info.children }</h3>
//         </div>
//     );
// }

class Person extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        // console.log(this.props)
        return (
            <div className="person-info">
                <h1>Book List</h1>
            </div>
        );
    }
}

export default Person