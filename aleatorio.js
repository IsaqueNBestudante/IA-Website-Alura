const nomes = ["Fernando", "Mateus", "Mario", "MCqueen", "Joãozinho da Loja", "Tio Zé", "Frederico"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)