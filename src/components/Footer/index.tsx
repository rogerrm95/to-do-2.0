import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <span>
                Feito com ❤ por
                <a href="https://github.com/rogerrm95/to-do-2.0">Rogerio Marques</a>
            </span>

            <time>2022</time>
        </footer>
    )
}