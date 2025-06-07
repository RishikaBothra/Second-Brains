import type { ReactElement } from "react";

interface buttonprops{
    variant :"primary"|"secondary";
    size: "sm"|"md"|"lg";
    text:string;
    starticon?:ReactElement;
    endicon?:ReactElement;
    onclick:() =>void;
    //onClick is a function that takes no parameters and returns nothing.

}

const variantStyles = {
    "primary":"bg-blue-600 text-white",
    "secondary":"bg-blue-400 text-white"
}

const defaultStyles = " px-4 py-2 rounded-md";


export const Button = (props:buttonprops) => {
    return <button className = { variantStyles[props.variant] + " " + defaultStyles + " " + props.size} onClick = {props.onclick}>
    {props.text}</button>;
}

<Button variant = "primary" size = "md" onClick{()=>{}} text = {"asd"}