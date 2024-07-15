export interface IObjectStringList {
    [key: string]: string[];
}
export interface IBaseActionType {
    type: string;
}

export interface IPost {
    id: number
    image: string
    text: string
    date: number
    lesson_num?: number
    title: string
    author?: number
    likes: number
    dislikes: number
}