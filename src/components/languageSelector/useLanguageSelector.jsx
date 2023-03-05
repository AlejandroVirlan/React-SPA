import { useTranslation } from "react-i18next";

const useLanguageSelector = () => {

    const { i18n } = useTranslation('translation');
    
    const handleLanguageChange = (e)=> {
        i18n.changeLanguage(e.target.value);
    };

    return { handleLanguageChange };
};

export default useLanguageSelector;