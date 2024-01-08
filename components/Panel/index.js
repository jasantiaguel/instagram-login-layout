import styles from './Panel.module.css'
import Image from 'next/image'
import Button from '@/components/Button' 
import Input from '@/components/Input'


export default function Panel() {
    return (
        <>
        <div className={styles.containerPanel}>
          <div className={styles.container1}>
            <Image src={`/images/instagram-logo-name.png`} alt="instagram logo name" width={177} height={100}/>
            <Input/>
            <Button/>
            <p>OR</p>
            <div className={styles.loginFBContainer}>
                <Image src={`/images/instagram-fb-icon.png`} alt="instagram fb icon" width={20} height={20}/>
                <div className={styles.loginFB}>
                    <a href="#" className={styles.a}>Log in with Facebook</a>
                </div>
            </div>
            <div className={styles.forgorPass}>
                <a href="#" className={styles.a}>Forgot password?</a>
            </div>
          </div>
          <div className={styles.container2}>
            <p>
              Don't have an account? <a href="#" className={styles.a}>Sign up</a>
            </p>
          </div>
          <div className={styles.container3}>
            <p>Get the app.</p>
            <Image src={`/images/instagram-getTheApp.png`} alt="instagram get the app" width={300} height={55}/>
          </div>
        </div>
        </>
    )
}