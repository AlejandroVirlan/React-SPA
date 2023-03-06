import { Formik, Form, Field } from 'formik';
import useHelloForm from "./useHelloForm";
import { useTranslation } from "react-i18next";

const HelloForm = () => {

    const {handleSubmit, textOnChange, cleanForm, isDisable, content} = useHelloForm();
    const { t } = useTranslation();

    return (
        <>
            <Formik
                initialValues={{firstName: ''}}
                onSubmit = {handleSubmit}
            > 

            {( {handleChange, resetForm} ) => (
                <Form className="helloForm">
                    <div className="firstName-container">
                        <label htmlFor="firstName">{t('pages.hello_world.form.fields.name')}:</label>
                        <Field
                            id="firstName" 
                            name="firstName" 
                            type="text" 
                            onChange={(event) => textOnChange(handleChange, event)}
                        />
                    </div>

                    <div className="buttons-container">
                        <button type="submit" disabled={isDisable()}>
                            {t('pages.hello_world.form.controls.buttons.submit')}
                        </button>
                        
                        <button type="button" onClick={() => cleanForm(resetForm)} disabled={isDisable()}>
                            {t('pages.hello_world.form.controls.buttons.cancel')}
                        </button>
                    
                        <button type="button" onClick={() => cleanForm(resetForm)} disabled={isDisable('Exit')}>
                            {t('pages.hello_world.form.controls.buttons.exit')}
                        </button>
                    </div>
                </Form>
            )}
            </Formik>
            
            {content}
        </> 
    );
};

export default HelloForm;
