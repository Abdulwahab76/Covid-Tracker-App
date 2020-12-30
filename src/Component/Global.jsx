import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Doughnut } from "react-chartjs-2";
import "./covid.css";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: "0 auto",
        marginTop: "50px",
        display: "flex",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: 150,
        fontSize: 20,
        margin: "0px 20px",

        fontWeight: "bold",
    },
}));

export default function Global() {
    const [covid, setCovid] = useState([]);
    const [visual, setVisual] = useState(false);
    const show = () => {
        console.log("working");
        setVisual(true);
        if (visual === true) {
            setVisual(false);
        }
    };

    useEffect(() => {
        async function fetchApi() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            console.log(data.Global);
            setCovid(data.Global);
        }

        fetchApi();
    }, []);
    const classes = useStyles();
    console.log("covidework", covid);
    const data = {
        labels: [
            "Total-Death",
            "Total-Recoverd",
            "New-Confirm",
            "New-Deaths",
            "New-Recoverd",
        ],
        datasets: [
            {
                data: [
                    `${covid.NewDeaths}`,
                    `${covid.TotalRecovered}`,
                    `${covid.TotalConfirmed}`,
                    `${covid.NewConfirmed}`,
                    `${covid.NewRecovered}`,
                    `${covid.TotalDeaths}`,
                ],
                backgroundColor: [
                    "red",
                    "#36A2EB",
                    "#FFCE56",
                    "#5ced5f",
                    "#3F51B5",
                ],
                hoverBackgroundColor: [
                    "red",
                    "#36A2EB",
                    "#FFCE56",
                    "#5ced5f",
                    "#3F51B5",
                ],
            },
        ],
    };

    return (
        <center>
            <div className="main-box">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {Object.keys(covid).map((val, ind) => {
                            return (
                                <Grid id="box" key={ind} item sm={4} xs={12}>
                                    <Paper
                                        elevation={3}
                                        className={classes.paper}
                                    >
                                        <p
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                                color: "#3F51B5",
                                            }}
                                        ></p>
                                        <h3 style={{ color: "#3F51B5" }}>
                                            {val.replace(/C/g, " C")}
                                        </h3>
                                        {covid[val]}
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </div>
            <button
                onClick={show}
                style={{
                    height: 40,
                    width: 140,
                    margin: "20px",
                    color: "white",
                    backgroundColor: "#3F51B5",
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                    transition: "0.6s",
                }}
                className="btn"
            >
                Show Visualitaion
            </button>
            {visual ? (
                <div>
                    <h2 style={{ color: "#3F51B5" }}>Covid Visualization</h2>
                    <Doughnut
                        data={data}
                        width={100}
                        height={250}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
            ) : null}
        </center>
    );
}
