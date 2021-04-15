function TopNavigation(props) {
    let step = props.step;

    return (
        // <!-- Top Navigation -->
        <div className="border-b-2 py-4">
            <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
                Step: {step} of 3
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                    {CurrentStep(step)}
                </div>
                {StepPercentage(step)}
            </div>
        </div>
    );
}

const CurrentStep = props => {
    let currentStep = props;
    switch (currentStep) {
        case 1:
            return (
                <div>
                    <div className="text-lg font-bold text-gray-700 leading-tight">Your Profile</div>
                </div>
            );
        case 2:
            return (
                <div>
                    <div className="text-lg font-bold text-gray-700 leading-tight">Your Password</div>
                </div>
            );
        case 3:
            return (
                <div>
                    <div className="text-lg font-bold text-gray-700 leading-tight">Tell me about yourself</div>
                </div>
            );
        default:
            return null;
    }
};


const StepPercentage = props => {
    let currentStep = props;
    let currentPerct = Math.round(currentStep / 3 * 100) //Hard coded for only 3 Steps.
    return (

        <div className="flex items-center md:w-64">
            <div className="w-full bg-white rounded-full mr-2">
                <div className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white"
                    style={{ width: currentPerct + '%' }}  ></div>
            </div>
            <div className="text-xs w-10 text-gray-600" >{currentPerct}%</div>
        </div>
    );

};
export default TopNavigation;

