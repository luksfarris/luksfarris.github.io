import React from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactCompareImage from "react-compare-image";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    },
    title: {
        marginTop: "0px",
        marginBottom: "8px",
    },
    bg: {
        // backgroundImage: "url(background.png)",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
    },
    textBody: {
        borderLeft: "12px solid #1a1a1a",
        paddingLeft: "8px",
    },
    mainGrid: {
        width: "50vw",
        maxWidth: "800px",
        marginRight: "15vw",
    },
}));

export default function IntroSection() {
    const classes = useStyles();
    const translation = useTranslation();

    return (
        <div className={classes.bg + " section"}>
            <Grid
                container
                spacing={1}
                justify="center"
                alignItems="center"
                direction="column"
                className={classes.root}
            >
                <Grid item className={classes.mainGrid}>
                    <h1 className={classes.title}>
                        {translation.t("intro.title")}
                    </h1>
                </Grid>
                <Grid item className={classes.mainGrid}>
                    <div className={classes.textBody}>
                        <p className={"hidden-on-small"}>
                            {translation.t("intro.description")}
                        </p>
                        <ReactCompareImage
                            leftImage="day.jpg"
                            rightImage="night.jpg"
                        />
                    </div>
                </Grid>
                <Grid item className={classes.mainGrid}>
                    <Button variant="contained" color="primary">
                        {translation.t("intro.callToAction")}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
