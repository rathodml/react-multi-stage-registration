
function PersonDetail(props) {
    const { firstName, lastName, email, phoneNumber, address, pincode, handleChange } = props;
    return (
        <div>
            <div className="mb-5">
                <label className="font-bold mb-1 text-gray-700 block">Firstname</label>
                <input type="text"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Enter your firstname..."
                    name="firstName"
                    value={firstName}
                    onChange={handleChange('firstName')}
                />

            </div>

            <div className="mb-5">
                <label className="font-bold mb-1 text-gray-700 block">Lastname</label>
                <input type="text"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Enter your lastname..."
                    name="lastName"
                    value={lastName}
                    onChange={handleChange('lastName')}
                />


            </div>
            <div className="mb-5">
                <label className="font-bold mb-1 text-gray-700 block">Email</label>
                <input type="email"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Enter your email..."
                    name="email"
                    value={email}
                    onChange={handleChange('email')}
                />
            </div>
            <div className="mb-5">
                <label className="font-bold mb-1 text-gray-700 block">Phone number</label>
                <input type="text"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Enter your phone number..."
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange('phoneNumber')}
                />
            </div>
            <div className="mb-5">
                <label className="font-bold mb-1 text-gray-700 block">Address</label>
                <textarea type="text"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Enter your address..."
                    name="address"
                    value={address}
                    onChange={handleChange('address')}
                />
            </div>
            <div className="mb-5">
                <label className="font-bold mb-1 text-gray-700 block">Pincode</label>
                <input type="text"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Enter your pincode..."
                    name="pincode"
                    value={pincode}
                    onChange={handleChange('pincode')}
                />
            </div>
        </div>
    );
};

export default PersonDetail;