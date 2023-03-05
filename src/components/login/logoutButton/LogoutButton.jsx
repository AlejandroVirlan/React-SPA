import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

const LogoutButton = () => {
    
    const { logout } = useAuth0();
    const { t } = useTranslation();

    return (
        <button onClick={() => logout({logoutParams: { returnTo: window.location.origin } })}>{t('menu.controls.buttons.logout')}</button>
    );
};

export default LogoutButton;