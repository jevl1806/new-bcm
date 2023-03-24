export class ValidationError extends Error {
  code: number = 0;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}
