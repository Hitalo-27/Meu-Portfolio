import './styles.css';

export default function Sobre() {
    return (
        <div className="conteinerInfo" id='sobre'>
            <div className="sobreMim">
                <h2 className='title'>SOBRE MIM</h2>
                <p className='text'>Possuo conhecimento em Front-End (HTML, CSS, JavaScript, PHP e React), Back-end (SQL
                    Server, MySQL e Node JS), também na criação e manutenção de aplicativos mobile (Java, Kotlin
                    e React Native).</p>
            </div>
            <div className="infoPessoal">
                <h2 className='title'>Informações Pessoais</h2>
                <div className="infoPessoalDiv">
                    <div>
                        <ul>
                            <li>
                                <span className='spanClassificacao'> Nascimento: </span>
                                <span className='spanDados'> 21 janeiro 2004</span>
                            </li>

                            <li>
                                <span className='spanClassificacao'> Estado Civil: </span>
                                <span className='spanDados'> Solteiro</span>
                            </li>
                        </ul>
                    </div>

                    <div className='infoPessoalDivDireita'>
                        <ul>
                            <li>
                                <span className='spanClassificacao'> Nacionalidade: </span>
                                <span className='spanDados'> Brasileiro</span>
                            </li>

                            <li>
                                <span className='spanClassificacao'> Email: </span>
                                <span className='spanDados'> hytalosantos26@gmail.com</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}