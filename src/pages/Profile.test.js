import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Profile from './Profile'
import '../services/i18n';


test('renders content', () => {
    
    render(
        <Profile/>
    )

})