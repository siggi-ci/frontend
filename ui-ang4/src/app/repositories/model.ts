// shared models across this 'package'

export class Organization{
  constructor(
    public name: string
  ) {}
}

export class Repository {
  constructor() {}
}

export class RepositoryInfo {
  constructor(
    public name: string,
    public enabled: boolean,
    public provider: string,
    public htmlUrl: string,
    public orga: string,
    public privateRepo: boolean
  ) {}
}

export class CurrentUser {
  constructor(
    public name: string
  ) {}
}
