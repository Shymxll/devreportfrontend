import React from "react";
import {  useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const backendUrl = "http://localhost:8080";

   
        // backend URL + /user endpoint'ine GET request atarak kullanıcı bilgilerini alın.
      axios.get(backendUrl + "/api/v1/auth/test")
            .then(response => {
                // Eğer kullanıcı giriş yapmışsa, kullanıcı adını ve profil resmini ekranda gösterin.
                setUser(response.data);
                console.log(response.data);
            })
            .catch((ex) => {
                // Eğer kullanıcı giriş yapmamışsa, login sayfasına yönlendirin.
                console.log(ex);

            });
   

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            
        </div>
    );
};

export default DashboardPage;
