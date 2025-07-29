
export type Pessoa = {
    id: string,
    nome: string,
    email: string,
    senha: string,
    tipo: string,
    bairro: string,
    cidade: number
}

export type Lixeira = {
    id: number,
    nome: string,
    situacao: string,
    ip: string,
    latitude: string,
    longitude: string,
    user_id: number,
    porcentagem: number,

} 