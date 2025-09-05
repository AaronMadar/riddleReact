export function isTokenValid(token:any) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // on décode la 2ème partie du JWT
    const now = Date.now() / 1000; // en secondes
    return payload.exp > now; // true si la date d'expiration est dans le futur
  } catch {
    return false; // si le token est cassé ou invalide
  }
}
