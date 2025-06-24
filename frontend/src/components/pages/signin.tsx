import { BrainIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin(event: React.FormEvent) {
        event.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }

         await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        }).then((res) => {
            console.log("Signin successful:", res.data);
            const token = res.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/dashboard"; 
        }).catch(error => {
            console.error("Error signing in:", error);
            alert("Signin failed. Please check your credentials.");
        });

        if (usernameRef.current) usernameRef.current.value = '';
        if (passwordRef.current) passwordRef.current.value = '';
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
                        
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="flex">
                <div className="items-center justify-center pr-1 text-blue-300">
                    <BrainIcon />
                </div>
                <h3 className="text-lg   text-blue-500 text-semibold">
                    SecondBrains
                </h3>
            </div>
                <h2 className="text-2xl font-bold mb-6">Sign In</h2>
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
                    <Button onClick={signin} variant="primary" text="Sign In" loading={false} />
                </form>
            </div>
        </div>
    );
}