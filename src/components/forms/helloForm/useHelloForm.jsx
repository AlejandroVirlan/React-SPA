import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IntlProvider, FormattedDate, FormattedNumber } from "react-intl";
import { useTranslation } from "react-i18next";

const useHelloForm = () => {
    
    const[firstName, setFirstName] = useState("");
    
    const[textValue, setTextValue] = useState("");
    
    const[submitted, setSubmitted] = useState(false);
    
    const currentDate = new Date();
    
    const number = 1999.99;
    
    const navigate = useNavigate();
    
    const {t, i18n } = useTranslation();

    const content = submitted 
    ? 
        <>
            <IntlProvider locale={i18n.language}>
                <div>
                    <p className="hello-content">{t('pages.hello_world.info.hello', {firstName})}<FormattedDate day="2-digit" month="2-digit" year="numeric" value={currentDate} />.</p>
                    <p className="currency-content"><FormattedNumber value={number} style="currency" currency={t("pages.hello_world.info.currency")} /></p>
                </div>
            </IntlProvider>
        </>
      
    : 
        <p className='content'>{t('pages.hello_world.info.who')}</p>

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

    return { handleSubmit, textOnChange, cleanForm, isDisable, content };
};

export default useHelloForm;