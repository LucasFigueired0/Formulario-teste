import React, { Component, component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import styles from './Formulario.module.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tituloNoticia: '',
            // nota: ''
        }
        this.hadleInputChange = this.hadleInputChange.bind(this)
    }

    hadleInputChange(e) {
        this.setState({
            tituloNoticia: e.target.value
        })
    }

    render() {
        //
        return (
            <form className='container'>
                {/* Título da página */}
                <h2 className={styles.tituloCadastroNoticia}>Cadastramento de notícias</h2>
                {/* Campo de título da notícia */}
                <div className={styles.corpo}>
                    <div className='row'>
                        <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                            <h3 className={styles.tituloNoticia}>Título</h3></div>
                        </div>
                        <div className="col-sm-9 linha1">
                            <div className={styles.coluna2}>
                                <input type="text" className="form-control bg-light" aria-describedby="emailHelp" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.corpo}>
                    {/* Campo de título da notícia */}
                    <div className='row'>
                        <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                            <h3 className={styles.tituloNoticia}>Corpo do texto</h3></div>
                        </div>
                        <div className="col-sm-9 linha1">
                            <div className={styles.coluna2}>
                                <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.corpo}>
                    {/* Escolher arquivo */}
                    <div className='row'>
                        <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                            <h3 className={styles.tituloNoticia}></h3></div>
                        </div>
                        <div className="col-sm-9 linha1">
                            <div className={styles.coluna2}>
                                <div className={styles.arquivoCampo}>
                                    <input type="file" name="pic" accept="image/*" />
                                </div>
                            </div>

                            <div className={styles.botaoSubmit}>
                                <button type="button" className="btn btn-secondary btn-lg">Publicar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </form>
        )
    }
}

export default Form;