// import logo from "./logo.svg";
// import "./App.css";
// import { makeStyles } from "@material-ui/core/styles";
// import { Paper, TextField, Button } from "@material-ui/core";
// import Nav from "./Nav.jsx";
// import React, { useEffect, useState } from "react";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//         flexDirection: "column",
//         "& > *": {
//             margin: theme.spacing(1),
//             width: theme.spacing(16),
//             height: theme.spacing(16),
//         },
//     },
//     paper: {
//         display: "flex",
//         flexDirection: "column",

//         height: 260,
//         width: 400,
//         borderRadius: "10px",
//         textAlign: "center",
//         margin: "60px auto",
//     },
//     input: {
//         width: "80%",
//         margin: "0 auto",
//     },
//     btn: {
//         width: "50%",
//         textAlign: "center",
//         margin: "0 auto",
//     },
// }));

// function App() {
//     // const [repo, setRepo] = useState([]);
//     // useEffect(() => {
//     //     async function api() {
//     //         let fetching = await fetch(
//     //             "https://api.github.com/users/abdulwahab76/repos"
//     //         );
//     //         const data = await fetching.json();
//     //         console.log(data);
//     //         setRepo(data);
//     //     }
//     //     api();
//     // }, []);

//     const classes = useStyles();
//     return (
//         <div>
//             {/* <h1>You are seeing all repos</h1>
//             <ul>
//                 {repo.map((repoObj, index) => {
//                     return <li key={index}>{repoObj.name}</li>;
//                 })}
//             </ul> */}
//             <Nav />
//             <div className={classes.root}>
//                 <Paper className={classes.paper} elevation={5}>
//                     <h1>Login</h1>
//                     <form
//                         className={classes.input}
//                         noValidate
//                         autoComplete="off"
//                     >
//                         <TextField
//                             className={classes.input}
//                             id="standard-basic"
//                             label="Enter your name"
//                         />
//                         <TextField
//                             className={classes.input}
//                             id="standard-basic"
//                             label="Enter your password"
//                         />
//                     </form>
//                     <br />
//                     <Button
//                         className={classes.btn}
//                         variant="outlined"
//                         color="primary"
//                     >
//                         Login
//                     </Button>
//                 </Paper>
//             </div>
//         </div>
//     );
// }

// export default App;
