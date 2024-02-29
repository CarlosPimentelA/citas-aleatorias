const boton = document.getElementById('cambiar-cita');
const cita = document.getElementById('cita-texto');
const autor = document.getElementById('cita-autor');

boton.addEventListener('click', () => {
    randomCita();
})

function randomCita() {
    let indice = 0;
    for(let i = 0; i <= 10; i++) {
        indice = Math.floor(Math.random() * 10);
    }
    let autorElegido = citas[indice].autor;
    let citaElegida = citas[indice].texto;

    autor.textContent = autorElegido;
    cita.textContent = citaElegida;
}


let citas = [
    {
      'autor': 'Albert Einstein',
      'texto': 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
    },
    {
      'autor': 'Anónimo',
      'texto': 'Semanas de programación te pueden ahorrar horas de planeación.'
    },
    {
      'autor': 'Alan Kay',
      'texto': 'La mejor forma de predecir el futuro es inventarlo.'
    },
    {
      'autor': 'Amelia Earhart',
      'texto': 'Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.'
    },
    {
      'autor': 'Aristotle',
      'texto': 'La calidad no es un acto, es un hábito.'
    },
    {
      'autor': 'Benjamin Franklin',
      'texto': 'Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.'
    },
    {
      'autor': 'Charles R. Swindoll',
      'texto': 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.'
    },
    {
      'autor': 'Jane Goodall',
      'texto': 'Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.'
    },
    {
      'autor': 'John Muir',
      'texto': 'El poder de la imaginación nos hace infinitos.'
    },
    {
      'autor': 'Mark Twain',
      'texto': 'Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.'
    }
  ];