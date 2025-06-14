import { Brain } from "lucide-react";
import { Twittericon } from "../icons/Twittericon";
import { Youtubeicon } from "../icons/Youtubeicon";
import { Slidebaritem } from "./slidebaritem";

export function Slidebar() {
    return <div className="h-screen bg-white border-r border-gray-300 w-72 fixed left-0 top-0 pt-4 pl-4">
        <div className="flex text-2xl font-bold text-gray-600 mb-6 pl-2 items-center">

            <Brain className="text-blue-600" />
            Brains
        </div>
        <div >
            <Slidebaritem text="Twitter" icon={<Twittericon />} />
        </div>
        <div>
            <Slidebaritem text="YouTube" icon={<Youtubeicon />} />
        </div>
    </div>
}