import { BrainIcon } from "lucide-react";

export function Signin() {
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
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            username
                        </label>
                        <input
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
                            className="border border-gray-300 p-2 w-full rounded"
                            type="password"
                            id="password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-200"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}