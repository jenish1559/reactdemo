import styles from "@/app/style/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
const Header = () =>{   
    return(
        <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
            <Image src="/logo.png" alt="brand logo" width={150} height={70}/>
            </Link>
        </div>
        
            <Nav/>
        
        </header>
    )
}

export default Header;