/*Interface que 
será definido o que vai ser transferido do front end do aplicativo para o back end (API) */

export interface UsuarioCadastrarDto {
    nome: string;
    email: string;
    senha: string;
}