const inputText = document.getElementById('input_text')
const inputText2 = document.getElementById('input_text2')
const outputText = document.getElementById('output_text')
const outputText2 = document.getElementById('output_text2')
const buttonDecode = document.getElementById('decode')
const buttonEncode = document.getElementById('encode')
const offset = document.getElementById('offset')
const offset2 = document.getElementById('offset2')


buttonEncode.addEventListener('click', () => {
  const encodeValue = window.cipher.encode(
    offset.value, inputText.value
  )

  outputText.value = encodeValue
})
// Crear la función que cuando se de click en el boton, se descifre el mensaje de la caja 1

buttonDecode.addEventListener('click', () => {
  const decodeValue = window.cipher.decode(
      offset2.value,inputText2.value
  )

  outputText2.value = decodeValue
})

const sideNavMenu =
  (function () {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav')
      var instances = M.Sidenav.init(elems, {
        direction: 'left'
      })
    })
  })()
