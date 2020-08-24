import {INCREMENT, DECREMENT, RESET} from '../types/socialCardTypes'
import {posts} from "../types/post";



const INITIAL_STATE: posts = {
    posts: [{id: '1', srcUserImage: 'https://pbs.twimg.com/profile_images/1253165670935773185/SkSoEQL3_400x400.jpg', additionalData: '@pepe / 10 de agosto', titlePost: 'title1', descriptionPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, consectetur explicabo fugiat iste nemo', comments: 2, retweets: 55, likes: 100, srcImageCard: 'https://images4.alphacoders.com/165/165198.jpg', titleCard: 'titleCard1', descriptionCard: 'descriptionCard', urlCard: 'https://www.twitch.tv/'}, {id: '2', srcUserImage: 'https://pbs.twimg.com/profile_images/1253165670935773185/SkSoEQL3_400x400.jpg', additionalData: '@pepe / 10 de agosto' , titlePost: 'title2', descriptionPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, consectetur explicabo fugiat iste nemo', comments: 2, retweets: 55, likes: 100, srcImageCard: 'https://randomc.net/image/Tokyo%20Ghoul/Tokyo%20Ghoul%20re%20-%2012%20-%20Large%2003.jpg', titleCard: 'titleCard2', descriptionCard: 'descriptionCard', urlCard: 'https://www.twitch.tv/'}, {id: '3', additionalData: '@pepe / 10 de agosto', srcUserImage: 'https://pbs.twimg.com/profile_images/1253165670935773185/SkSoEQL3_400x400.jpg', titlePost: 'title3', descriptionPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, consectetur explicabo fugiat iste nemo ', comments: 2, retweets: 55, likes: 100, srcImageCard: 'https://avatarfiles.alphacoders.com/159/159953.jpg', titleCard: 'titleCard3', descriptionCard: 'descriptionCard', urlCard: 'https://www.twitch.tv/'}],
}
;

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}
