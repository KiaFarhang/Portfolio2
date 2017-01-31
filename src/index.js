if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}

require('./style.scss');
import React from 'react';
import ReactDOM from 'react-dom';

// function formatName(user){
// 	return user.firstName + ' ' + user.lastName;
// }

// let user = {
// 	firstName: 'Anne',
// 	lastName: 'Millerbernd'
// };

// function tick(){
// 	let element = (
// 	<div>
// 	<h1>Hello, {formatName(user)}!</h1>
// 	<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 	</div>
// );

// ReactDOM.render(
// 	element,
// 	document.getElementById('app')
// 	);
// }

// setInterval(tick, 1000);

// class Welcome extends React.Component {
// 	render(){
// 		return <h1>Hello, {this.props.name} {this.props.lastName}</h1>
// 	}
// }

// class App extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				<Welcome name="Kia" lastName="Farhang" />
// 				<Welcome name="Anne" lastName="Millerbernd" />
// 			</div>
// 		);
// 	}
// }

// const element = <Welcome name="Kia" lastName="Farhang" />;
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('app')
// );


// class Clock extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {date: new Date()};
// 	}

// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			() => this.tick(),
// 			1000
// 			);
// 	}

// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}

// 	tick(){
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<h1>Hello!</h1>
// 				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 			</div>
// 			);
// 	}
// }

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Clock />
// 				<Clock />
// 				<Clock />
// 			</div>
// 			);
// 	}
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('app')
// 	);

// class Toggle extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {isToggleOn: true};

// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.setState(prevState => ({
// 			isToggleOn: !prevState.isToggleOn
// 		}));
// 	}

// 	render(){
// 		return (
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'ON' : 'OFF'}
// 			</button>
// 			);
// 	}
// }

class Figure extends React.Component {
	render(){
		return (
			<figure>
				<a href={this.props.link} title={this.props.linkTitle} target="_blank">
					<img src={this.props.imgSrc} alt={this.props.imgAlt} />
				</a>
				<figcaption>
					{this.caption}
				</figcaption>
			</figure>
		);
	}
}

class ProjectDescription extends React.Component {
	render(){
		return (
			<div>
				<p>
					{this.props.description}
				</p>
			</div>
		);
	}
}

// class PortfolioItem extends React.Component {
// 	render(){
// 		return (
// 			<div className="work">
// 				<h4>
// 					{this.props.title}
// 				</h4>
// 				<div className="hide">
// 					<Figure link={this.props.link} linkTitle={this.props.linkTitle} imgSrc={this.props.imgSrc} imgAlt={this.props.imgAlt} />
// 					<ProjectDescription description={this.props.description}/>
// 				</div>
// 			</div>
// 		);
// 	}
// }

class PortfolioItem extends React.Component {
	render(){
		return (
			<div className="work">
				<h4>
					{this.props.title}
				</h4>
				<div className="hide">
					<Figure {...this.props} />
					<ProjectDescription {...this.props}/>
				</div>
			</div>
		);
	}
}

let array = [
					{
						title: "GameCala",
						link: "https://gamecala.com",
						linkTitle: "GameCala",
						imgSrc: "gca.jpg",
						imgAlt: "GameCala",
						description: "Description"
					}
			]; 
			
ReactDOM.render(

	<PortfolioItem title={array[0].title} link={array[0].link} linkTitle={array[0].linkTitle} imgSrc={'./src/gca.jpg'} imgAlt={array[0].imgAlt} description={array[0].description}/>,
	document.getElementById('app')
	);