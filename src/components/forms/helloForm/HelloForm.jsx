import { Formik, Form, Field } from 'formik';
import useHelloForm from "./useHelloForm";
import { useTranslation } from "react-i18next";
import { IntlProvider, FormattedDate, FormattedNumber } from "react-intl";


const HelloForm = () => {

    const {handleSubmit, textOnChange, cleanForm, isDisable, firstName, submitted, currentDate, number} = useHelloForm();
    const { t, i18n } = useTranslation();
    
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

            {submitted ? (
                <>
                  <IntlProvider locale={i18n.language}>
                    <div>
                        <p>{t("pages.hello_world.info.hello", {firstName})}<FormattedDate day="2-digit" month="2-digit" year="numeric" value={currentDate} />.</p>
                        <p><FormattedNumber value={number} style="currency" currency={t("pages.hello_world.info.currency")} /></p>
                    </div>
                  </IntlProvider>
                </>
            ) : (
                <p className='content'>{t('pages.hello_world.info.who')}</p>
            )}
        </> 
    );
};

export default HelloForm;
