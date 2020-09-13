import React from 'react';
import './App.css';

import Navbar from './Components/navbar';
import Section from './Components/section';

import IntroSection from './Components/intro';

import portfolio from './generated/portfolio.json';
import Contact from './Components/contact';
import { Fab, Zoom, makeStyles } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { animateScroll as scroll } from 'react-scroll';

const originals = require.context('../public/original', true);
const thumbnails = require.context('../public/thumbnail', true);

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2)
	},
	image: {
		maxWidth: '50vw'
	}
}));

function sections(classes) {
	var allSections = [ <IntroSection key={'intro'} /> ];
	allSections.push(
		portfolio.map((gallery) => {
			return (
				<Section
					dark={portfolio.indexOf(gallery) % 2 === 1}
					id={gallery.gallery}
					key={gallery.gallery}
					images={gallery.photos.map((photo) => {
						return {
							key: thumbnails(`./${gallery.gallery}/${photo}`),
							content: (
								<img
									src={thumbnails(`./${gallery.gallery}/${photo}`)}
									alt={photo}
									className={classes.image}
								/>
							),
							original: <img src={originals(`./${gallery.gallery}/${photo}`)} alt={photo} />
						};
					})}
				/>
			);
		})
	);
	allSections.push(<Contact id={'contact'} key={'contact'} />);
	return allSections;
}

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100
	});
	const handleClick = (event) => {
		scroll.scrollToTop({ duration: 500 });
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

function App(props) {
	const classes = useStyles();
	return (
		<div className="App">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			<Navbar />
			{sections(classes)}
			<ScrollTop {...props}>
				<Fab color="secondary" size="large" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</div>
	);
}

export default App;
