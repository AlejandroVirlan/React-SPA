import { useTranslation } from "react-i18next";

const useLanguageSelector = () => {

    const { i18n } = useTranslation();
    
    const handleLanguageChange = (event)=> {
        i18n.changeLanguage(event.target.value);
    };

    return { handleLanguageChange };
};

export default useLanguageSelector;