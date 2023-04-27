export class Equipe{ 
    idEquipe:number ;  
    role: string; 
    img: string;
    niveau: Niveau; 
    nomEquipe: string;
    salle :number; 
    thematique:string;
    }
    enum Niveau{
        JUNIOR,
        SENIOR,
        EXPERT
    }