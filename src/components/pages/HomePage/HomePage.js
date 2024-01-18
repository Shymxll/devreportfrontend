import React from 'react';
import useAuth from '../../../useAuth';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        // URL'den query parametrelerini al
        const query = new URLSearchParams(location.search);
        const token = query.get('token');

        if (token) {
            // Token'ı güvenli bir şekilde sakla (örneğin, localStorage)
            localStorage.setItem('jwtToken', token);
            // URL'deki token parametresini temizle
            window.history.replaceState({}, document.title, '/');
        }
    }, [location]);
    const isAuthenticated = useAuth();

    return (
        <div>
            <Navbar />
            {isAuthenticated ? (
                <h1>Welcome to the App</h1>

                // Oturum açmış kullanıcı içeriği
            ) : (
                <h1>Please log in</h1>
                // Oturum açmamış kullanıcı içeriği
    
                // Giriş yapma seçeneği
            )}
        </div>
    );
};

export default HomePage;
