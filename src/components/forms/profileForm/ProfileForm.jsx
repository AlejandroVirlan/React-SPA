import { Formik, Form, Field } from 'formik';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

const ProfileForm = () => {
    
    const { user } = useAuth0();
    const { t } = useTranslation();

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
                            <label htmlFor="name">{t('pages.user_profile.form.fields.name')}:</label>
                            <Field type="text" id="name" name="name" placeholder="Name" readOnly value={values.name} />
                        </div>
                        <div>
                            <label htmlFor="email">{t('pages.user_profile.form.fields.email')}:</label>
                            <Field type="text" id="email" name="email" placeholder="email@gmail.com" readOnly value={values.email} />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ProfileForm;