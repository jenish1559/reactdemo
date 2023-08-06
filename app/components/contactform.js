import styles from '@/app/contact/contact.module.css';
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
})
const ContactForm = () => {
    return(
        <form className={styles.contact_form}>
            <div className={styles.contact_field}>
                <label htmlFor='username'>
                    <input type="text" name="username" id="username" 
                    placeholder="Enter your name" className={kanit.className}/>
                </label>
            </div>

            <div className={styles.contact_field}>
                <label htmlFor='phone'>
                    <input type="text" name="phone" id="phone" 
                    placeholder="Enter your phone" className={kanit.className}/>
                </label>

            </div>

            <div className={styles.contact_field}>
                <label htmlFor='email'>
                    <input type="text" name="username" id="email" 
                    placeholder="Enter your emial" className={kanit.className}/>
                </label>

            </div>


        </form>

    )
}

export default ContactForm;