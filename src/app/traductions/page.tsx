'use client';
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import mixpanel from '@/services/mixpanel'
export default function Page() {
  useEffect(() => {
    // time an event named 'Registered'
    mixpanel.time_event('Page Opened');

    mixpanel.track('Page View', {
      'Page Name': 'Traductions'
    })
    mixpanel.track('GoTo Page : Traductions')
    return () => {
      mixpanel.track('Page Opened', {'Page Name': 'Traductions'});
    }
  }, [])
  return (
    <div>
        <div className="page-title">
          <h1><span>Traductions</span></h1>
        </div>
        <div className={styles.main}>
        <div>
              <div className={styles.books}>
                <div className={styles.book}>
                  <Image alt="" src="/le-nectar-cachete-.jpg" width="200" height="300" style={{objectFit: 'cover'}} />
                  <div>
                    Le Nectar cacheté (Ar – Raheeq Al – Makhtoum) du Cheikh Safi Ar Rahman Al Moubarak Fawri (Biographie du Prophète, paix et salut sur lui) : 1997 
                  </div>
                </div>
                <div className={styles.book}>
                  <Image alt="" src="/40conseil.jpg" width="200" height="300" style={{objectFit: 'cover'}} />
                  <div>
                  Quarante conseils pour réformer les foyers du Cheikh Mounajjid 
                  </div>
                </div>
                <div className={styles.book}>
                  <Image alt="" src="/interdits-negliges-gens.jpg" width="200" height="300" style={{objectFit: 'cover'}} />
                  <div>
                  Les interdits négligés par les gens du Cheikh Mounajjid  
                  </div>
                </div>
                <div className={styles.book}>
                  <Image alt="" src="/paradis-enfer.jpg" width="200" height="300" style={{objectFit: 'cover'}} />
                  <div>
                  Le paradis et l’enfer du docteur Souleiman Al Achqa 
                  </div>
                </div>

              </div>
            </div>
        </div>
        i
        <div className="page-title">
          <h2><span>Autres</span></h2>
        </div>
        <div className={styles.main}>
          <div className={styles.otherBooks} >
            <div className={styles.otherbook}>
              Les épitres de lumière du Cheikh Bediuzzaman Said Nursi 
            </div>
            <div className={styles.otherbook}>
              Le cœur entre la Science et la Charia de l’ingénieur mauritanien Al Hassan Haye
            </div>
            <div className={styles.otherbook}>
            Les repères temporels du Cheikh Abdel Monem El Zein 
            </div>
          </div>
        </div>
    </div>
  )
}
