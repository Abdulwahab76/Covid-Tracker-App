import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { CountryNumber } from "../App";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    inputInput: {
        color: "white",
        backgroundColor: "white",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const { number, setNumber } = useContext(CountryNumber);
    const [currentNumber, setCurrentNumber] = useState();
    const [val, setVal] = useState();
    const [input, setInput] = useState(val);

    console.log("type", input);

    const inputVal = (e) => {
        const targetValue = e.target.value.toLowerCase();
        console.log(targetValue);
        setVal(e.target.value);
        if (targetValue === "albania") {
            setCurrentNumber(1);
        } else if (targetValue === "pakistan") {
            setCurrentNumber(128);
        } else if (targetValue === "india") {
            setCurrentNumber(76);
        } else if (targetValue === "afghanistan") {
            setCurrentNumber(0);
        } else if (targetValue === "bangladesh") {
            setCurrentNumber(13);
        } else {
            setCurrentNumber(e.target.value);
        }
    };
    console.log("this", number);
    const search = () => {
        setNumber(currentNumber);
        setInput(val);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Covid-19 Tracker
                    </Typography>

                    <div
                        style={{
                            backgroundColor: "#5399DE",
                            alignItems: "center",
                            display: "flex",
                            padding: 4,
                        }}
                    >
                        <SearchIcon onClick={search} />
                        <InputBase
                            onChange={inputVal}
                            style={{
                                paddingLeft: 5,
                                color: "white",
                                textAlign: "center",
                            }}
                            name={val}
                            placeholder="Search Country"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <br />
            <h3 style={{ margin: "20px", color: "#5399DE" }}>
                Search result: {input}
            </h3>
        </div>
    );
}
