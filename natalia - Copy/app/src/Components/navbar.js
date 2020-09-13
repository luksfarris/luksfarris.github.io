import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import portfolio from '../generated/portfolio.json';
import { withStyles, Button } from '@material-ui/core';

const styles = () => ({
	navItem: {
		display: 'inline',
		marginLeft: '2rem',
		color: '#333',
		'&:hover': {
			cursor: 'pointer',
			color: 'black'
		},
		'&>.active': {
			borderBottom: '8px solid #3f51b5'
		}
	},
	navLogo: {
		width: '120px',
		fontWeigth: '900',
		letterSpacing: '2px',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	nav: {
		backgroundColor: '#fafafaaa',
		position: 'fixed',
		top: '0px',
		width: '100%',
		height: '80px',
		zIndex: '10',
		boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)'
	},
	navContent: {
		padding: '0rem 3rem',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%'
	}
});

class Navbar extends Component {
	scrollToTop = () => {
		scroll.scrollToTop({ duration: 500 });
	};

	createNavItem = (classes, name, toLink) => {
		return (
			<li className={classes.navItem} key={toLink}>
				<Link activeClass="active" to={toLink} spy={true} smooth={true} offset={0} duration={300}>
					<Button color="primary">{name}</Button>
				</Link>
			</li>
		);
	};

	navItems = (classes) => {
		return portfolio.map((gallery) => {
			return this.createNavItem(classes, gallery.gallery, gallery.gallery);
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<nav className={classes.nav + ' hidden-on-small'} id="navbar">
				<div className={classes.navContent}>
					<h3 className={classes.navLogo} onClick={this.scrollToTop}>
						Nali Dwis
					</h3>
					<ul className="nav-items">
						{this.navItems(classes)}
						{this.createNavItem(classes, 'Contact', 'contact')}
					</ul>
				</div>
			</nav>
		);
	}
}

export default withStyles(styles, { withTheme: false })(Navbar);
