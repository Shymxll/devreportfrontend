import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../useAuth';
import './Navbar.css';
import axios from 'axios';

const Navbar = () => {
    const isAuthenticated = useAuth();

    function handleLogout() {
        try {
            // Backend'e logout isteği gönder
            axios.get('/logout');

            // Frontend'deki oturum bilgilerini temizle
            localStorage.removeItem('jwtToken'); // Varsayılan token adı. Uygulamanıza göre değiştirin


            // Kullanıcıyı giriş sayfasına yönlendir
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout error', error);
        }
    }
    

    return (
        <nav>
            <ul>
                <li><Link to="/">Landing Page</Link></li>
                {isAuthenticated ? (
                    <li><Link to="/logout" onClick={handleLogout} >Logout</Link></li>
                ) : (
                    <li ><Link to="/login"  >Login</Link></li>
                )}
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;