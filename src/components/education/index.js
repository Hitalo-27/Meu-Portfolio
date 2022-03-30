import './styles.css';

export default function Education() {
    return (
        <div className='divEducation' id="education">
            <h2 className='h2Educacao'>EDUCAÇÃO</h2>

            <div className='formacao'>
                <div className='etec'>
                    <div className='detailsEtec'>
                        <h3>ETEC de Guaianazes</h3>
                        <p>Desenvolvimento de Sistemas</p>
                        <p>2019-2021</p>
                    </div>
                </div>

                <div className='etec'>
                    <div className='detailsEtec'>
                        <h3>UNIP - Tatuapé</h3>
                        <p>Ciências da Computação</p>
                        <p>2022-2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}