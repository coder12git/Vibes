import React from 'react'
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
import {  useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    function startRegister(){
        navigate('/authenticate');
        
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to VIBES!" icon="logo">
                <p className={styles.text}>
                Tap into the world's largest network where you can create or join voice rooms to chat with others and discover trending articles, all in one easy-to-use app.
                </p>
                <div>
                <Button onClick={startRegister} text="Let's Go" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                    
                </div>
            </Card>
        </div>
    )
}

export default Home