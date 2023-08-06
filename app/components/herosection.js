import herostyles from "@/app/style/herosection.module.css";
import styles from "@/app/style/common.module.css";
import Link from "next/link";
import Image from "next/image";
const HeroSection = (props) => {
    return (
        <main className={herostyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={herostyles.hero_content}>
                        <h1>Hi I am Jenisih.</h1>
                        <p>
                            This is the First React App created by Me.
                            <br />
                            <span>This is {props.name} Page</span>
                        </p>
                        <Link href="/movies">
                            <button>Explore</button>
                        </Link>
                    </div>
                    <div className={herostyles.hero_image}>
                        <Image src="/heroimg.png" alt="desk img" width={500} height={500} />
                    </div>
                </div>
            </div>
            <div className={herostyles['custom-shape-divider-bottom-1691305692']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={herostyles['shape-fill']}></path>
                </svg>
            </div>
        </main>
    )
}

export default HeroSection;