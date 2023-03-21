const main = document.querySelector('main')
main.remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'Njalale is the champion'
document.body.append(newHeader);

//This one is another method I googled
//newHeader.setAttribute('id', 'victory');
//const hText = document.createTextNode('Njalale is the champion');
//newHeader.appendChild(hText);