
const principal = document.querySelector('.principal > img');
let miniaturas = document.querySelectorAll('.mini-container > img'); 

const imagensPorCor = {
  preto: [
    'img/black/1.png',
    'img/black/2.png',
    'img/black/3.png',
    'img/black/4.png'
  ],
  azul: [
    'img/blue/1.png',
    'img/blue/2.png',
    'img/blue/3.png',
    'img/blue/4.png'
  ],
  branco: [
    'img/white/1.png',
    'img/white/2.png',
    'img/white/3.png',
    'img/white/4.png'
  ]
};

const botoesDeCor = document.querySelectorAll('.cores button');

function anexarListenerMiniaturas() {
  miniaturas = document.querySelectorAll('.mini-container > img');

  for (let i = 0; i < miniaturas.length; i++) {
    const old = miniaturas[i];
    const clone = old.cloneNode(true);
    old.parentNode.replaceChild(clone, old);
  }

  miniaturas = document.querySelectorAll('.mini-container > img');
  for (let i = 0; i < miniaturas.length; i++) {
    miniaturas[i].addEventListener('click', (e) => {
      principal.src = e.target.src;

 
      const all = document.querySelectorAll('.mini-container > img');
      for (let j = 0; j < all.length; j++) {
        all[j].classList.remove('selecionada');
      }
      e.target.classList.add('selecionada');
    });
  }
}


function trocarCor(cor) {
  const imgs = imagensPorCor[cor];
  if (!imgs) return;


  principal.src = imgs[0];

  
  const containers = document.querySelectorAll('.mini-container');

  for (let i = 0; i < containers.length; i++) {
    const imgElem = containers[i].querySelector('img');
    if (imgElem) {

      if (i < imgs.length) {
        imgElem.src = imgs[i];
        imgElem.style.display = ''; 
      } else {
        imgElem.style.display = 'none'; 
      }
     
      imgElem.classList.remove('selecionada');
    }
  }

  const primeiraVisivel = document.querySelector('.mini-container > img[src]:not([style*="display: none"])');
  if (primeiraVisivel) {
    primeiraVisivel.classList.add('selecionada');
  }

  anexarListenerMiniaturas();

  for (let i = 0; i < botoesDeCor.length; i++) {
    botoesDeCor[i].classList.remove('ativa');
  }

  const botaoAtivo = document.querySelector('.cores .' + cor);
  if (botaoAtivo) botaoAtivo.classList.add('ativa');
}

for (let i = 0; i < botoesDeCor.length; i++) {
  botoesDeCor[i].addEventListener('click', (e) => {

    const btn = e.currentTarget;
    let cor = null;
    if (btn.classList.contains('preto')) cor = 'preto';
    if (btn.classList.contains('azul')) cor = 'azul';
    if (btn.classList.contains('branco')) cor = 'branco';

    if (cor) {
      trocarCor(cor);
    }
  });
}

anexarListenerMiniaturas();


trocarCor('preto');
