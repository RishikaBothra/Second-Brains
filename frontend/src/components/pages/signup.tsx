import { BrainIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function signup(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        axios.post(BACKEND_URL +"/api/v1/signup", {
            username,
            password
        }).then(() => {
            alert("Signup successful!");
        }).catch(error => {
            if(error.response && error.response.status === 403) {
                alert("Username already exists. Please choose a different username.");
               window.location.href = "/signin"; 
            }
        });

        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }
        
        if (usernameRef.current) usernameRef.current.value = '';
        if (passwordRef.current) passwordRef.current.value = '';
    }
    return <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96">
            <div className="flex">
                <div className="items-center justify-center pr-1 text-blue-300">
                    <BrainIcon />
                </div>
                <h3 className="text-lg   text-blue-500 text-semibold">
                    SecondBrains
                </h3>
            </div>
            <h2 className="text-2xl font-bold pb-6">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        ref={usernameRef}
                        className="border border-gray-300 p-2 w-full rounded"
                        type="text"
                        id="username"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        className="border border-gray-300 p-2 w-full rounded"
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <Button onClick={signup} variant="primary" text="Sign Up" loading={false} />
            </form>
        </div>
    </div>
}