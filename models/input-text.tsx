export enum ErrorType {
  NONE,
  EMPTY,
  FORMAT,
  SERVER,
}

export interface TextField<T> {
  value?: T;
  errorType?: ErrorType;
  obscure?: boolean;
}
