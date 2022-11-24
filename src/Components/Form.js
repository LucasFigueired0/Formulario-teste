import React, { Component, component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            // nota: ''
        }
        this.hadleInputChange = this.hadleInputChange.bind(this)
    }

    hadleInputChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const {name} = this.state
        return (
            <section>
                <form>
                    <label>
                        Nome:
                        <input onChange={this.hadleInputChange} type='text' placeholder='Nome' />
                    </label>
                    {/* <label>
                        nota:
                        <input type='text' placeholder='Nota' />
                    </label> */}
                    <button type='submit'>Enviar</button>
                </form>
                <h3>{name}</h3>
            </section>
        )
    }
}

export default Form;