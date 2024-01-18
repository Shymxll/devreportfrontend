// LoginPage.js
import React from 'react';
import { useState } from 'react';
import "../LoginPage/LoginPage.css";
import axios from 'axios';
import useAuth from '../../../useAuth';


const LoginPage = () => {
    const backendUrl = "http://localhost:8080";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleAppLogin = () => {
        if (!username || !password) {
            alert("Lütfen kullanıcı adı ve şifre alanlarını doldurunuz.");
            return;
        }
        // Uygulama içi giriş işlemleri
        axios.post(backendUrl + "/api/v1/auth/login", {
            username: username,
            password: password
        })
            .then(response => {
                // Eğer kullanıcı giriş yapmışsa, kullanıcı adını ve profil resmini ekranda gösterin.
                console.log(response.data);
                localStorage.setItem('jwtToken', response.data.token);
                window.location.href = '/';
            })
            .catch(error => {
                // Hata durumunda bir mesaj gösterin
                console.error("Giriş işlemi başarısız oldu: ", error);
            });
        


        // Gerçek backend URL'nizi buraya girin

    }


    const handleGithubLogin = () => {
        // Github ile giriş işlemleri
        // Gerçek backend URL'nizi buraya girin
        window.location.href = `${backendUrl}/oauth2/authorization/github`;
    }

    const handleGoogleLogin = () => {
        // Google ile giriş işlemleri
        window.location.href = `${backendUrl}/oauth2/authorization/google`;
    }

    return (
        
        <div>
            <h1>Login Page</h1>
            <h2>Sign in with your username and password</h2>
            <form onSubmit={handleAppLogin}>
                <label>
                    Kullanıcı Adı:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br/>
                <label>
                    Şifre:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br/>
                <button type="submit">Giriş Yap</button>
            </form>
            <br/>
            <h2>Sign in with your social media account</h2>
            <button onClick={handleGithubLogin}>Sign in via GitHub</button>
            <button onClick={handleGoogleLogin}>Sign in Via Google</button>
        </div>
    );
}

export default LoginPage;