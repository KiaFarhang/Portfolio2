if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}

require('./scss/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';

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

class PortfolioItem extends React.Component {
	constructor(props){
		super(props);

		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick(){
	// 	if (screen.width < 768){
	// 		this.className = 'hide';
	// 	}
	// }
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
						title: "GameCala",
						link: "https://gamecala.com",
						linkTitle: "GameCala",
						imgSrc: "img/gca.jpg",
						imgAlt: "GameCala",
						caption: "Web app",
						description: "Description"
					},
					{
						id: 2,
						title: "Daily Dog Email",
						link: "https://dailydogemail.com",
						linkTitle: "Daily Dog Email",
						imgSrc: "img/dde.jpg",
						imgAlt: "Daily Dog Email",
						caption: "Node server/mailing list",
						description: "Description"
					},
					{
						id: 3,
						title: "Yalla Chrome Extension",
						link: "https://chrome.google.com/webstore/detail/yalla/jhlpghijadgjojbpepmkegbbefgnioeo",
						linkTitle: "Yalla Chrome Extension",
						imgSrc: "img/yext.jpg",
						imgAlt: "Yalla Chrome Extension",
						caption: "Chrome Extension",
						description: "Description"
					},
					{
						id: 4,
						title: "SEO Keyword Generator",
						link: "https://www.yallahq.com/keyword-generator",
						linkTitle: "SEO Keyword GEnerator",
						imgSrc: "img/key.jpg",
						imgAlt: "SEO Keyword Generator",
						caption: "Web app",
						description: "Description"
					},
					{
						id: 5,
						title: "Swiss Army Notebook",
						link: "https://chrome.google.com/webstore/detail/swiss-army-notebook/hlbcccckmdljmcigplbhkjdafjhbknec",
						linkTitle: "Swiss Army Notebook",
						imgSrc: "img/san.jpg",
						imgAlt: "Swiss Army Notebook",
						caption: "Chrome extension",
						description: "Description"
					},
					{
						id: 6,
						title: "Anne Millerbernd",
						link: "http://www.amillerbernd.com",
						linkTitle: "Anne Millerbernd",
						imgSrc: "img/am.jpg",
						imgAlt: "Anne Millerbernd",
						caption: "Personal portfolio site",
						description: "Description"
					}
			]; 

let portfolioItems = array.map((item) =>
	<PortfolioItem key ={item.id} title={item.title} link={item.link} linkTitle={item.linkTitle} imgSrc={item.imgSrc} imgAlt={item.imgAlt} caption={item.caption} description={item.description}/>
	);

class App extends React.Component {
	render(){
		return (
			<div>
				<section id="top"></section>
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
