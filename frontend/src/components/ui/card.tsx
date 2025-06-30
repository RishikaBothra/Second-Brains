import { Youtubeicon } from "../icons/Youtubeicon";
import {Trash2} from "lucide-react";
import { FileText, FileType2 } from "lucide-react";
import { deleteContent } from "../../hooks/deletecontent"; 
import { Edit2 } from "lucide-react";



type ContentType = "youtube" | "article" | "pdf";

interface CardProps {
  id: string;
  title: string;
  link: string;
  type: ContentType;
  description: string;
}

export function Card({ id, title, link, type, description }: CardProps) {
    return <div className="p-4 bg-white rounded-md shadow-md border-slate-100 max-w-72 border">
        <div className="flex justify-between text-md font-semibold">
            <div className="flex p-1 items-center">
                <div className="items-center pr-4">
                    <div className="text-red-500">                     
                        {type === "youtube" && <Youtubeicon />} </div>
                    {type === "article" && <FileText className="text-blue-500" />}
                    {type === "pdf" && <FileType2 className="text-red-500" />}

                </div>
                {title}
            </div >

            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">

                    </a>
                        <Edit2 className="cursor-pointer" />

                </div>
                <div className="text-gray-500">
                    <Trash2 className="cursor-pointer" onClick={() => deleteContent(id)} />
                </div>
            </div>

        </div>
        <div className="pt-4">
            {type === "youtube" &&
                <iframe className="w-full"
                    src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }
            {type === "article" && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Read Article
                </a>
            )}
            {type === "pdf" && <iframe className="w-full h-64" src={link} ></iframe>}

        </div>
    </div>
}