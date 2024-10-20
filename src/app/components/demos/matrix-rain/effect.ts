import Symbol from './symbol';

export default class Effect {
  private canvasWidth: number;
  private canvasHeight: number;
  private columns: number;
  public symbols: Symbol[];
  public fontSize: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 18;
    this.columns = canvasWidth / this.fontSize;
    this.symbols = [];
    this.init();
  }

  private init() {
    for (let i = 0; i < this.columns; i++) {
      // const randomY = Math.floor(Math.random() * this.canvasHeight / this.fontSize);
      this.symbols[i] = new Symbol(i, this.canvasHeight, this.fontSize, this.canvasHeight);
    }
  }

  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.init();
  }
}