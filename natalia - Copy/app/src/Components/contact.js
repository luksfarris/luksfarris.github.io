import React, { Component } from 'react';
import { Grid, Button, BottomNavigation, BottomNavigationAction, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InstagramIcon from '@material-ui/icons/Instagram';

const styles = (theme) => ({
	root: {
		height: '100%'
	},
	footer: {
		background: '#000',
		width: '100%',
		height: '60px',
		position: 'relative',
		color: 'white'
	},
	avatar: {
		width: '360px',
		height: '360px'
	},
	sessionContentContact: {
		height: '50%',
		width: '90%',
		margin: '0 auto',
		paddingTop: '12%'
	},
	media: {
		backgroundColor: '#fafafa'
	}
});

class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={'section'}>
				<div className={classes.sessionContentContact} id={this.props.id}>
					<Grid container spacing={10} justify="center" alignItems="center" className={classes.root}>
						<Grid item className={'hidden-on-small'}>
							<Avatar alt="Nali Dwis" src="nali.png" className={classes.avatar} />
						</Grid>
						<Grid item xs={6}>
							<h1 className={'hidden-on-small'}>Get In Touch</h1>
							<p className={'hidden-on-small'}>
								Would you like to have the photo session of your dreams? Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim <b>ad minim veniam</b>, quis nostrud exercitation ullamco laboris nisi
								ut aliquip ex ea commo consequat.
							</p>
							<Button variant="contained" color="primary">
								Contact Me
							</Button>
						</Grid>
					</Grid>
				</div>
				<BottomNavigation showLabels className={classes.media}>
					<BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
					<BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
					<BottomNavigationAction label="Nearby" value="nearby" icon={<InstagramIcon />} />
					<BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
				</BottomNavigation>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Contact);
