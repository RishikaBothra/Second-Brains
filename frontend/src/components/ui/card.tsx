import { ShareIcon } from "../icons/Shareicon";

interface CardProps {
    title: string,
    link: string,
    type: "youtube" | "twitter",
}

export function Card({ title, link, type }: CardProps) {
    return <div className=" p-4 bg-white rounded-md shadow-md border-slate-100 max-w-72 border">
        <div className="flex justify-between text-md font-semibold">
            <div className="flex p-1 items-center">
                <div className="text-gray-500 items-center pr-4">
                    <ShareIcon />
                </div>
                {title}
            </div >

            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">

                    </a>
                    <ShareIcon />
                </div>
                <div className="text-gray-500">
                    <ShareIcon />
                </div>
            </div>
          
        </div>
          <div className="pt-4">
            {type === "youtube" && 
                <iframe className="w-full" src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }
            {type === "twitter" && 
                <blockquote className="twitter-tweet">
                    <a href={link}></a>
                </blockquote>
            }

            </div>
    </div>

}