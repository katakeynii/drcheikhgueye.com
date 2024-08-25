'use client';
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import mixpanel from '@/services/mixpanel'

export default function Page() {
  useEffect(() => {
    mixpanel.track('Page View', {
      'Page Name': 'Ouvrages'
    })
    mixpanel.track('GoTo Page : Ouvrage')
  }, [])
  return (
    <div>
        <div className="page-title">
          <h1><span>Ouvrages</span></h1>
        </div>
        <div className={styles.main}>
        <div>
              <div className={styles.books}>
                <div className={styles.book}>
                  <Image alt="" src="https://placehold.it/200x300" width="200" height="300" />
                  <div>
                    Etude et analyse des programmes d’arabe en vigueur dans les collèges et lycées classiques au Sénégal (arabe: 2023)
                  </div>
                </div>
                <div className={styles.book}>
                  <Image alt="" src="https://placehold.it/200x300" width="200" height="300" />
                  Quelle approche méthodologique pour l’initiation à l’écriture arabe au cycle fondamental ? (Français : 2005) 
                  </div>
                <div className={styles.book}>
                  <Image alt="" src="https://placehold.it/200x300" width="200" height="300" />
                  L’enseignement bilingue au Sénégal : défis pédagogiques dans les écoles publiques de statut franco-arabe (français : 2008)
                  </div>
                <div className={styles.book}>
                  <Image alt="" src="https://placehold.it/200x300" width="200" height="300" />
                  Vers la révision de la méthode d’enseignement du hadith dans les écoles franco-arabes publiques sénégalaises (2009)
                  </div>
                <div className={styles.book}>
                  <Image alt="" src="https://placehold.it/200x300" width="200" height="300" />
                  Enseignement  de l’arabe aux non natifs de la langue : importance de l’exploitation des acquis linguistiques des élèves francophones (Article en arabe) (2010)
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
