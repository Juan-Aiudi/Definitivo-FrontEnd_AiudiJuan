export class NuevoUsuario{
    nombre!: string; /* con el signo de !, le digo que ignore los errores que me marca */
    nombreUsuario!: string;
    email!: string;
    password!: string;
    authorities!: string[];
}