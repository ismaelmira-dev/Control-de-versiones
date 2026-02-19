//validacion de email
function validarEmail(email) {
  // Debe contener un @
  if (!email.includes("@")) {
    return false;
  }
  // Debe contener un punto
  if (!email.includes(".")) {
    return false;
  }
  // El @ no puede estar al inicio
  if (email.indexOf("@") === 0) {
    return false;
  }
  // El punto debe estar después del @
  if (email.lastIndexOf(".") < email.indexOf("@")) {
    return false;
  }
  return true;
}
