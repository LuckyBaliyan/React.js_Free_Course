

function customeRender(reactElement,containr){
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.porps.href);
    domElement.setAttribute('target',reactElement.porps.target);

    containr.appendChild(domElement);*/

    //The above code is not modular and good 

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.porps){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.porps[prop]);
    }

    containr.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    porps:{
        href:"https://go0gle.com",
        target:'_blank',
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector("#root");

customeRender(reactElement,mainContainer);
