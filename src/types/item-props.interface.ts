import { IPost } from "./post.interface";

export interface IProps{
    item: IPost 
    change: (post: IPost, e: React.ChangeEvent<HTMLInputElement>) => void 
    deletting: (post: IPost) => void
}