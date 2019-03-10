import React, { Component } from 'react'; //this is my own component 
import './Hello.css' //link to Hello.css



// as a function
const Hello = (props) => {
	return (// brackets is needed to return
			<div className = 'f1 tc'>{/*tachyon added className = 'f1 tc' */}
				<h1>Hello Woorld !</h1>
				<p>welcome to React!</p>
				<p>{props.greeting}</p>
			{/*this.props.greeting is changed to this coz props is not an object anymore*/}
			</div>
		);		
}

export default Hello;  


//as a class - this is default
// class Hello extends Component {
// 	render() {
// 		return (// brackets is needed to return
// 			<div className = 'f1 tc'>{tachyon added className = 'f1 tc' }

// 				<h1>Hello Woorld !</h1>
// 				<p>welcome to React!</p>
// 				<p>{this.props.greeting}</p>
// 			</div>
// 		);
// 	}
// }