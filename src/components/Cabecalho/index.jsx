import styles from './header.module.css';

const Header = ({ cabecalho }) => {

    return (
        <header className={styles.header}>
        <img className={styles.imagem } src="https://ichef.bbci.co.uk/news/800/cpsprodpb/15E02/production/_104620698_prmo_imc_br-nc.png"/>
        <h1 className={styles.text} >Calcular IMC</h1>
        </header>
    )
}

export default Header;