import ContactCard from "../components/contactcard";
import styles from '@/app/contact/contact.module.css';
import ContactFrom from "@/app/components/contactform";

const Contact = () => {
    return (
        <>
            <div className={styles.conatiner}>
                <h1>Contact Us</h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2> We d love to hear <span>from you</span></h2>
                    <ContactFrom/>
                </section>
            </div>
        </>
    )
};

export default Contact;