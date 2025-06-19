import { BrainIcon } from "lucide-react"
import { Button } from "../ui/button"

export function Signup() {
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
                <Button variant="primary" text="Sign Up" />
            </form>
        </div>
    </div>
}