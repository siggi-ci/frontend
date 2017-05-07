export class ScmProvider {
  constructor(
    public id: string,
    public name: string,
    public connected: boolean,
    public connectUrl: string
  ) {}
}
