import * as express from "express";

const app = express();

class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number){}
}

const products = [
  new Product(0, "First Product", 12.34),
  new Product(1, "Second Product", 7.89),
  new Product(2, "Third Product", 23.45)
];

class Build {
  constructor(
    public buildnumber: number,
    public state: string){}
}

class LatestBuild {
  constructor(
    public provider: string,
    public orga: string,
    public repo: string,
    public builds: Build[]){}
}

const builds = [
  new Build(10, "failure"),
  new Build(11, "failure"),
  new Build(12, "success"),
  new Build(13, "running")
];

const latestBuilds = [
  new LatestBuild("ghcom","orga1", "repo1", builds),
  new LatestBuild("ghe", "orga3", "repo4", builds),
  new LatestBuild("ghe", "orga35", "repo124", builds),
  new LatestBuild("ghe", "orga35", "repo232", builds),
  new LatestBuild("bbucket", "orga12", "repo87", builds),
  new LatestBuild("glabcom", "orga67", "repo765", builds),
  new LatestBuild("glabent", "orga95", "repo45", builds),
  new LatestBuild("bbucket", "orga99", "repo64", builds),
  new LatestBuild("ghcom", "orga156", "repo47", builds)
];

class ScmProvider {
  constructor(
    public id: string,
    public name: string,
    public connected: boolean,
    public connectUrl: string){}
}

const scmProviders = [
  new ScmProvider("ghcom", "Github.com", true, "#"),
  new ScmProvider("ghe", "Github-Enterprise", false, "#")
];

function getScmProviders(): ScmProvider[] {
  return scmProviders;
}

function getLatestBuilds(): LatestBuild[] {
  return latestBuilds;
}

function getProducts(): Product[] {
  return products;
}

app.get('/ui/dashboard/latest', (req,res) => res.json(getLatestBuilds()));

app.get('/ui/scmproviders', (req,res) => res.json(getScmProviders()));

app.get('/', (req,res) => res.send('Hello from Express'));

app.get('/products', (req,res) => res.json(getProducts()));

function getProductById(productId: number): Product {
  return products.find( p => p.id === productId );
}

app.get('/products/:id', (req,res) => {res.json(getProductById(parseInt(req.params.id)))});

app.get('/reviews', (req,res) => res.send('Got a request for reviews'));

const server = app.listen(8000, "localhost", () => {
  const {address, port} = server.address();
  console.log("Listening on http://localhost:" + port);
});
