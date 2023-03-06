import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import '../../../services/i18n';
import LogoutButton from './LogoutButton';

test('renders content', () => {
    
    render(
        <LogoutButton/>
    )

})