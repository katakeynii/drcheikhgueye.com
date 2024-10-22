import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useState } from "react";
import styles from '../page.module.scss';
// import bookCover from '../../assets/Couverture Livre.png';
import useModalStore from "@/stores/useModalStore";

type Props = {
  title: string
  children: ReactNode
}

export const PopupContainer = ({title, bookCover, children}: {title: string, bookCover: StaticImageData, children: ReactNode}) => {
    const [open, setOpen] = useState(false);
    const {isModalOpen, toggleModal, openedModal} = useModalStore((state) => state)
    useEffect(() => {
      setOpen(isModalOpen)
    }, [isModalOpen]);
    if(!open) return null
    return(
      <div className={styles.popupContainer} >
          <div className={styles.content} >
            <div className={styles.closePopup} onClick={() => toggleModal(openedModal)}> Fermer </div>
            <h1 className={styles.popupHead} >{title}</h1>
            <div className={styles.box} >
              <div>
                <Image className={styles.cover} alt="dad" src={bookCover} width="300" />
              </div>
              <div className={styles.formContainer}>
                {children}
              </div>
            </div>
          </div>
      </div>
    );
  }