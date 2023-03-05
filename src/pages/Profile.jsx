import { useAuth0 } from '@auth0/auth0-react';
import ProfileForm from '../components/forms/profileForm/ProfileForm';
import { useTranslation } from "react-i18next";

const Profile = () => {

  const { isAuthenticated, isLoading } = useAuth0();
  const { t } = useTranslation();

  if (isLoading) {
    return <div>{t('pages.user_profile.loading')}</div>;
  };

  return (
    <>
    <div>{t('pages.user_profile.content')}</div>
      {isAuthenticated && (
        <div>
          <ProfileForm/>
        </div>
      )}
    </> 
  );
};

export default Profile;