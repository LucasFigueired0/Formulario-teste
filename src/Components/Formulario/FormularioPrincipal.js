import React, { Component, component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import styles from './Formulario.module.css'

class Formulario extends Component{
    state = {
        tituloNoticia: '',
        corpoDaNoticia: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {tituloNoticia} = this.state
        let {corpoDaNoticia} = this.state

        tituloNoticia = tituloNoticia
        corpoDaNoticia = corpoDaNoticia

        console.log('Funcionou Titulo= ',tituloNoticia)
        console.log('Funcionou Corpo= ',corpoDaNoticia)
    }
    
    
    handleInputChange = (e) =>{
        this.setState({
            tituloNoticia: e.target.value,
            corpoDaNoticia: e.target.value
        })
    }

    render() {
        const {tituloNoticia} = this.state
        const {corpoDaNoticia} = this.state
        return (
            <form onSubmit={this.handleSubmit} className='container'>
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
                                <input name="tituloNoticia" onChange={this.handleInputChange} type="text" className="form-control bg-light" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.corpo}>
                    {/* Campo de corpo da notícia */}
                    <div className='row'>
                        <div className="col-sm-2 linha2"><div className={styles.coluna1}>
                            <h3 className={styles.tituloNoticia}>Corpo do texto</h3></div>
                        </div>
                        <div className="col-sm-9 linha1">
                            <div className={styles.coluna2}>
                                <textarea name="corpoDaNoticia" onChange={this.handleInputChange} className="form-control bg-light" id="exampleFormControlTextarea1" rows="10"/>
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
                                    <input type="file" accept="image/*" />
                                </div>
                            </div>

                            <div className={styles.botaoSubmit}>
                                <button type="submit" className="btn btn-secondary btn-lg">Publicar</button>
                            </div>
                        </div>
                    </div>                   
                </div>
            </form>
             
        )
    }
}

export default Formulario;