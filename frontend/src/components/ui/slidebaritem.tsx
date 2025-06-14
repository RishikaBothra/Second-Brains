import type { ReactElement } from "react";

export function Slidebaritem({text,icon}:
    {text:string;
        icon:ReactElement;

    }
){
    return <div className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded max-w-64 pl-4 transition-all duration-150">
        <div className="flex text-gray-400">
        {icon} 
        </div>
        <div className="text-gray-500 font-medium">
        <span>{text}</span>
        </div>
    </div>
}