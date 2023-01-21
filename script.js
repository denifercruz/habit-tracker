const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia de hoje já incluído: 🚨')
    return
  }

  alert('Adicionado com sucessso: ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('habits@Setup', JSON.stringify(nlwSetup.data)) //save the data in my browser
}

const data = JSON.parse(localStorage.getItem('habits@Setup')) || {} //change from text to object

nlwSetup.setData(data)
nlwSetup.load()
