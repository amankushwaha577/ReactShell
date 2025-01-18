import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import './App.css';
import back from './Assets/Background.jpg';

const WelcomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenHomePopup');
        if (!hasSeenPopup) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenHomePopup', 'true');
    };

    return (
        <Modal
            title={<span className="popup-title">🎉 Welcome to Your Project!</span>}
            open={isVisible}
            onCancel={handleClose}
            width={900} 
            footer={[
                <Button key="ok" type="primary" onClick={handleClose} className="custom-button">
                    Got It!
                </Button>
            ]}
            className="custom-popup"
        >
            <div className="popup-image-container">
                <img src={back} alt="Welcome Banner" />
            </div>
            <p className="popup-message">
                Welcome to your homepage! 🚀  Enjoy exploring the app!
            </p>
        </Modal>
    );
};

export default WelcomePopup;
