const template = document.createElement('template')

template.innerHTML = `
    <style>
        * {
            box-sizing:border-box;
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background-color: whitesmoke;
        }

        .contenedor {
            width: 100%;
            height: 105px;
            border-radius: 5px;
            box-shadow: 0px 0px 15px darkgray;    
            padding: 15px 10px;
        }

        input {
            border-radius: 5px;
            width: 100%;
            padding: 5px;
            border: 1px solid darkgray;
            font-size: large;
            outline: none;
        }

        p {
            font-size: large;
            margin-top: 10px;
            overflow: auto;
        }
    </style>
    <div class="contenedor">
        <input type="text" placeholder="Ingrese...">
        <p></p>
    </div>
`

class PrimerComponente extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        console.log('connectedCallback');
        this.input = this.shadowRoot.querySelector('input')
        this.p = this.shadowRoot.querySelector('p')
        this.input.addEventListener('input', (event) => {
            let input_length = this.input.value.length
            if (this.input.value.length < this.p.innerText.length) {
                this.p.innerText = this.p.innerText.slice(0, input_length)
            } else {
                this.p.innerText += this.input.value[input_length - 1]
                this.input.value = '*'.repeat(input_length)
            }
        })
    }
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('attributeChangedCallback');
    }
}

customElements.define('primer-componente', PrimerComponente)