
'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import PageLayout from './components/PageLayout';
import TextTransition, { presets } from "react-text-transition";
const inter = Inter({ subsets: ['latin'] })
const titles = ['Docteur en science de l’éducation - Inspecteur Général de l’éducation nationale', 'Traducteur Arabe-Français-Anglais'];
import main from '../assets/Frame 2.png';

import bookCover from '../assets/Couverture Livre.png';
import { DownloadForm } from './components/DownloadForm';

export default function Home() {
  console.log(process.env)
  const [index, setIndex] = React.useState(0);
  return (
    <PageLayout>
      <main className={styles.main} id="head">

        <div className={styles.container}>

          <div className={styles.homePresentation}>
            <Image className={styles.avatar} alt="dad" src={main} width="100" height="100"/>
            <div>
              <h1 className={styles.name}>Dr. Cheikh GUEYE</h1>
              <div className={styles.titles} >{titles.map(t => (<div>{t}</div>) )}</div>
            </div>
          </div>
          <div className={styles.bookPresentation}>
            <div >
              <Image className={styles.cover} alt="dad" src={bookCover} width="300" height="auto"/>
            </div>
            <div>
              <h1 className={styles.bookTitle}>Nouvelle Approche de la grammaire arabe</h1>
              <div>
                <p>
                  L'arabe est une langue sémitique originaire de la péninsule arabique, qui s'est largement répandue à travers le monde grâce à l'expansion territoriale au Moyen Âge et à la diffusion du Saint Coran. Elle est désormais l'une des langues les plus parlées au monde, étant la langue officielle de plus de vingt pays et d'organisations internationales comme l'ONU. L'arabe se divise en deux formes principales : l'arabe dialectal et l'arabe littéraire (ou classique), avec ce manuel visant à enseigner la grammaire arabe aux francophones.
                </p>
                <p>
                  Ce manuel aborde les défis de l'apprentissage de l'arabe pour les francophones, en soulignant que les obstacles sont principalement conceptuels et méthodologiques, plutôt que linguistiques. Il structure son contenu en trois parties : la morphologie lexicale des mots arabes, la morphologie grammaticale des mots en fonction de diverses catégories grammaticales, et les fonctions syntaxiques des mots dans la phrase. Chaque section est conçue pour aider les apprenants à concilier les réalités grammaticales de l'arabe avec celles du français, facilitant ainsi leur acquisition de la langue.
                </p>
                <p>
                    Enfin, l'ouvrage, tout en offrant une approche pédagogique détaillée, cherche à guider les apprenants de manière méthodique dans leur apprentissage de l'arabe, en espérant que ce travail soit bénéfique non seulement dans cette vie mais aussi au Jour de la Résurrection, selon les croyances islamiques.
                </p>
              </div>
              <div className={styles.buttons}>
                <div className={`${styles.dwldbtn}`}> Télécharger le Premier chapitre </div>
                <div  className={`${styles.buybtn}`}> Acheter le livre </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className={styles.presentationWrapper} >
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
        </div> */}
      </main>
      <DownloadForm/>
    </PageLayout>
  )
}

