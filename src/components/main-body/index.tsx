import React, { FC } from 'react';
import styles from './MainBody.module.scss';
import { DESCRIPTION, HEADING } from 'lib/constants/contact_us';
import Contact from 'components/forms/contact/contact';
import Image from 'assets/contact_form_img.png'

const MainBody: FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <div>
                    <h2>{HEADING}</h2>
                    <p>{DESCRIPTION}</p>
                    <Contact />
                </div>
            </div>
            <div>
                <img src={Image} />
            </div>
        </section>
    );
};

export default MainBody;
