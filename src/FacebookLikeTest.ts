import {LikeButton} from './FacebookLike';

let likeButton = new LikeButton(200);
likeButton.like();
console.log('Like Count is ' + likeButton.LikeCount + ' Button state is ' + likeButton.ButtonState.toString());
likeButton.unlike();

console.log('Like Count is ${likeButton.likeCount}');
