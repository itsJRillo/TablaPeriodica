function passInfo(elemento){
    var solid = '<svg id="solidState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"/></svg>';
    var liquid = '<svg id="liquidState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.8 237.5c-31.23-5.719-46.84-20.06-47.13-20.31C490.4 205 470.3 205.1 457.7 216.8c-1 .9375-25.14 23-73.73 23s-72.73-22.06-73.38-22.62C298.4 204.9 278.3 205.1 265.7 216.8c-1 .9375-25.14 23-73.73 23S119.3 217.8 118.6 217.2C106.4 204.9 86.35 205 73.74 216.9C73.09 217.4 57.48 231.8 26.24 237.5c-17.38 3.188-28.89 19.84-25.72 37.22c3.188 17.38 19.78 29.09 37.25 25.72C63.1 295.8 82.49 287.1 95.96 279.2c19.5 11.53 51.47 24.68 96.04 24.68c44.55 0 76.49-13.12 96-24.65c19.52 11.53 51.45 24.59 96 24.59c44.58 0 76.55-13.09 96.05-24.62c13.47 7.938 32.86 16.62 58.19 21.25c17.56 3.375 34.06-8.344 37.25-25.72C578.7 257.4 567.2 240.7 549.8 237.5zM549.8 381.7c-31.23-5.719-46.84-20.06-47.13-20.31c-12.22-12.19-32.31-12.12-44.91-.375C456.7 361.9 432.6 384 384 384s-72.73-22.06-73.38-22.62c-12.22-12.25-32.3-12.12-44.89-.375C264.7 361.9 240.6 384 192 384s-72.73-22.06-73.38-22.62c-12.22-12.25-32.28-12.16-44.89-.3438c-.6562 .5938-16.27 14.94-47.5 20.66c-17.38 3.188-28.89 19.84-25.72 37.22C3.713 436.3 20.31 448 37.78 444.6C63.1 440 82.49 431.3 95.96 423.4c19.5 11.53 51.51 24.62 96.08 24.62c44.55 0 76.45-13.06 95.96-24.59C307.5 434.9 339.5 448 384.1 448c44.58 0 76.5-13.09 95.1-24.62c13.47 7.938 32.86 16.62 58.19 21.25C555.8 448 572.3 436.3 575.5 418.9C578.7 401.5 567.2 384.9 549.8 381.7zM37.78 156.4c25.33-4.625 44.72-13.31 58.19-21.25c19.5 11.53 51.47 24.68 96.04 24.68c44.55 0 76.49-13.12 96-24.65c19.52 11.53 51.45 24.59 96 24.59c44.58 0 76.55-13.09 96.05-24.62c13.47 7.938 32.86 16.62 58.19 21.25c17.56 3.375 34.06-8.344 37.25-25.72c3.172-17.38-8.344-34.03-25.72-37.22c-31.23-5.719-46.84-20.06-47.13-20.31c-12.22-12.19-32.31-12.12-44.91-.375c-1 .9375-25.14 23-73.73 23s-72.73-22.06-73.38-22.62c-12.22-12.25-32.3-12.12-44.89-.375c-1 .9375-25.14 23-73.73 23S119.3 73.76 118.6 73.2C106.4 60.95 86.35 61.04 73.74 72.85C73.09 73.45 57.48 87.79 26.24 93.51c-17.38 3.188-28.89 19.84-25.72 37.22C3.713 148.1 20.31 159.8 37.78 156.4z"/></svg>';
    var gas = '<svg id="gasState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1z"/></svg>'

    fetch("periodicTable.json")
    .then(response => response.json())
    .then(data => {
        for(let i=0;i < data.elements.length;i++){
        if(data.elements[i].symbol == elemento){
            atomicMass = data.elements[i].atomic_mass
            catg = data.elements[i].category
            state = data.elements[i].phase
            stateElement = document.getElementById("stateElement");

            if (catg.includes("noble gas")){document.getElementById("elementoSelecc").style.backgroundColor = "#006A36"} 
            else if (catg.includes("nonmetal")){document.getElementById("elementoSelecc").style.backgroundColor = "#F58021"} 
            else if (catg.includes("metalloid")){document.getElementById("elementoSelecc").style.backgroundColor = "#ED1944"} 
            else if (catg.includes("alkali metal")){document.getElementById("elementoSelecc").style.backgroundColor = "#002A4E"} 
            else if(catg.includes("alkaline earth metal")){document.getElementById("elementoSelecc").style.backgroundColor = "#FDBA12"} 
            else if(catg == ("transition metal")){document.getElementById("elementoSelecc").style.backgroundColor = "#0088CE"} 
            else if(catg == ("post-transition metal")){document.getElementById("elementoSelecc").style.backgroundColor = "#781E77"}
            else if(catg == ("halogens")){document.getElementById("elementoSelecc").style.backgroundColor = "#A2B427"}

            if(state == "Solid"){
                stateElement.innerHTML = ''
                stateElement.innerHTML += solid;
            } 
            else if (state == "Liquid"){
                stateElement.innerHTML = ''
                stateElement.innerHTML += liquid;
            } 
            else if (state == "Gas"){ 
                stateElement.innerHTML = ''
                stateElement.innerHTML += gas;
            }

            document.getElementById("numAtom").innerText = data.elements[i].number
            document.getElementById("massAtom").innerText = Math.round((atomicMass + Number.EPSILON) * 100) / 100;
            document.getElementById("nomElement").innerText = data.elements[i].name
            document.getElementById("letters").innerText = data.elements[i].symbol
            document.getElementById("summ").innerText = data.elements[i].summary
        }
    }
    })

    
}