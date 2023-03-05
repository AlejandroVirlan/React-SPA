import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

const LoginButton = () => {
    
    const { loginWithRedirect } = useAuth0();
    const { t } = useTranslation();

    return (
        <button onClick={() => loginWithRedirect()}>{t('menu.controls.buttons.login')}</button>
    );
};

export default LoginButton;