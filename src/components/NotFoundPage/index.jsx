import React from 'react';
import Button from "../Button";
import styles from './NotFoundPage.module.css';
import TeamRocket from './assets/teamRocket.png'

const NotFoundPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    404
                </div>
                <div className={styles.layer}>
                    <img src={TeamRocket} alt="Team Rocket"/>
                    <div className={styles.subtitle}>
                        <span>The rocket team</span> has won this time.
                    </div>
                    <Button>Return</Button>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;