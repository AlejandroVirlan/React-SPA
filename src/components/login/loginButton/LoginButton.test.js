import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import '../../../services/i18n';
import LoginButton from './LoginButton';

test('renders content', () => {
    
    render(
        <LoginButton/>
    )

})