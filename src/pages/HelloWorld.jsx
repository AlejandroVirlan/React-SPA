import HelloForm from '../components/forms/helloForm/HelloForm';
import { useTranslation } from "react-i18next";

const HelloWorld = () => {

  const { t } = useTranslation();

  return (
    <>
      <div>{t('pages.hello_world.content')}</div>
      <HelloForm/>
    </>
  );
};

export default HelloWorld;