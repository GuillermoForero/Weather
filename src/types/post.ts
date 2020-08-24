export interface post {
    id: string,
    srcUserImage: string,
    additionalData: string
    titlePost: string,
    descriptionPost: string,
    comments: number,
    retweets: number,
    likes: number,
    srcImageCard: string,
    titleCard: string,
    descriptionCard: string,
    urlCard: string
}
export interface posts {
    posts: post[]
}
