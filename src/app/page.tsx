
'use client';
import Image from 'next/image'
import React from 'react';
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import PageLayout from './components/PageLayout';
import TextTransition, { presets } from "react-text-transition";
const inter = Inter({ subsets: ['latin'] })
const titles = ['Docteur en science de l’éducation', 'Inspecteur Général de l’éducation nationale', 'Traducteur Arabe-Français-Anglais'];
import main from '../assets/Frame 2.png';
export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <PageLayout>
      <main className={styles.main} id="head">

        <div className={styles.presentationWrapper} >
          <div className={styles.coverContainer}>
            <Image className='img' alt="dad" src={main} width="300" height="300"/>
          </div>
        <div>
          <h1 className={styles.name}>Dr. Cheikh GUEYE</h1>
            <h2 className={styles.fonction} >
            <TextTransition springConfig={presets.wobbly} direction='down'>
                {titles[index % titles.length]}
              </TextTransition>
            </h2>
        </div>
        </div>
      </main>
    </PageLayout>
  )
}
