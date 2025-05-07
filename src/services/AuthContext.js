export const AuthProvider = ({ children }) => {
    // ... existing code

    const login = async (credentials) => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            const user = {
                username: credentials.username,
                token: data.token,
                // Add other user details you might need
            };

            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            navigate('/');
        } catch (error) {
            throw new Error(error.message || 'Login failed');
        }
    };

    // ... rest of the code
};