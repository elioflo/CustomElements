const template = document.createElement('template')

template.innerHTML = `
    <style>
        .card {
            width: 360px;
            height: 500px;
            border-radius: 5px;
            box-shadow: 0px 5px 10px darkgray;
            font-family: sans-serif;
            padding: 5px 15px;
            letter-spacing: 1px;
        }

        .card__title {
            text-align: center;
        }

        .card__description {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>
    
    <div class="card">
        <h1 class="card__title"></h1>
        <p class="card__description"></p>
    </div> 
`

class CardComponente extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    
    connectedCallback(){}
    disconnectedCallback(){}
    onChangeCallback(){}
}

customElements.define('card-componente',CardComponente)