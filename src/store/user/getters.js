export function errorMessage(state) {
  if (state.errorCode === 106 || state.errorCode === 108) {
    return "Tu email o contraseña son incorrectos. Revísalos y vuelve a intentar. ";
  }
  return null;
}
