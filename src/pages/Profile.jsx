import { useAuth0 } from '@auth0/auth0-react';
import ProfileForm from '../components/forms/profileForm/ProfileForm';

const Profile = () => {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>User Profile</div>
      {isAuthenticated && (
        <div>
          <ProfileForm/>
        </div>
      )}
    </> 
  );
}

export default Profile