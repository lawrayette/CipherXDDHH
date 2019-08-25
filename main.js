window.cipher = {
    encode: (offset, texto) => {
      let textoCipher = ''
      let i = 0
  
      for (i = 0; i < texto.length; i++) {
        let espacios = texto.charCodeAt(i)
        // espacios
        if (espacios === 32) {
          textoCipher += texto[i]
        } else if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
          let formula = (espacios - 65 + parseInt(offset)) % 26 + 65
          let letras = String.fromCharCode(formula)
          textoCipher += letras
        }
        // para minúsculas
        else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
          let formula = (espacios - 97 + parseInt(offset)) % 26 + 97
          let letras = String.fromCharCode(formula)
          textoCipher += letras
        } else {
          textoCipher += texto[i]
        }
      }
  
      return textoCipher
    },
  
    decode: (offset, texto) => {
      let textoCipher = ''
      let i = 0
  
      for (i = 0; i < texto.length; i++) {
        let espacios = texto.charCodeAt(i)
  
        if (espacios === 32) {
          textoCipher += texto[i]
        } else if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
          let formula = (espacios + 65 - parseInt(offset)) % 26 + 65
          let letras = String.fromCharCode(formula)
          textoCipher += letras
        } else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
          let formula = (espacios - 122 - parseInt(offset)) % 26 + 122
          let letras = String.fromCharCode(formula)
          textoCipher += letras
        } else {
          textoCipher += texto[i]
        }
      }
      return textoCipher
    }
  }
  