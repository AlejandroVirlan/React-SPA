import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const HelloForm = () => {

    const[firstName, setFirstName] = useState("");
    
    const[submitted, setSubmitted] = useState(false);
    
    const currentDate = new Date().toLocaleDateString();

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setSubmitted(true);
        setFirstName(values.firstName);
    }

    const cleanForm = ({ resetForm }) => {
        resetForm();
        setSubmitted(false);
        navigate('/');
    };

    return (
        <>
            <Formik
                initialValues={{firstName: ''}}
                onSubmit = {handleSubmit}
                
            > 

            {( {values, resetForm} ) => (
                <Form>
                    <div>
                        <label htmlFor="firstName">Name</label>
                        <Field name="firstName" type="text" />
                    </div>

                    <div>
                        <button type="submit" disabled={!values.firstName.trim() || values.firstName.trim() === firstName}>
                            Submit
                        </button>
                        
                        <button type="button" onClick={() => cleanForm({ resetForm })} disabled={!values.firstName.trim() || values.firstName.trim() === firstName}>
                            Cancel
                        </button>
                    
                        <button type="button" onClick={() => cleanForm({ resetForm })} disabled={values.firstName.trim() && values.firstName.trim() !== firstName}>
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
