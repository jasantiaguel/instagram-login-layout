import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <p>Meta</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Help</p>
                <p>API</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Locations</p>
                <p>Instagram Lite</p>
                <p>Threads</p>
                <p>Contact</p>
                <p>Uploading & Non-Users</p>
                <p>Meta Verified</p>
            </div>

            <div className={styles.footerTrademark}>
                English © 2024 Instagram from Jonathan Santiaguel
            </div>
        </footer>
    )
}