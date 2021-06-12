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

        ul {
            height: 100px;
            list-style-type: none;
            padding-left: 10px;
            overflow: auto;
        }

    </style>
    <div class="contenedor">
        <input type="text">
        <ul></ul>
    </div>
`

const numeros = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']

class TercerComponente extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        console.log('connectedCallback');
        this.input = this.shadowRoot.querySelector('input')
        this.ul = this.shadowRoot.querySelector('ul')
        this.input.addEventListener('input', (event) => {
            let input_length = this.input.value.length
            let is_number = '0' <= this.input.value[input_length - 1] && this.input.value[input_length - 1] <= '9'
            if (is_number) {
                let ul_length = this.ul.getElementsByTagName('li').length
                if (input_length < ul_length) {
                    this.ul.removeChild(this.ul.lastChild)
                } else {
                    let item = document.createElement('li')
                    item.innerText = numeros[this.input.value[input_length - 1]]
                    this.ul.appendChild(item)
                }
            } else {
                this.input.value = this.input.value.substring(0, this.input.value.length)
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

customElements.define('tercer-componente', TercerComponente)