"use strict";

export default class TBootstrapComponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallBack(){
        this.injectBootstrap();
        this.render();
    }
    injectBootstrap(){
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "StyleSheet");
        linkElement.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css")
        this.shadowRoot.appendChild(linkElement);
    }
}