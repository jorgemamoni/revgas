import { Revgas } from "./types";

declare namespace Revgas {
    type Usuario = {
        id?: number;
        name: string;
        login: string;
        senha: string;
        email: string;
    };
}