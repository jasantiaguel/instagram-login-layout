import styles from './Input.module.css'

export default function Input() {
    return (
        <>
        <input 
            id="username" 
            placeholder="Phone number, username, or email" 
            type="text"
            className={styles.input}
        />
        <input 
            id="password" 
            placeholder="Password"
            type="password"
            className={styles.input}
        />
        </>
    )
}