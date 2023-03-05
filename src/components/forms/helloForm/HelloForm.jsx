import { Formik, Form, Field } from 'formik';
import useHelloForm from "./useHelloForm";

const HelloForm = () => {

    const {handleSubmit, textOnChange, cleanForm, isDisable, firstName, submitted, currentDate} = useHelloForm();

    return (
        <>
            <Formik
                initialValues={{firstName: ''}}
                onSubmit = {handleSubmit}
            > 

            {( {handleChange, resetForm} ) => (
                <Form className="helloForm">
                    <div className="firstName-container">
                        <label htmlFor="firstName">Name</label>
                        <Field
                            id="firstName" 
                            name="firstName" 
                            type="text" 
                            onChange={(event) => textOnChange(handleChange, event)}
                        />
                    </div>

                    <div className="buttons-container">
                        <button type="submit" disabled={isDisable()}>
                            Submit
                        </button>
                        
                        <button type="button" onClick={() => cleanForm(resetForm)} disabled={isDisable()}>
                            Cancel
                        </button>
                    
                        <button type="button" onClick={() => cleanForm(resetForm)} disabled={isDisable('Exit')}>
                            Exit
                        </button>
                    </div>
                </Form>
            )}
            </Formik>

            {submitted ? (
                <p className='changed-content'>Hello, <span className='content-sent'>{firstName}</span>! Now it is {currentDate}.</p>
            ) : (
                <p className='content'>Who are you?</p>
            )}
        </> 
    );
}

export default HelloForm
