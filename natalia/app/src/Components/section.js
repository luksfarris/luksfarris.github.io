import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Viewer from "react-viewer";

const styles = (theme) => ({
    sectionGrid: {
        width: "100%",
        height: "100%",
        margin: "0",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        overflow: "hidden",
    },
    titleText: {
        margin: "0",
        fontSize: "5vw",
        fontStyle: "italic",
        fontWeight: "300",
        paddingLeft: "16px",
        lineHeight: "4vw",
    },
    titleDecoration: {
        width: "100%",
        height: "4px",
        background: "#1a1a1a",
    },
    titleDecorationDark: {
        width: "100%",
        height: "4px",
        background: "#fafafa",
    },
});

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goToSlide: 0,
            isOpen: false,
        };
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div
                className={"section" + (this.props.dark ? " section-dark" : "")}
            >
                <Grid
                    container
                    spacing={10}
                    justify="center"
                    direction="column"
                    alignItems="stretch"
                    className={classes.sectionGrid}
                    id={this.props.id}
                >
                    <Grid item>
                        <h1 className={classes.titleText}>{this.props.id}</h1>
                        <div
                            className={
                                this.props.dark
                                    ? classes.titleDecorationDark
                                    : classes.titleDecoration
                            }
                        />
                    </Grid>
                    <Grid item xs>
                        <Carousel
                            slides={this.props.images.map((image, index) => {
                                return {
                                    ...image,
                                    onClick: () => {
                                        if (this.state.goToSlide === index) {
                                            this.setState({ isOpen: true });
                                        } else {
                                            this.setState({ goToSlide: index });
                                        }
                                    },
                                };
                            })}
                            goToSlide={this.state.goToSlide}
                            showNavigation={false}
                            config={config.gentle}
                            offsetRadius={1}
                        />
                    </Grid>
                </Grid>
                <Viewer
                    visible={this.state.isOpen}
                    downloadable={false}
                    changeable={false}
                    rotatable={false}
                    scalable={false}
                    noNavbar={true}
                    onMaskClick={() => {
                        this.setState({ isOpen: false });
                    }}
                    onClose={() => {
                        this.setState({ isOpen: false });
                    }}
                    images={[
                        {
                            src: this.props.images[this.state.goToSlide].key,
                            alt: "",
                        },
                    ]}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Section);
