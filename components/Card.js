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
        .tarjeta {
            width: 360px;
            border-radius: 5px;
            box-shadow: 0px 5px 10px darkgray;
            font-family: sans-serif;
            padding: 15px 20px;
            letter-spacing: 1px;
        }

        .tarjeta__titulo {
            text-align: center;
        }

        .tarjeta__descripcion {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>
    <div class="tarjeta">
        <h1 class="tarjeta__titulo"></h1>
        <p class="tarjeta__descripcion"></p>
        <slot></slot> 
    </div> 
`

class CardComponent extends HTMLElement {

    constructor(){
        console.log('constructor');
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    
    static get observedAttributes() {
        return ['titulo', 'descripcion'];
    }
    
    connectedCallback(){
        console.log('connectedCallback');
        this.elementoTitulo = this.shadowRoot.querySelector('.tarjeta__titulo')
        this.elementoDescripcion = this.shadowRoot.querySelector('.tarjeta__descripcion')
        this.elementoTitulo.innerText = this['titulo']
        this.elementoDescripcion.innerText = this['descripcion']
    }
    
    
    attributeChangedCallback(attrName, oldVal, newVal){
        console.log('attributeChangedCallback');
        this[attrName] = newVal
        if(this.elementoTitulo&&attrName=='titulo'){
            this.elementoTitulo.innerHTML = newVal
        }
        if(this.elementoDescripcion&&attrName=='descripcion'){
            this.elementoDescripcion.innerHTML = newVal
        }
    }   
}

customElements.define('card-component',CardComponent)
