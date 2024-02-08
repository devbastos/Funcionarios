export interface Funcionario{
    id? : number;
    nome: string;
    sobrenome: string;
    departamento: string;
    ativo: boolean;
    turno: string;
    dataDeCraicao? : string;
    dataDeAlteraca? : string; 
}