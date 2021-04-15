import { useState } from 'react';
import FormNavigation from "./FormNavigation";
import TopNavigation from "./Header";
import BottonNavigation from "./BottomNav";
function Main(props) {
    const [step, setStep] = useState(1);

    const[userInput, setInputs] = useState(
        {
            firstName : '',
            lastName  : '',
            email     : '',
            phoneNumber : '',
            address   : '',
            pincode   : ''
        }
    )
    const handleChange = (input) => (e) => {
        setInputs({...userInput, [input] : e.target.value});
    }

    const NextBtnClick = () => {
        
        if (step < 3) {
            setStep(step + 1);
        }

    }

    return (
        <>
            <div>            
                <TopNavigation step={step} />
                <FormNavigation step={step} userInput={userInput} handleChange={handleChange}/>
                <BottonNavigation NextBtnClick={NextBtnClick} />              
            </div>
        </>
    );
}

export default Main;

