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
            width: 325px;
            height: 120px;
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
    </style>
    <div class="contenedor">
        <input type="text">
        <ul></ul>
    </div>
`

const numeros = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve']

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
        this.input.addEventListener('input',(event)=>{
            let input_length = this.input.value.length
            let ul_length = this.ul.getElementsByTagName('li').length
            if(input_length < ul_length){
                this.ul.removeChild(this.ul.lastChild)
            }else{
                let item = document.createElement('li')
                item.innerText = numeros[this.input.value[input_length-1]]
                this.ul.appendChild(item)
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