
function BottonNavigation(props) {
    const NextBtnClick = props.NextBtnClick;
    return (

        <div className="fixed bottom-0 left-0 right-0 py-5 bg-white shadow-md" x-show="step != 'complete'">
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <button
                            className="w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border cursor-not-allowed">Previous</button>
                    </div>

                    <div className="w-full text-right">
                        <button onClick={NextBtnClick}
                            className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium">Next</button>

                        {/* <button
          className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium">Complete</button> */}
                    </div>
                </div >
            </div >
        </div >
    );
};

export default BottonNavigation;

