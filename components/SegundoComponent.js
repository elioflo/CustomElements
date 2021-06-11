const template = document.createElement('template')

template.innerHTML = `
    <style></style>

`

class SegundoComponente extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    
    connectedCallback(){}
    disconnectedCallback(){}
    onChangeCallback(){}
}

customElements.define('tercer-componente',SegundoComponente)