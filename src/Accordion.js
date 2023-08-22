import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
    const [isActive, setIsActive] = useState("");
    return (
        <>
        <h2>Kerala, India</h2>
        <Panel title = "About" status = {isActive}>
        <p>
        Kerala is a state on the Malabar Coast of India. 
        It was formed on 1 November 1956, following the passage of the States Reorganisation Act, 
        by combining Malayalam-speaking regions of the erstwhile regions of Cochin, Malabar, South Canara, and Travancore.
        </p>
        </Panel>
        <button onClick = {() => setIsActive("About")}>Expand</button>
        <Panel title = "Tourism" status = {isActive}>
        <p>
        In 2012, National Geographic's Traveller magazine named Kerala as one of the "ten paradises of the world" and "50 must see destinations of a lifetime". 
        Travel and Leisure also described Kerala as "One of the 100 great trips for the 21st century". 
        In 2012, it overtook the Taj Mahal to be the number one travel destination in Google's search trends for India. 
        CNN Travel listed Kerala amongst its '19 best places to visit in 2019'. 
        Kerala was named by TIME magazine in 2022 among the 50 extraordinary destinations to explore in its list of the World's Greatest Places.
        </p>
        </Panel>
        <button onClick = {() => setIsActive("Tourism")}>Expand</button>
        </>
    );
}