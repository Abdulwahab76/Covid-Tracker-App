import React from "react";
import Global from "./Global.jsx";
import AllCountry from "./AllCountries";

export default function Infopanel({ currentScreen }) {
    if (currentScreen === 0) {
        return <AllCountry />;
    } else if (currentScreen === 1) {
        return <Global />;
    } else {
        return <AllCountry />;
    }
}
