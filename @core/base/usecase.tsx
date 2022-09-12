
export interface UseCase<S> {
  execute(params: S): Promise<any>;
}
