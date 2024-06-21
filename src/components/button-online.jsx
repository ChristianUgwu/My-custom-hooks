// src/components/button-online.jsx
import React from 'react';

const ButtonOnline = ({ isOnline }) => {
    alert (isOnline ? "You are now online" : "You are offline, please check your network connection");
    return (
        <div>
                {isOnline ? "You are now online": "You are offline please cheack your network connection"}
        </div>
            
        
    
    );
};

export default ButtonOnline;


