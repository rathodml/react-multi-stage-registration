import Passsword from './InputForms/Password';
import About from './InputForms/About';
import PersonDetail from './InputForms/PersonalDetails';

function FormNavigation(props) {
    let step = props.step;
    
    const showStep = () => {
        // Using switch because more then 2 conditions.
        const { handleChange } = props;
        const {firstName, lastName, email, phoneNumber, address, pincode} = props.userInput;
        switch (step) {
            case 1:
                return (
                    <PersonDetail 
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNumber={phoneNumber}
                        address={address}
                        pincode={pincode}
                        handleChange={handleChange}

                    />
                );
            case 2:
                return(
                    <Passsword />
                )
            case 3:
                return (
                    <About />
                );

            default:
                break;
        }
    }
    
    return (

        <div className="py-10">
            {showStep(step)}
        </div>
    );
}

export default FormNavigation;