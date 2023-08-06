import styles from '@/app/style/common.module.css';
import Link from 'next/link';
const NotFound = () => {
    return(
       <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h1>Not Found</h1>
            <p>Colud not find request resource</p>
            <Link href="/">
                <button>Go to Home page</button>
            </Link>
        </div>

       </section>
    )
};

export default NotFound;