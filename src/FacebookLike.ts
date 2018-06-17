enum ButtonState{ON,OFF};
export class LikeButton {
  private _likeCount: number;
  private _buttonState: ButtonState;

  constructor(initialLikeCount:number){
    this._likeCount = initialLikeCount;
    this._buttonState=ButtonState.ON;
  }
  public like(){
    this._likeCount++;
    this._buttonState = ButtonState.OFF;
  }
  public unlike(){
    this._likeCount--;
    this._buttonState=ButtonState.ON;
  }
  get LikeCount(){
    return this._likeCount;
  }

  get ButtonState(){
    return this._buttonState;
  }
}
