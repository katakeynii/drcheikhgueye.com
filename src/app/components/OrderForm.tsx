import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../page.module.scss';
import { PopupContainer } from "./PopupContainer";

import Lottie from 'react-lottie';
import ArabicBook from '../../assets/book-arabic-dad.png';
import GrammarBook from '../../assets/book-grammar-dad.png';
import loader from '../../assets/loader.json';
import sentAnimation from '../../assets/mailsent.json';

type Inputs = {
  email: string
  name: string
  whatsapp: string
  quantity: string
}

import mixpanel from "@/services/mixpanel";
import useModalStore from "@/stores/useModalStore";

export const OrderForm =  ({ selectedBook }: {selectedBook: string}) => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {isModalOpen, toggleModal} = useModalStore((state) => state)
    const bookImage = selectedBook === 'book-grammar' ? GrammarBook : ArabicBook

    useEffect(() => {
      mixpanel.time_event('Setting Order')
    }, [])
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      mixpanel.track("Submit Order", {
        "Data": data
      })
      setIsLoading(true)
      let {
        email,
        name,
        whatsapp,
        quantity
      } = data;
      try {
        const response = await fetch('/api/orders', {
          method: 'POST', // Specify the HTTP method
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify({
            selectedBook, name, email, whatsapp, quantity
          }), // Convert the user object to a JSON string
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        mixpanel.track('Setting Order', {
          "Status": "Order successful"
        })
        setIsSent(true)
        setIsLoading(false)
        const data = await response.json();
      } catch (error) {
        mixpanel.track('Setting Order', {
          "Status": "Order Failed"
        })
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
          <h2>Commande reçue</h2>
          <div className={styles.opsSuccess}>
            <div>Votre commande a été bien envoyée. </div>
            <div>Au traitement de votre commande, nous vous contacterons pour les modalités de paiement et de livraison. </div>
            <div>Merci</div>
          </div>
        </div>
    )
    const formRenderer = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <h2>Faites votre commande du livre</h2>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nom complet </label>
            {errors.name && <span className={styles.requiredField}>This field is required</span>}
            <input className={styles.formControl} {...register("name", {required: true})} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            {errors.name && <span className={styles.requiredField}>This field is required</span>}
            <input className={styles.formControl} type='email' {...register("email", {required: true})}  />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Numero de téléphone (Whatsapp) </label>
            {errors.name && <span className={styles.requiredField}>This field is required</span>}
            <input className={styles.formControl} {...register("whatsapp", {required: true})}  />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Quantité </label>
            {errors.quantity && errors.quantity.type === "required" && (
              <span className={styles.requiredField} role="alert">This is required</span>
            )}
            {errors.quantity && errors.quantity.type === "max" && (
              <span className={styles.requiredField} role="alert">Vous ne pouvez pas commander plus de 10 livres</span>
            )}
            <input className={styles.formControl} 
              type="number" 
              {...register("quantity", {required: true, min: 1, max: 10})}  />
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
              (<button className={styles.drbtn} type="submit" > Commande</button>) 
            } 
            
          </div>
        </form>
    )
    return(
      <PopupContainer bookCover={bookImage} title="Passez votre commande">
          {!isSent ? formRenderer() : onSentRenderer() }
      </PopupContainer>
    );
  }
  