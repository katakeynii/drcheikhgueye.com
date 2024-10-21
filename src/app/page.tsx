
'use client';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ArabicBookCover from '../assets/arabic-book.svg';
import GrammarBookCover from '../assets/grammar-book.svg';
import PageLayout from './components/PageLayout';
const inter = Inter({ subsets: ['latin'] })
const titles = ['Docteur en science de l’éducation - Inspecteur Général de l’éducation nationale', 'Traducteur Arabe-Français-Anglais'];

import mixpanel from '@/services/mixpanel';
import useModalStore from '@/stores/useModalStore';

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const {isModalOpen, toggleModal, openedModal} = useModalStore((state) => state)
  useEffect(() => {
    mixpanel.track('Page View', {
      'Page Name': 'Accueil'
    })
    mixpanel.track('GoTo Page : Accueil')
  }, [])
  return (
    <PageLayout>
      <main id="head">
        <div className="relative" >
          <div className="text-3xl font-black p-10 text-center py-16 bg-[url('../assets/bg-green.png')] text-black" >
            Apprenez la langue arabe car elle fait partie de votre religion
            <span className="text-lg font-light block mt-5" >Omar Ibn Al Khattab</span>
          </div>
          <div className='flex flex-col'>
            <div className=" bg-[url('../assets/bg-green.png')]">
              <div className="text-5xl font-black relative text-center before:absolute before:w-16 before:left-0 before:top-0 before:bg-black before:h-1 before:top-1/2 before:left-0 w-full after:absolute   after:top-0 after:bg-black after:h-1 after:top-1/2 after:right-0 md:before:w-1/3 md:after:w-1/3 after:w-16" >
                Nos livres
              </div>
              <div className="p-10 flex flex-col items-center justify-center gap-10 " >
                <h2 className={"text-2xl font-bold text-center md:text-5xl md:font-light md:w-1/2 "}> {"Approche pratique de l'initiation à l'arabe et à la lecture du Saint Coran"} </h2>
                <Image  alt="dad" src={ArabicBookCover}  width="500" height="500"  />
                <div className={"md:w-1/2 md:flex md:flex-col md:gap-5 md:justify-center md:items-center"}>
                  <div className={"w-full bg-black font-black text-white px-10 py-5 text-center text-4xl md:w-1/2"}> 10 000 <sup className={"text-base font-medium"}>FCFA</sup> </div>
                  <div className={"text-xl text-justify md:text-center md:text-2xl"}>
                   {" Ce manuel de grammaire arabe pour francophones met l'accent sur les défis conceptuels et méthodologiques de l'apprentissage. Il est structuré en trois parties : la morphologie lexicale, la morphologie grammaticale et les fonctions syntaxiques, aidant ainsi les apprenants à mieux comprendre l'arabe en le comparant au français."}
                    
                  </div>
                </div>
              </div>
              <div className=" bg-gray-100 p-10 flex flex-col items-center justify-center bg-[url('../assets/bg-white.png')] relative gap-10">
                <h2 className={"text-2xl font-bold text-center md:text-5xl md:font-light md:w-1/2 "}>{" Nouvelle approche de la grammaire arabe"}</h2>
                <Image  alt="dad" src={GrammarBookCover} width="500" height="500" />
                <div className='md:w-1/2 md:flex md:flex-col md:gap-5 md:justify-center md:items-center'>
                  <div className={'w-full bg-black font-black text-white px-10 py-5 text-center text-4xl md:w-1/2'}> 15 000 <sup className='text-base font-medium ' >FCFA</sup> </div>
                  <div className={'text-xl text-justify md:text-center'}>
                    {"Ce manuel de grammaire arabe pour francophones met l'accent sur les défis conceptuels et méthodologiques de l'apprentissage. Il est structuré en trois parties : la morphologie lexicale, la morphologie grammaticale et les fonctions syntaxiques, aidant ainsi les apprenants à mieux comprendre l'arabe en le comparant au français."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
                {/* <div className={'flex flex-col gap-5 mt-16'}>
                  <div className={`bg-[color:#91d5aa] p-5 text-center text-xl w-full`} onClick={() => toggleModal('DOWNLOADS')}> Télécharger la première leçon </div>
                  <div  className={` p-10 w-full p-5 text-center text-xl  bg-gray-200`}  onClick={() => toggleModal('ORDERS')}> Commander le livre </div>
                </div> */}
        {/* {openedModal === "DOWNLOADS" && <DownloadForm/> }     
        {openedModal === "ORDERS" && <OrderForm /> }      */}
    </PageLayout>
  )
}

// <div className={` ${styles.homePresentation} hidden`}>
// <Image className={styles.avatar} alt="dad" src={main} width="100" height="100"/>
// <div>
//   <h1 className={styles.name}>Dr. Cheikh GUEYE</h1>
//   <div className={styles.titles} >{titles.map((t, i) => (<div key={i} >{t}</div>) )}</div>
// </div>
// </div>