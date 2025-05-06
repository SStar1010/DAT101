"use strict";
import TBootstrapComponent from "./bootstrapComponent.js";

class TMainMenu extends TBootstrapComponent{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    render(){
        const template = document.getElementById("main-menu-template");
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
        this.#createMenuManager();
    }

    #createMenuManager(){
        const menuItems = this.shadowRoot.querySelector("a[page-data]")
        for(let i=0; i<menuItems.clientHeight; i++){
            const menuItem = menuItems[i];
            menuItem.addEventListener("click",
            () => {

            }); 
        }
    }
}
customElements.define("main-menu",TMainMenu);