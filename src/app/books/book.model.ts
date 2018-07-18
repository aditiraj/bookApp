import { Author } from "./author.model";
import { Chapter } from "./chapter.model";

export interface Book{
    title : string;
    author: Author;
    ISBN: number;
    id?: number;
    publisher?: string;
    edition?: string;
    publishingDate?: Date;
    chapters?: Chapter[];
}