import { Crossicon } from './icons/Crossicon';
import { Button } from './ui/button';

function Input() {
    return <div>
        <input type={"text"} className='border border-gray-300 rounded-md p-2 w-full mb-4' placeholder='Enter content title' />
        <textarea className='border border-gray-300 rounded-md p-2 w-full mb-4' placeholder='Enter content description'></textarea>
        <input type="text" className='border border-gray-300 rounded-md p-2 w-full mb-4' placeholder='Enter content link' />
        <Button
            variant="primary"
            text="Add Content"
            
            onClick={() => console.log("Content Added")}
        />
    </div>
}

export function CreateContentModal({ open, onClose }) {

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
