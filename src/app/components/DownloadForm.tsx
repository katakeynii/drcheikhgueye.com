import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PopupContainer } from "./PopupContainer";
import styles from '../page.module.scss'
import Image from 'next/image'

import Lottie from 'react-lottie';
import loader from '../../assets/loader.json';
import sentAnimation from '../../assets/mailsent.json';

type Inputs = {
  email: string
  name: string
  whatsapp: string
}

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useModalStore from "@/stores/useModalStore";
import mixpanel from "@/services/mixpanel";

export const DownloadForm =  () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      mixpanel.time_event('Filling Download')
    }, [])
    const {isModalOpen, toggleModal} = useModalStore((state) => state)
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      setIsLoading(true)
      let {
        email,
        name,
        whatsapp
      } = data;
      try {
        const response = await fetch('/api/gsheets', {
          method: 'POST', // Specify the HTTP method
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify({
            name, email, whatsapp
          }), // Convert the user object to a JSON string
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        mixpanel.track('Filling Download')
        setIsSent(true)
        setIsLoading(false)
        const data = await response.json();
        const brevoUrl = process.env.NEXT_PUBLIC_BREVO_URL ?? ""
        const responseEmail = await fetch(brevoUrl, {
          method: 'POST', // Specify the HTTP method
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY ?? ""

          },
          body: JSON.stringify({
            to: [{
              email,
              name
            }],
            templateId: 1,
            headers: {  
              "charset":"iso-8859-1"
            }
          }), // Convert the user object to a JSON string
        });
      } catch (error) {
        setIsLoading(false)
      }
      // const shData = await readData();
      // console.log("data ", shData)
    }
    const onSentRenderer = () => ( 
        <div>
          <Lottie 
            options={{
              loop: false,
              autoplay: false,
              animationData: sentAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
              height={200}
              width={200}
            />
          <h2>Aperçu envoyé avec succès</h2>
          <div>
              <div>Un exemplaire vous a été envoyé.</div>
              <div>Veuillez consulté votre adresse email.</div> 
              <div>Merci</div>
          </div>
        </div>
    )
    const formRenderer = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <h2>Téléchargez gratuit un aperçu du livre</h2>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nom complet </label>
            {errors.name && <span className={styles.requiredField}>This field is required</span>}
            <input className={styles.formControl} {...register("name", {required: true})} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            {errors.name && <span className={styles.requiredField}>This field is required</span>}
            <input className={styles.formControl} {...register("email", {required: true})}  />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Numero de téléphone (Whatsapp) </label>
            <input className={styles.formControl} {...register("whatsapp", {required: true})}  />
          </div>
          <div className={styles.formGroup}>
            {isLoading ? (
                <Lottie 
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: loader,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                    height={100}
                    width={200}
                  />
              ): 
              (<button className={styles.drbtn} type="submit" > Télécharger</button>) 
            } 
            
          </div>
        </form>
    )
    return(
      <PopupContainer title="Télécharger gratuitement le premier chapitre">
          {!isSent ? formRenderer() : onSentRenderer() }
      </PopupContainer>
    );
  }
  