import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Pie } from "react-chartjs-2";
import "./covid.css";
import { CountryNumber } from "../App";
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
        // width: "auto",
        margin: "0px 20px",
        fontWeight: "bold",
    },
}));

export default function AllCountry(props) {
    const [covid, setCovid] = useState([]);
    const [visual, setVisual] = useState(false);
    const { number } = useContext(CountryNumber);

    const show = () => {
        setVisual(true);
        if (visual === true) {
            setVisual(false);
        }

        console.log("country Changed", number);
    };

    useEffect(() => {
        async function fetchApi() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            console.log(data.Countries);
            setCovid({
                Country: data.Countries[number].Country,
                Total_Death: data.Countries[number].TotalDeaths,
                Total_Recovered: data.Countries[number].TotalRecovered,
                New_Confirmed: data.Countries[number].NewConfirmed,
                New_Deaths: data.Countries[number].NewDeaths,
                New_Recovered: data.Countries[number].NewRecovered,
            });
        }

        fetchApi();
    }, [number]);
    const classes = useStyles();
    const data = {
        options: {
            responsive: true,
        },
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
                    `${covid.Total_Death}`,
                    `${covid.Total_Recovered}`,
                    `${covid.New_Confirmed}`,
                    `${covid.New_Deaths}`,
                    `${covid.New_Recovered}`,
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
                                        <h3 style={{ color: "#3F51B5" }}>
                                            {val.replace(/_/g, " ")}
                                        </h3>
                                        <h3>{covid[val]}</h3>
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
                <div className="pie-chart">
                    <h2 style={{ color: "#3F51B5" }}>Covid Visualization</h2>
                    <Pie
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
