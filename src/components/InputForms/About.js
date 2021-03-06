function About() {

    return (
        <div>
            <div className="mb-5">
                <label for="email" className="font-bold mb-1 text-gray-700 block">Gender</label>

                <div className="flex">
                    <label
                        className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
                        <div className="text-teal-600 mr-3">
                            <input type="radio" x-model="gender" value="Male"
                                className="form-radio focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="select-none text-gray-700">Male</div>
                    </label>

                    <label
                        className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
                        <div className="text-teal-600 mr-3">
                            <input type="radio" x-model="gender" value="Female"
                                className="form-radio focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="select-none text-gray-700">Female</div>
                    </label>
                </div>
            </div>

            <div className="mb-5">
                <label for="profession" className="font-bold mb-1 text-gray-700 block">Profession</label>
                <input type="profession"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="eg. Web Developer" />
							</div>
            </div>
    );
}

export default About;