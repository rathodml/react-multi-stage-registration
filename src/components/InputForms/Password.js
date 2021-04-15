function Passsword() {
    return(
        <div className="mb-5">
        <label for="password" className="font-bold mb-1 text-gray-700 block">Set up password</label>
        <div className="text-gray-600 mt-2 mb-4">
            Please create a secure password including the following criteria below.

            <ul className="list-disc text-sm ml-4 mt-2">
                <li>lowercase letters</li>
                <li>numbers</li>
                <li>capital letters</li>
                <li>special characters</li>
            </ul>
        </div>

        <div className="relative">
            <input
                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                placeholder="Your strong password..." />

            <div className="absolute right-0 bottom-0 top-0 px-3 py-3 cursor-pointer">        

             
            </div>
        </div>

        <div className="flex items-center mt-4 h-3">
            <div className="w-2/3 flex justify-between h-2">
                <div
                    className="h-2 rounded-full mr-1 w-1/3 bg-gray-300"></div>
                <div
                    className="h-2 rounded-full mr-1 w-1/3 bg-gray-300"></div>
                <div 
                    className="h-2 rounded-full w-1/3 bg-gray-300"></div>
            </div>
            <div x-text="passwordStrengthText"
                className="text-gray-500 font-medium text-sm ml-3 leading-none"></div>
        </div>

        
    </div>

    )
}

export default Passsword;