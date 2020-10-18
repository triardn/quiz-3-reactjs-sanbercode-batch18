import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="about-container">
                <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong style={{width: 100}}>Nama:</strong> Tri Ardini</li> 
                    <li><strong style={{width: 100}}>Email:</strong> tr.ardn@gmail.com</li> 
                    <li><strong style={{width: 100}}>Sistem Operasi yang digunakan:</strong> macOS</li>
                    <li><strong style={{width: 100}}>Akun Github:</strong> @triardn</li> 
                    <li><strong style={{width: 100}}>Akun Telegram:</strong> @triardn</li> 
                </ol>
                <br/>
            </div>
        </div>
    );
};

export default About;