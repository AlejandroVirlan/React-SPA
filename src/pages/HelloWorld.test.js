import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import HelloWorld from './HelloWorld'
import '../services/i18n';
import { BrowserRouter } from 'react-router-dom';


test('renders content', () => {
    
    render(
        <BrowserRouter>
            <HelloWorld/>
        </BrowserRouter>
    )

})