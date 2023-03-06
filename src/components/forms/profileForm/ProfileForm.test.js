import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import '../../../services/i18n';
import ProfileForm from './ProfileForm';

const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    picture: "https://example.com/john-doe.jpg",
};

jest.mock("@auth0/auth0-react", () => ({
    useAuth0: () => ({
      isAuthenticated: true,
      user: mockUser,
      isLoading: false,
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
    }),
    withAuthenticationRequired: jest.fn(),
    Auth0Provider: jest.fn(({ children }) => <>{children}</>),
}));

test("renders profile data", async () => {
    render(<ProfileForm />);
      
    const lblNameElement = screen.getByText(/name:/i);
    expect(lblNameElement).toBeInTheDocument();

    const valueNameElement = screen.getByDisplayValue(/john doe/i);
    expect(valueNameElement).toBeInTheDocument();

    const lblEmailElement = screen.getByText(/email:/i);
    expect(lblEmailElement).toBeInTheDocument();

    const valueEmailElement = screen.getByDisplayValue(/john.doe@example.com/i);
    expect(valueEmailElement).toBeInTheDocument();
  
    const altTextImg = screen.getByAltText(/john doe/i);
    expect(altTextImg).toHaveAttribute("src", "https://example.com/john-doe.jpg")
 
  });