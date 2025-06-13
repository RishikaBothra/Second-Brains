import type { ReactElement } from "react";

export function Slidebaritem({text,icon}:
    {text:string;
        icon:ReactElement;

    }
){
    return <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
        <div className="flex text-gray-400">
        {icon} 
        </div>
        <div className="text-gray-500 font-medium">
        <span>{text}</span>
        </div>
    </div>
}