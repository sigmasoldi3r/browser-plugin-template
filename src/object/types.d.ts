export type Result<T = any, E = any> = Ok<T> | Err<E>;

export type Err<T = any> = {
  isOk: false;
  isErr: true;
  error: T;
  unwrap(): never;
};

export type Ok<T = any> = {
  isOk: true;
  isErr: false;
  value: T;
  unwrap(): T;
};
