import React from 'react';

import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	title: {
		marginTop: '0px',
		marginBottom: '8px'
	},
	bg: {
		backgroundImage: 'url(background.png)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	},
	textBody: {
		borderLeft: '12px solid #1a1a1a',
		paddingLeft: '8px'
	},
	mainGrid: {
		width: '50vw',
		maxWidth: '800px',
		marginRight: '15vw'
	}
}));

export default function IntroSection() {
	const classes = useStyles();

	return (
		<div className={classes.bg + ' section'}>
			<Grid
				container
				spacing={1}
				justify="center"
				alignItems="center"
				direction="column"
				className={classes.root}
			>
				<Grid item className={classes.mainGrid}>
					<h1 className={classes.title}>Photography Artisanship</h1>
				</Grid>
				<Grid item className={classes.mainGrid}>
					<div className={classes.textBody}>
						<p className={'hidden-on-small'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum est.
						</p>
						<p className={'hidden-on-small'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea conseq.
						</p>
					</div>
				</Grid>
				<Grid item className={classes.mainGrid}>
					<Link activeClass="active" to="Outdoor" spy={true} smooth={true} offset={0} duration={500}>
						<Button variant="contained" color="primary">
							See My Portfolio
						</Button>
					</Link>
				</Grid>
			</Grid>
		</div>
	);
}
