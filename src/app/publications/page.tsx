"use client" 
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import Navbar from '../components/Navbar'
import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import mixpanel from '@/services/mixpanel'

export default function Page() {
  useEffect(() => {
    mixpanel.track('Page View', {
      'Page Name': 'Publications'
    })
  }, [])
  return (
    <PageLayout>
    <div>
        <div className="page-title">
          <h1><span>Publications</span></h1>
        </div>
        <div className={styles.main}>
          <div className={styles.theseContainer}>
            <div className={styles.miniTitle}>Thèse de doctorat soutenue en français</div>
            <div className={styles.these}>
              <h2>Etude des rapports entre modalités de transfert et performances en grammaire chez les sujets francophones apprenant l’arabe comme LVII»</h2>
            </div>
          </div>
            <div>
              <div className={styles.miniTitle}>Articles en arabe:</div>
              <div className={styles.articles}>
                <div className={styles.article}>Quelle approche méthodologique pour l’initiation à l’écriture arabe au cycle fondamental ? (Français : 2005) </div>
                <div className={styles.article}>L’enseignement bilingue au Sénégal : défis pédagogiques dans les écoles publiques de statut franco-arabe (français : 2008)</div>
                <div className={styles.article}>Vers la révision de la méthode d’enseignement du hadith dans les écoles franco-arabes publiques sénégalaises (2009)</div>
                <div className={styles.article}>Enseignement  de l’arabe aux non natifs de la langue : importance de l’exploitation des acquis linguistiques des élèves francophones (Article en arabe) (2010)</div>
              </div>
            </div>
        </div>
    </div>
    </PageLayout>
  )
}
