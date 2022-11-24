import React, { Component, component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

class Forms2 extends Component {
    state = {
        name: '',
        idade: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {name} = this.state
        let {idade} = this.state

        name = name
        idade = idade

        console.log('Funcionou = ',name)
        console.log('Idade = ',idade)
    }

    hadleInputChange = (e) => {
        this.setState({
            name: e.target.value,
            idade: e.target.value
        })
    }

    render() {
        const { name } = this.state
        const {idade} = this.state
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:
                        <input onChange={this.hadleInputChange} type='text' placeholder='Nome' />
                    </label>
                    <br/>
                    <label>
                        Idade:
                        <input onChange={this.hadleInputChange} type='text' placeholder='Idade' />
                    </label>
                    <br/>
                    
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
                <h3>{name}</h3>
            </section>
        )
    }
}

export default Forms2;