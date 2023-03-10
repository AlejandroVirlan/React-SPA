import { withTranslation } from "react-i18next";
import useLanguageSelector from "./useLanguageSelector";

const LanguageSelector = ({t}) => {

  const {handleLanguageChange} = useLanguageSelector();

  return (
    <select onChange={handleLanguageChange}>
        <option value="en">{t('menu.controls.select.options.en')}</option>
        <option value="es">{t('menu.controls.select.options.es')}</option>
    </select>
  );
};

export default withTranslation()(LanguageSelector);

