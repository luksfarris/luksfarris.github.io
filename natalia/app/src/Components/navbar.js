import React, { Component } from "react";
import { compose } from "recompose";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import portfolio from "../generated/portfolio.json";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TranslateIcon from "@material-ui/icons/Translate";
import { withTranslation } from "react-i18next";
import {
    withStyles,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Menu,
    MenuItem,
} from "@material-ui/core";
import PhotoFilterIcon from "@material-ui/icons/PhotoFilter";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: "50vw",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(8),
    },
});

const linkProps = (self, name) => {
    return {
        activeClass: "active",
        onSetActive: (to) => {
            self.setState({ [name]: true });
        },
        onSetInactive: () => {
            self.setState({ [name]: false });
        },
        to: name,
        spy: true,
        smooth: true,
        offset: -64,
        duration: 300,
        onClick: self.toggleDrawer(false),
        key: name,
    };
};

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
    };

    createNavItem = (name, toLink) => {
        return (
            <div className={"hidden-on-small"} key={name}>
                <Link {...linkProps(this, name)} to={toLink}>
                    <Button color="inherit" disabled={this.state[name]}>
                        {name}
                    </Button>
                </Link>
            </div>
        );
    };

    handleMenu = (event) => {
        this.setState({ ...this.state, anchorEl: event.currentTarget });
    };

    handleClose = (lang) => () => {
        if (lang != null) {
            this.props.i18n.changeLanguage(lang);
        }
        this.setState({ ...this.state, anchorEl: null });
    };

    navItems = () => {
        return portfolio.map((gallery) => {
            return this.createNavItem(gallery.gallery, gallery.gallery);
        });
    };

    drawerContent = (classes) => {
        return (
            <div className={classes.drawer}>
                <List component="nav">
                    <ListItem
                        button
                        onClick={() => {
                            this.toggleDrawer(false)();
                            this.scrollToTop();
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <Link {...linkProps(this, portfolio[0].gallery)}>
                        <ListItem button>
                            <ListItemIcon>
                                <PhotoLibraryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Photo Galleries" />
                        </ListItem>
                    </Link>
                    <List component="div" disablePadding>
                        {portfolio.map((gallery) => {
                            return (
                                <Link {...linkProps(this, gallery.gallery)}>
                                    <ListItem button className={classes.nested}>
                                        <ListItemText
                                            primary={gallery.gallery}
                                        />
                                    </ListItem>
                                </Link>
                            );
                        })}
                    </List>

                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <PhotoFilterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Photo Restoration" />
                    </ListItem>
                    <Divider />
                    <Link {...linkProps(this, "contact")}>
                        <ListItem button>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );
    };

    toggleDrawer = (isDrawerOpen) => (event) => {
        this.setState({ ...this.state, drawerOpen: isDrawerOpen });
    };

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="sticky" className={classes.root}>
                <Drawer
                    anchor={"left"}
                    open={this.state.drawerOpen}
                    onClose={this.toggleDrawer(false)}
                >
                    {this.drawerContent(classes)}
                </Drawer>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={this.scrollToTop}
                    >
                        Nali Dwis
                    </Typography>
                    {this.navItems()}
                    {this.createNavItem("Contact", "contact")}
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <TranslateIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose(null)}
                        >
                            <MenuItem onClick={this.handleClose("en")}>
                                English
                            </MenuItem>
                            <MenuItem onClick={this.handleClose("es")}>
                                Español
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default compose(
    withStyles(styles, { withTheme: false }),
    withTranslation()
)(Navbar);
