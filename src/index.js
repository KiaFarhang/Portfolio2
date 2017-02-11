if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}

require('./scss/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';

class Top extends React.Component {
	render(){
		return (
			<section id="top">
				<div id="name-image">
					<img alt="Kia Farhang" src="img/kf.jpg"/>
					<h2>Kia Farhang</h2>
				</div>
				<div id="about">
					<p>Hi! I'm a JavaScript developer living in Southern California. I worked as a journalist before entering the web world, and I currently split my time between coding and writing at <a href="https://www.lemonadestand.org/" title="Lemonade Stand" target="_blank">the marketing agency Lemonade Stand.</a></p>
					<p>My dream job is to build web applications, and you can see some of my work below. That's about as many "I-me-my" sentences as I can take.</p>
			        <p>Shoot me an email or check me out on GitHub.</p>
			        <div id="contact"><a href="mailto:kfarhang0@gmail.com" title="Email Kia at kfarhang0@gmail.com"><i className="icon-mail-alt"></i></a> <a href="https://github.com/KiaFarhang" title="Kia Farhang on GitHub" target="_blank"><i className="icon-github"></i></a> <a href="https://www.linkedin.com/in/kia-farhang-68423966" title="My LinkedIn page" target="_blank"><i className="icon-linkedin-squared"></i></a></div>
				</div>
			</section>
		)
	}
}

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
				<p dangerouslySetInnerHTML = {{__html: this.props.description}}></p>
			</div>
		);
	}
}

class PortfolioItem extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="work">
				<h4 onClick={this.handleClick}>
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
						id: 1,
						title: "PokéBuilder",
						link: "https://bots.kik.com/#/dittobot",
						linkTitle: "PokéBuilder",
						imgSrc: "img/dit.jpg",
						imgAlt: "PokéBuilder",
						caption: "Kik chatbot",
						description: "Not a Pokémon fan, but some of my little cousins are. I <a href=\"https://bots.kik.com/#/dittobot\" target=\"_blank\" title=\"Pokebuilder\">built a chatbot</a> that lets them (or anyone else) customize a Pokémon they want, then tell me to send it to them. Kik can't handle user state, so I created a database to track every user's position in my control flow. <a href=\"https://github.com/KiaFarhang/dittobot\" title=\"Pokebuilder code\" target=\"_blank\">Check out the code</a> if you want to see a million JavaScript promises."
					},
					{
						id: 2,
						title: "GameCala",
						link: "https://gamecala.com",
						linkTitle: "GameCala",
						imgSrc: "img/gca.jpg",
						imgAlt: "GameCala",
						caption: "Web app",
						description: "I love video games, but never have time to play them. A popular site for tracking game lengths had no good way to compare multiple games at once, and no API to get their data. So I scraped the site, created my own database and built <a href=\"https://gamecala.com\" target=\"_blank\" title=\"GameCala\">GameCala</a> on a DigitalOcean VPS. All the code is <a href=\"https://github.com/KiaFarhang/GameCala\" title=\"GameCala code\" target=\"_blank\">available on GitHub.</a>"
					},
					{
						id: 3,
						title: "Daily Dog Email",
						link: "https://dailydogemail.com",
						linkTitle: "Daily Dog Email",
						imgSrc: "img/dde.jpg",
						imgAlt: "Daily Dog Email",
						caption: "Node server/mailing list",
						description: "My girlfriend really likes dogs, and I wanted to get a better handle on Node. So I wrote a script to query Petfinder's API for a random dog, package the information about the dog (photo, location, etc.) into an email and send one to her daily. Then I figured - why not open it up to anyone? About a week of 'how do I deploy to Heroku' and 'Mailgun's documentation is not great' later, I finally launched <a href=\"https://dailydogemail.com\" target=\"_blank\" title=\"Daily Dog Email\">the Daily Dog Email.</a> You can <a href=\"https://github.com/KiaFarhang/daily-dog\" target=\"_blank\" title=\"Daily Dog Email on GitHub\">check out the code on GitHub</a> and even join the mailing list yourself!"
					},
					{
						id: 4,
						title: "Yalla-Groove integration",
						link: "https://github.com/KiaFarhang/yalla_groove",
						linkTitle: "Yalla-Groove integration",
						imgSrc: "img/gro.jpg",
						imgAlt: "Yalla-Groove integration",
						caption: "API integration",
						description: "<a href=\"https://yallahq.com\" title=\"Yalla\" target=\"_blank\">Yalla</a> is project management software built at Lemonade Stand. We also use Groove to handle client requests. But tickets sometimes went too long without getting answered. I set up a webook that sends new tickets to a Node app I created. The app checks the client's email address against a PostgreSQL database I built to figure out who their account manager is. Then, after 10 minutes, if no one has answered the ticket, the app sends a task to the account manager through the Yalla API reminding them to get back to the client. The best part about building this is we almost never have to use it - knowing it's there was enough to speed up our responsiveness. <a href=\"https://github.com/KiaFarhang/yalla_groove\" title=\"Yalla-Groove\" target=\"_blank\">See the code (with my first unit tests!) on GitHub.</a>"
					},
					{
						id: 5,
						title: "Yalla Chrome Extension",
						link: "https://chrome.google.com/webstore/detail/yalla/jhlpghijadgjojbpepmkegbbefgnioeo",
						linkTitle: "Yalla Chrome Extension",
						imgSrc: "img/yext.jpg",
						imgAlt: "Yalla Chrome Extension",
						caption: "Chrome Extension",
						description: "<a href=\"https://chrome.google.com/webstore/detail/yalla/jhlpghijadgjojbpepmkegbbefgnioeo\" title=\"Yalla on the Chrome store\" target=\"_blank\">My Chrome extension</a> lets Yalla users add priorities for themselves or others from anywhere on the web. Basically an on-demand web form, the extension bundles a user's priority details and sends them to the Yalla priority-creation API. <a href=\"https://github.com/KiaFarhang/yallaExt\" title=\"Yalla extension code\" target=\"_blank\">Check out the code on GitHub.</a>"
					},
					{
						id: 6,
						title: "Swiss Army Notebook",
						link: "https://chrome.google.com/webstore/detail/swiss-army-notebook/hlbcccckmdljmcigplbhkjdafjhbknec",
						linkTitle: "Swiss Army Notebook",
						imgSrc: "img/san.jpg",
						imgAlt: "Swiss Army Notebook",
						caption: "Chrome extension",
						description: "<a href=\"https://chrome.google.com/webstore/detail/swiss-army-notebook/hlbcccckmdljmcigplbhkjdafjhbknec\" title=\"Swiss Army Notebook\" target=\"_blank\">This extension</a> is designed to make reporters' lives easier. It taps into Merriam-Webster's API to give you a one-click thesaurus and dictionary, binds some new keyboard shortcuts to Chrome and lets users batch-search competitors' websites on Google. Code what you know, right? Code <a href=\"https://github.com/KiaFarhang/Swiss-Army-Notebook\" title=\"Swiss Army Notebook on GitHub\" target=\"_blank\">available on GitHub.</a>"
					}
			]; 

