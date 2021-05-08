// se a variavel de ambiente nao tiver preenchida ele ignora e a base
// assume o localhost como url padrao
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
