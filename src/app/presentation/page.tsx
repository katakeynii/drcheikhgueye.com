"use client";
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import PageLayout from '../components/PageLayout'
import Image from 'next/image';
import presentation from "../../assets/Frame 3.png"
import mixpanel from '@/services/mixpanel';
export default function page() {
  useEffect(() => {
    mixpanel.track('Page View', {
      'Page Name': 'Presentation'
    })
  }, [])
  return (
    <PageLayout>

    <div>
        <div className="page-title">
          <h1><span>Présentation</span></h1>
        </div>
        <div className={styles.main}>
          <div className={styles.history}>
            <Image className='img' alt="dad" src={presentation} style={{objectFit: 'cover' }}  width="300" height="500"/>
            <p className={[styles.intro, styles.paragraphContainer].join(" ")} >
              <p className={styles.paragraph} >
              Le Dr Cheikh Gueye, né dans les années quarante, à Louga, est l&apos;un des principaux chercheurs et éducateurs travaillant, toujours, à faire progresser l&apos;éducation en Afrique en général, et au Sénégal en particulier. Il a servi l&apos;éducation arabo-islamique dans plusieurs domaines. A noter aussi que M. Gueye est francophone de formation, pour avoir fréquenté l’école française jusqu’au Brevet et passé plus de dix ans à l’école publique, comme instituteur, période au cours de laquelle il obtint comme diplômes professionnels le certificat élémentaire d’aptitude pédagogique (CEAP), le Brevet Supérieur de Capacité (BSC) et le Certificat d’Aptitude Pédagogique (CAP). 
              </p>
              <p className={styles.paragraph}>

              Titulaire du Baccalauréat français en 1972, il s’inscrivit au département d’anglais de l’université de Dakar, avec l’arabe comme deuxième langue. Après avoir obtenu la licence d’anglais en 1976, il fut nommé professeur d’anglais et eut à servir, d’abord, au lycée Abdoulaye Sadji de Rufisque, puis au lycée Limamou Laye de Pikine. Il choisit ensuite  de s’inscrire au département  d’arabe(2e année) où il obtint la licence (1978), puis la maitrise (1979). En 1980, il fut recruté comme élève inspecteur de l’enseignement élémentaire et au terme des deux ans que devait durer la formation se vit décerner le diplôme d’aptitude à l’inpectorat.
              </p>
              <p className={styles.paragraph}>                
                En 1982, il fut affecté au ministère de l’éducation nationale de son pays, comme chef du bureau arabe. Celui-ci, jusqu’alors, relevait de ce qu’on appelait à l’époque « la division des Enseignements spéciaux » Détaché de cette division, sur ordre du directeur de l’enseignement élémentaire, le bureau devint, ensuite, en 1984, sous son initiative, l’actuelle « Division de l’Enseignement Arabe ». M. Gueye fut à l’origine du tout  premier programme de l’enseignement de l’arabe, au niveau de l’élémentaire (arrêté ministériel n°7500 du 24 juin 1984). Il eut aussi à organiser, au cours de cette même année, le tout premier concours de recrutement de maîtres d’arabe au Sénégal.
              </p>



            </p>
            <p  className={styles.paragraphContainer}>
              <p className={styles.paragraph}>
              Outre sa qualité d’inspecteur de l’enseignement de langue française, M. Gueye fut nommé, en 2004, inspecteur général de l’éducation et de la formation, chargé de l’élémentaire. Il fut l’initiateur de l’ouverture de l’option arabe au département des élèves-inspecteurs de la Faculté des sciences et technologies de l’éducation et de la formation (FASTEF) où il forma, en langue arabe, les élèves inspecteurs arabophones de 1986 à 2015, date de son admission à faire valoir ses droits à une pension de retraite. En plus de tout cela, M Gueye est spécialisé dans la didactique de l’arabe, la recherche et la traduction français - anglais - arabe. 
              </p>
              <p className={styles.paragraph}>
              Dans ce domaine, ce qui lui a valu une renommée mondiale, c&apos;est sa traduction de nombreux ouvrages islamiques provenant de divers pays, notamment sa traduction réussie, en langue française, de la biographie du Prophète (paix et salut sur lui) intitulée (Ar Raheeq Al Makhtum) « Le Nectar cacheté », du Cheikh Safi Ar Rahman Al Mubar Kafurî, traduction pour laquelle il a été primé, dans les années 90, comme meilleur traducteur du monde islamique. 

              </p>
            </p>
          </div>
        </div>
    </div>
    </PageLayout>
  )
}
