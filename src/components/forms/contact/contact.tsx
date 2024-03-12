import React, { FC } from 'react';
import styles from './Contact.module.scss';
import { DROPDOWN, LABELS, PLACEHOLDERS } from 'lib/constants/contact_us';
import { CTA } from 'lib/constants/Header';

const Contact: FC = () => {
    return (
        <form>
            <div className={styles.formGroup}>
                <label htmlFor="full_name">{LABELS.full_name}</label>
                <input type="text" id="full_name" placeholder={PLACEHOLDERS.full_name} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">{LABELS.email}</label>
                <input type="email" id="email" placeholder={PLACEHOLDERS.email} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="subject">{LABELS.subject}</label>
                <select id="subject">
                    {DROPDOWN?.options?.map((option, index) => (
                        <option key={index} value={option.name}>{option.value}</option>
                    ))}
                </select>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">{LABELS.message}</label>
                <textarea id="message" placeholder={PLACEHOLDERS.message}></textarea>
            </div>
            <button>{CTA.title}</button>
        </form>
    );
};

export default Contact;
