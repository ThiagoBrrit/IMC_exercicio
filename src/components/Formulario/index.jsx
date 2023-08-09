import { useState } from "react"

import styles from './formulario.module.css'



const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        setNome( nomeanterior => {
            return evento.target.value
        })
    }

    const resultadoIMC = () => {
        const imc = peso / (altura * altura);

        if (imc > 2) {
            return (
                <>
                    <p>Olá {nome}, seu IMC é {imc}</p>
                    <table className={styles.table}>
                        <tr>
                            <td>IMC</td>
                            <td>Classificação</td>
                            <td>Obesidade <small><b>*grau</b></small></td>
                        </tr>
                        <tr>
                            <td>Menor que 18,5</td>
                            <td>Magreza</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Entre 18,6 e 24,9</td>
                            <td>Normal</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Entre 25,0 e 29,9</td>
                            <td>Sobrepeso</td>
                            <td>I</td>
                        </tr>
                        <tr>
                            <td>Entre 30,0 e 39,9</td>
                            <td>Obesidade</td>
                            <td>II</td>
                        </tr>
                    </table>
                </>
            )
        } else {
            return (
                <p>Descubra seu IMC</p>
            )
        }
    }

    return (
        <div className="container">
            <form className={styles.formulario}>
                <input className={styles.inputs} type="text" placeholder="Seu nome" onChange={alteraNome} />
                <input className={styles.inputs} type="number" placeholder="Seu peso em KG" onChange={evento => setPeso(parseInt(evento.target.value))}/>
                <input className={styles.inputs} type="number" placeholder="Sua altura (EX: 1,70)" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            </form>
            <h2 className={styles.textIMC}>{resultadoIMC()}</h2>
        </div>
    )
}

export default Formulario;