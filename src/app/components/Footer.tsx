import React from 'react';
import styles from '../page.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <div>
                    <h2 className={styles.footerTitle}>Dr. Cheikh GUEYE</h2>
                    <div>+221 77 653 12 56</div>
                </div>
                <div className={styles.footerFuncs}>
                    <div>Docteur en science de l’éducation</div>
                    <div>Inspecteur Général de l’éducation nationale</div>
                    <div>Traducteur Arabe-Français-Anglais</div>
                </div>
            </div>
                <div className={styles.builtTag}>built with 🖤 by <a href="https://www.linkedin.com/in/mohamed-camara-gueye/" target="_blank">@baayuseex</a> </div>
        </footer>
    );
}

export default Footer;