let portfolioItems = array.map((item) =>
	<PortfolioItem key ={item.id} title={item.title} link={item.link} linkTitle={item.linkTitle} imgSrc={item.imgSrc} imgAlt={item.imgAlt} caption={item.caption} description={item.description}/>
	);

class App extends React.Component {
	render(){
		return (
			<div>
				<Top></Top>
				<section id="portfolio">
					<h3>My Work</h3>
					<div id="displayZone"></div>
					{portfolioItems}
				</section>
			</div>
		);
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('app')
	);

var items = document.querySelectorAll('h4');

if (screen.width < 768) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggleDisplayMobile);
    }
} else {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggleDisplay);
    }
}

function toggleDisplayMobile(e) {
    var div = e.target.parentElement;
    var contents = div.getElementsByTagName('div');
    var content = contents[0];
    var heading = div.firstChild.nextSibling;
    content.classList.toggle('show');
    heading.classList.toggle('selected');
}

function toggleDisplay(e) {

    var div = e.target.parentElement;
    var contents = div.getElementsByTagName('div');
    var content = contents[0];
    var heading = div.firstChild.nextSibling;
    var display = document.getElementById('displayZone');


    if (display.firstChild) {
        if (isAlreadyDisplayed(display)) {
            display.removeChild(display.firstChild);
        } else {
            display.removeChild(display.firstChild);
            addThisContent(content);
        }
    } else {
        addThisContent(content);
    }


    function addThisContent(e) {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(e.cloneNode(true));

        fragment.firstChild.classList.toggle('show');

        display.appendChild(fragment);
    }

    function isAlreadyDisplayed(e) {
        var displayedText = e.getElementsByTagName('p');
        var oldText = displayedText[0];
        var otherText = content.getElementsByTagName('p');
        var newText = otherText[0];

        return (oldText.isEqualNode(newText));
    }



}
