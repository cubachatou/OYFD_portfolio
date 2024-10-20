export default class Symbol {
  private x: number;
  private y: number;
  private fontSize: number;
  private canvasHeight: number;
  private characters: string;
  private text: string;

  constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
    this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvasHeight;
  }
  draw(context: CanvasRenderingContext2D) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    return this.y * this.fontSize > this.canvasHeight && Math.random() > 0.975 ? this.y = 0 : this.y++;
  }
}