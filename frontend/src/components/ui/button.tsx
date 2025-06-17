import type { ReactElement } from "react";

interface buttonprops{
    variant :"primary"|"secondary";
    size?: "sm"|"md"|"lg";
    text:string;
    starticon?:ReactElement;
    endicon?:ReactElement;
    onClick:() =>void;
}

const variantStyles = {
    "primary":"bg-blue-600 text-white",
    "secondary":"bg-blue-400 text-white"
}

const defaultStyles = " px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-300 transition-colors duration-200 cursor-pointer";

export const Button = (props:buttonprops) => {
    return <button onClick = {props.onClick} className = { variantStyles[props.variant] + " " + defaultStyles + " " + props.size}>
    {props.starticon}
    {props.text}
    
    </button>;
}

<Button variant = "primary" size = "md"  onClick={()=>{}} text={"asd"} />