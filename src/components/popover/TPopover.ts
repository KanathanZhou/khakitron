export interface TPopoverStyle {
  left?: string;
  top?: string;
}

export class TPopoverModel {
  positionX: number;
  positionY: number;

  constructor(positionX: number, positionY: number) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  public setPosition(x: number, y: number): void {
    this.positionX = x;
    this.positionY = y;
  }
}
