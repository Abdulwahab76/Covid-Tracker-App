import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PublicIcon from "@material-ui/icons/Public";

const useStyles = makeStyles({
    root: {},
});

export default function SimpleBottomNavigation({ screenConfig }) {
    const classes = useStyles();
    console.log(screenConfig[0]);

    return (
        <BottomNavigation
            value={screenConfig[0]}
            onChange={(event, newValue) => {
                screenConfig[1](newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Countries" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Global" icon={<PublicIcon />} />
        </BottomNavigation>
    );
}
