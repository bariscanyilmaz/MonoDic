export interface WordViewModel{
    word:string;
    results:{
     definition:string;
     partOfSpeech: string,
     synonyms?:string[];
     antonyms?:string[];
     typeOf:string[];
     examples:string[];
    }[]
}