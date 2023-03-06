import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import '../../../services/i18n'
import HelloForm from './HelloForm'
import { BrowserRouter } from 'react-router-dom';


test('renders content', () => {
    
    render(
        <BrowserRouter>
            <HelloForm/>
        </BrowserRouter>
    )

})