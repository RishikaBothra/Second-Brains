import type { ReactElement } from "react";

interface buttonprops{
    variant :"primary"|"secondary";
    size?: "sm"|"md"|"lg";
    text:string;
    starticon?:ReactElement;
    endicon?:ReactElement;
    onclick:() =>void;
}

const variantStyles = {
    "primary":"bg-blue-600 text-white",
    "secondary":"bg-blue-300 text-white"
}

const defaultStyles = " px-4 py-2 rounded-md flex items-center gap-2";


export const Button = (props:buttonprops) => {
    return <button className = { variantStyles[props.variant] + " " + defaultStyles + " " + props.size} onClick = {props.onclick}>
    {props.starticon}
    {props.text}
    
    </button>;
}

<Button variant = "primary" size = "md"  onclick={()=>{}} text={"asd"} />