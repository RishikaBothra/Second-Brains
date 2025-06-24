import { Crossicon } from './icons/Crossicon';
import { Button } from './ui/button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const ContentType = {
    youtube: "youtube",
    twitter: "twitter",
    article: "article",
    pdf: "pdf",
    image: "image"
} as const;

type ContentType = typeof ContentType[keyof typeof ContentType];
interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [contentType, setContentType] = useState<ContentType>(ContentType.youtube);

    async function addcontent() {
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !description || !link) {
            alert("Please fill in all fields");
            return;
        }
        try {

            await axios.post(BACKEND_URL + "/api/v1/addcontent", {
                link,
                title,
                description,
                type: contentType
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }).then((res) => {
                console.log("Content added successfully:", res.data);
            }).catch(error => {
                console.error("Error adding content:", error);
                alert("Failed to add content. Please try again.");
            });

            if (titleRef.current) titleRef.current.value = '';
            if (descriptionRef.current) descriptionRef.current.value = '';
            if (linkRef.current) linkRef.current.value = '';

            onClose();
            window.location.reload(); 

        }
        catch (error) {
            console.error("Error in addcontent:", error);
            alert("An error occurred while adding content. Please try again.");
        }
    }


    function Input() {
        return <div>
            <input
                ref={titleRef}
                type="text"
                className='border border-gray-300 rounded-md p-2 w-full mb-4'
                placeholder='Enter content title'
            />
            <textarea
                ref={descriptionRef}
                className='border border-gray-300 rounded-md p-2 w-full mb-4'
                placeholder='Enter content description'
            ></textarea>
            <input
                ref={linkRef}
                type="text"
                className='border border-gray-300 rounded-md p-2 w-full mb-4'
                placeholder='Enter content link'
            />
            <h1 className='text-lg font-semibold mb-2'> Content Type </h1>
            <div className="mb-4 flex gap-4 flex-wrap">
                <label className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200">
                    <input
                        type="radio"
                        name="contentType"
                        checked={contentType === ContentType.youtube}
                        onChange={() => setContentType(ContentType.youtube)}
                    />
                    Youtube
                </label>
                <label className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200">
                    <input
                        type="radio"
                        name="contentType"
                        checked={contentType === ContentType.twitter}
                        onChange={() => setContentType(ContentType.twitter)}
                    />
                    Twitter
                </label>
                <label className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200">
                    <input
                        type="radio"
                        name="contentType"
                        checked={contentType === ContentType.article}
                        onChange={() => setContentType(ContentType.article)}
                    />
                    Article
                </label>
                <label className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200">
                    <input
                        type="radio"
                        name="contentType"
                        checked={contentType === ContentType.pdf}
                        onChange={() => setContentType(ContentType.pdf)}
                    />
                    PDF
                </label>
                <label className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-colors duration-200">
                    <input
                        type="radio"
                        name="contentType"
                        checked={contentType === ContentType.image}
                        onChange={() => setContentType(ContentType.image)}
                    />
                    Image
                </label>
            </div>

            <Button
                onClick={addcontent}
                variant="primary"
                text="Add Content"
            />
        </div>
    }

    return <div>

        {open && <div className='w-screen h-screen bg-black/70 fixed top-0 left-0 flex items-center justify-center'>
            <span className=' flex bg-white p-6 rounded-md shadow-lg '>

                <div>
                    <Input />
                </div>
                <div className='flex justify-end pl-4'>
                    <div onClick={onClose} className='cursor-pointer text-gray-500 hover:text-gray-700 transition-colors'>
                        <Crossicon />
                    </div>
                </div>
            </span>
        </div>}
    </div>

}
