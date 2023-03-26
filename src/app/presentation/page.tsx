"use client";
import React from 'react'
import styles from './page.module.scss'
import PageLayout from '../components/PageLayout'
import Image from 'next/image';

export default function page() {
  return (
    <PageLayout>

    <div>
        <div className="page-title">
          <h1><span>Présentation</span></h1>
        </div>
        <div className={styles.main}>
          <div className={styles.history}>
            <Image className='img' alt="dad" src="https://placehold.it/300x500" width="300" height="500"/>
            <p className={styles.intro} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus, felis et laoreet posuere, libero tellus congue diam, vitae bibendum lectus ante aliquet massa. Ut porta purus a sapien mattis, eget dapibus nisi ultrices. Donec nec leo lacinia, lacinia nibh ut, posuere arcu. Duis in turpis nibh. Mauris purus ipsum, tristique nec auctor at, pharetra quis massa. Cras elementum dolor vel nulla tincidunt, et imperdiet quam auctor. Sed sed lorem convallis, convallis sapien quis, mollis felis. Etiam molestie maximus est, at fermentum turpis elementum ut. Nunc gravida rhoncus arcu ut ornare. Nullam lacinia lorem maximus congue fermentum. Proin eget ultrices libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean interdum semper malesuada. Donec lobortis tempus libero, id imperdiet nunc.
              Aenean egestas, felis a efficitur ullamcorper, nibh felis consectetur libero, vitae tristique nisl neque sit amet sem. Vestibulum dapibus iaculis orci ut varius. Nunc porttitor nibh sed nulla finibus, et rutrum enim pharetra. Integer convallis leo nisi, et euismod lorem finibus nec. Mauris ornare nibh eget faucibus faucibus. Fusce sed lorem orci. Fusce dictum lobortis nibh. Duis a facilisis erat. Suspendisse consectetur molestie lectus. Nulla facilisi. Morbi bibendum viverra rutrum. Aenean eu massa nec justo commodo luctus non sed libero. Nunc vel dapibus lectus. Maecenas sagittis sapien tortor, nec iaculis odio dictum quis.
              Sed accumsan, tortor aliquet pretium egestas, erat neque aliquet nibh, a vestibulum augue augue ac libero. Integer aliquam ac sapien id imperdiet. Vivamus at nunc placerat, efficitur lectus eu, sagittis lacus. In neque massa, euismod eget dolor et, porta tempor leo. Etiam mattis lacus sed sapien molestie, vehicula bibendum enim imperdiet. Nam ultricies eu leo sit amet tempus. Duis accumsan sagittis leo. Cras nec mauris viverra, tincidunt ex eget, dapibus ligula. Suspendisse quis lectus ornare, dignissim quam quis, dapibus dolor. Nulla mattis sed lorem lobortis commodo. Quisque consequat ornare ligula, sed iaculis odio hendrerit quis.
            </p>
            <p>
              Pellentesque ac leo enim. Suspendisse at nisi ut tortor ultrices pretium. Donec convallis laoreet rhoncus. Aliquam erat nisi, scelerisque non purus ac, convallis porttitor lacus. Pellentesque consectetur, nunc convallis dictum consequat, tellus dolor imperdiet sapien, nec placerat metus tortor volutpat justo. Nullam consequat ipsum viverra arcu viverra porttitor. Etiam bibendum libero sed libero accumsan, ac volutpat nisl efficitur. Etiam porttitor viverra ante sit amet vehicula. Morbi quis pretium mi, vel scelerisque velit.
              Vestibulum nunc tellus, rutrum sit amet nisi vel, fermentum finibus arcu. Duis ut velit erat. Morbi consectetur metus quis iaculis lobortis. Aenean nec odio a purus pulvinar facilisis. Curabitur vel erat augue. Vivamus eleifend, quam eu blandit dapibus, orci dui facilisis nibh, eget mollis mi diam at elit. Cras lobortis suscipit scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer et mi nisi. Morbi ligula dolor, cursus quis lacinia ac, viverra a nibh. Donec ut eros porta, sollicitudin odio at, ullamcorper sapien. Nunc fringilla mi ipsum, ac dictum libero ultricies in. Aliquam tempor vestibulum lorem eu eleifend. Cras sit amet nulla ac metus blandit finibus id vel nibh.
            </p>
          </div>
        </div>
    </div>
    </PageLayout>
  )
}
