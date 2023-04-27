export class departement{
    idDepart!: number
    nomDepart!: string
    typeDep!: TypeDep
}
export enum TypeDep {
    Informatique, Chimie, Mathematique, Biologie, Economie
  }