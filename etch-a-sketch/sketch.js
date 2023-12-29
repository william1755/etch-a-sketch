let container = document.createElement('div');
document.body.appendChild(container);
container.id = 'daddyDiv'

for (i = 0; i < 16; i++) {
    let divs = document.createElement('div');
    divs.id = 'childDiv'
    container.appendChild(divs);

}


