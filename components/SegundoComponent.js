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
            margin-top: 20px;
        }

    </style>
    <div class="contenedor">
        <input type="text" placeholder="Ingrese...">
    </div>
`

class SegundoComponente extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    static get observedAttributes() {
        return ['longitud-maxima'];
    }
    

    connectedCallback() {
        console.log('connectedCallback');
        this.input = this.shadowRoot.querySelector('input')
        this['longitud-maxima'] = this['longitud-maxima']?this['longitud-maxima']:10;
        this.input.addEventListener('input',(event)=>{
            if (this.input.value.length>this['longitud-maxima']) {
                this.input.value = this.input.value.substring(0,this['longitud-maxima'])
            }
        })
    }
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('attributeChangedCallback');
        this[attrName] = newVal
     }
}

customElements.define('segundo-componente', SegundoComponente)