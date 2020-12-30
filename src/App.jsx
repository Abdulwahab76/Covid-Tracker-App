import React, { useState, createContext } from "react";
import Nav from "./Component/Nav";
import Infopanel from "./Component/Infopanel";
import Bottom from "./Component/Bottom";

export const CountryNumber = createContext(null);
function App() {
    const [number, setNumber] = useState(128);
    const screenConfig = useState();
    return (
        <CountryNumber.Provider value={{ number, setNumber }}>
            <Nav />
            <Infopanel currentScreen={screenConfig[0]} />
            <Bottom screenConfig={screenConfig} />
        </CountryNumber.Provider>
    );
}
export default App;
