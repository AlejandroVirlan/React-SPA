import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import '../../services/i18n';
import LanguageSelector from './LanguageSelector'


test('renders content', () => {
    
    render(
        <LanguageSelector/>
    )

})