import { Brain } from "lucide-react";
import { Youtubeicon } from "../icons/Youtubeicon";
import { Slidebaritem } from "./slidebaritem";
import { FileText, FileType2 } from "lucide-react";

export function Slidebar() {
    return <div className="h-screen bg-white border-r border-gray-300 w-72 fixed left-0 top-0 pt-4 pl-4">
        <div className="flex text-2xl font-bold text-gray-600 mb-6 pl-2 items-center">

            <Brain className="text-blue-600" />
            Brains
        </div>
        <div className="text-red-600">
            <Slidebaritem text="YouTube" icon={<Youtubeicon className="text-red-600" />} />
        </div>
        <div>
            <Slidebaritem text="Articles" icon={<FileText className="text-blue-500" />} />
            <Slidebaritem text="PDFs" icon={<FileType2 className="text-red-500" />} />
        </div>
    </div>
}