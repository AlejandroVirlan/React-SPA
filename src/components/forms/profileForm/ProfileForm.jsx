import { Formik } from 'formik';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileForm = () => {
    
    const { user } = useAuth0();

    return (
        <>
            <Formik
                initialValues={{
                    name: user.name,
                    email: user.email
                }}
            >
                {( {values} ) => (
                    <form className="profile-form">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Name" readOnly value={values.name} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" placeholder="email@gmail.com" readOnly value={values.email} />
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default ProfileForm;