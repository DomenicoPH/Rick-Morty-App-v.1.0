import styles from './About.module.css';
import greenlogo from '../../assets/img/greenlogo.png';
import instagram  from '../../assets/img/ig.svg';

export default function About(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.nombre}>Domenico Pagano (Gnomono)</h1>
            <img className={styles.imagen} src={greenlogo} alt="Domenico Pagano" />
            <p className={styles.bio}>Hola, me llamo Domenico Pagano y soy un ilustrador/diseñador gráfico radicado en Lima, Perú. Algunos de mis trabajos más recientes son los cómics "Tales from the Quarantine", "Sickness or Sorrow", "Data-Trader", "Enet" y "Diamond", así como la novela gráfica "Mario: El universo Vargas Llosa". También he participado en diversos proyectos audiovisuales aportando diseños, storyboards e ilustraciones. Mis intereses aparte del arte y el diseño: Literatura, historia, videojuegos y programación.</p>
            <div className={styles.instagramContainer}>
                <img className={styles.ig} src={instagram} alt="Instagram" />
                <p className={styles.socialMedia}>Instagram</p>
            </div>
        </div>
    )
}