import './styles.css';

export default function Skills() {
    return (
        <div className='skillsIdiomas' id="skills">
            <h2>Skills & Idiomas</h2>

            <div class="divSkillsIdiomas">
                <div class="divSkills">
                    <div style={{ width: '48%' }}>

                        <section>

                            <p>HTML</p>

                            <div class="final__animation-bar-1">
                                <span style={{ width: '80%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>CSS</p>

                            <div class="final__animation-bar-1">
                                <span style={{ width: '80%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>JS</p>

                            <div class="final__animation-bar-1 option2">
                                <span style={{ width: '50%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>React</p>

                            <div class="final__animation-bar-1 option2">
                                <span style={{ width: '50%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>React Native</p>

                            <div class="final__animation-bar-1 option2">
                                <span style={{ width: '50%' }}></span>
                            </div>

                        </section>

                    </div>


                    <div style={{ width: '48%', marginLeft: '4%' }}>

                        <section>

                            <p>PHP</p>

                            <div class="final__animation-bar-1 option3">
                                <span style={{ width: '40%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>Java</p>

                            <div class="final__animation-bar-1 option3">
                                <span style={{ width: '40%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>SQL</p>

                            <div class="final__animation-bar-1 option3">
                                <span style={{ width: '40%' }}></span>
                            </div>

                        </section>

                        <section>

                            <p>TypeScript</p>

                            <div class="final__animation-bar-1 option3">
                                <span style={{ width: '40%' }}></span>
                            </div>

                        </section>

                        <section className='github'>

                            <p>GitHub</p>

                            <div class="final__animation-bar-1 git">
                                <span style={{ width: '20%' }}></span>
                            </div>

                        </section>

                    </div>


                </div>

                <div className='divIdiomas'>
                    <h2> Idiomas </h2>

                    <div className='divIdiomas2'>

                        <div>
                            <p className='lingua'>Português: </p>
                            <p className='lingua'>Inglês:</p>
                            <p className='lingua'>Espanhol:</p>
                        </div>

                        <div className='divClassificacao'>
                            <p className='classLingua'>Avançado </p>
                            <p className='classLingua'>Intermediario</p>
                            <p className='classLingua'>Basico</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}