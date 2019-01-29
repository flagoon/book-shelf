export interface IBook {
    id: string;
    index: number;
    picture: string;
    pages: number;
    cover: ICover;
    isbn: string;
    author: string;
    date: string;
    title: string;
    description: string;
}

type ICover = ['hard', 'soft'];
