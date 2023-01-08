const changeMode = document.querySelector('#change-mode')

function toggleDarkMode() {
  document.body.classList.toggle('dark')
}

function loadMode() {
  const darkMode = localStorage.getItem('dark')

  if (darkMode) {
    toggleDarkMode()
  }
}

loadMode()

changeMode.addEventListener('change', function () {
  toggleDarkMode()

  localStorage.removeItem('dark')

  if (document.body.contains('dark')) {
    localStorage.setItem('dark', 1)
  }
})

function colorR() {
  document.documentElement.style.setProperty("--corAtual", 'rgb(255, 0, 0)')
  // document.documentElement.style.setProperty("--corAtualFundo", 'rgba(255, 0, 0, .15)')
  document.getElementById('img').src = "imgs/red.png"
}

function colorL() {
  document.documentElement.style.setProperty("--corAtual", 'rgb(155, 220, 40)')
  document.getElementById('img').src = "imgs/limon.png"
}

function colorLB() {
  document.documentElement.style.setProperty("--corAtual", 'rgb(80, 173, 198)')
  // document.documentElement.style.setProperty("--corAtualFundo", 'rgba(80, 173, 198, .15)')
  document.getElementById('img').src = "imgs/Lightblue.png"
}

function colorB() {
  document.documentElement.style.setProperty("--corAtual", 'rgb(2, 49, 159)')
  // document.documentElement.style.setProperty("--corAtualFundo", 'rgb(2, 49, 159, .2)')
  document.getElementById('img').src = "imgs/blue.png"
}