import { Formik, Form, Field } from 'formik';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileForm = () => {
    
    const { user } = useAuth0();

    return (
        <>          
            <img src={user.picture} alt={user.name} />
            <Formik
                initialValues={{
                    name: user.name,
                    email: user.email
                }}
            >
                {( {values} ) => (
                    <Form className="profile-form">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <Field type="text" id="name" name="name" placeholder="Name" readOnly value={values.name} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="text" id="email" name="email" placeholder="email@gmail.com" readOnly value={values.email} />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default ProfileForm