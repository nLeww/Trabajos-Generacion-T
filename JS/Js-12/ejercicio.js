const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];
  
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  
  const randomWordElement = document.getElementById('randomWord');
  const timeSpanElement = document.getElementById('timeSpan');
  const scoreElement = document.getElementById('score');
  const inputElement = document.getElementById('text');
  
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordElement.textContent = palabraAleatoria;
  }
  
  inputElement.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
      time += 3;
      inputElement.value = '';
      addToDOM();
      updateScore();
    }
  });
  
  function actualizarTiempo() {
    const timer = setInterval(() => {
      time--;
      timeSpanElement.textContent = `${time}s`;
      if (time <= 0) {
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }
  
  function updateScore() {
    score++;
    scoreElement.textContent = score;
  }
  
  function gameOver() {
    const endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
      <h2>¡Tiempo Finalizado!</h2>
      <p>Puntaje final: ${score}</p>
    `;
    document.querySelector('.main').style.display = 'none';
  }
  
  addToDOM();
  actualizarTiempo();
  