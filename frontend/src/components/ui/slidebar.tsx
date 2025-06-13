import { Twittericon } from "../icons/Twittericon";
import { Youtubeicon } from "../icons/Youtubeicon";
import { Slidebaritem } from "./slidebaritem";

export function Slidebar() {
    return <div className="h-screen bg-white border-r border-gray-300 w-72 fixed left-0 top-0 pt-4 pl-4">
        <div >
            <Slidebaritem text = "Twitter" icon = {<Twittericon/>}/>
            </div>
            <div>
            <Slidebaritem text = "YouTube" icon = {<Youtubeicon/>}/>
    </div>
    </div>
}