const template = document.createElement('template')

template.innerHTML = `
    <style></style>

`

class PrimerComponente extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    
    connectedCallback(){}
    disconnectedCallback(){}
    

}