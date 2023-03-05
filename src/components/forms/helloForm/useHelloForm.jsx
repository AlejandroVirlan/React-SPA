import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const useHelloForm = () => {

    const[firstName, setFirstName] = useState("");

    const[textValue, setTextValue] = useState("");
    
    const[submitted, setSubmitted] = useState(false);
    
    const currentDate = new Date();

    const number = 1999.99;

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setSubmitted(true);
        setFirstName(values.firstName);
    }

    const textOnChange = (handleChange, event) => {
        setTextValue(event.target.value);
        handleChange(event);
    }

    const cleanForm = (resetForm) => {
        resetForm();
        setSubmitted(false);
        navigate('/');
    }

    const isDisable = (button) => {

        let disabled = false;

        switch (button) {
            case 'Exit':
                if(textValue.trim() && textValue.trim() !== firstName){
                    disabled = true;
                }
                break;
            default:
                if (!textValue.trim() || textValue.trim() === firstName) {
                    disabled = true;
                }
                break;
        };

        return disabled;
    };

    return { handleSubmit, textOnChange, cleanForm, isDisable, firstName, submitted, currentDate, number };
};

export default useHelloForm;