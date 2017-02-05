"use strict";
const express = require("express");
const app = express();
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
const products = [
    new Product(0, "First Product", 12.34),
    new Product(1, "Second Product", 7.89),
    new Product(2, "Third Product", 23.45)
];
class Build {
    constructor(buildnumber, state) {
        this.buildnumber = buildnumber;
        this.state = state;
    }
}
class LatestBuild {
    constructor(provider, orga, repo, builds) {
        this.provider = provider;
        this.orga = orga;
        this.repo = repo;
        this.builds = builds;
    }
}
const builds = [
    new Build(10, "failure"),
    new Build(11, "failure"),
    new Build(12, "success"),
    new Build(13, "running")
];
const latestBuilds = [
    new LatestBuild("ghcom", "orga1", "repo1", builds),
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
    constructor(id, name, connected, connectUrl) {
        this.id = id;
        this.name = name;
        this.connected = connected;
        this.connectUrl = connectUrl;
    }
}
const scmProviders = [
    new ScmProvider("ghcom", "Github.com", true, "#"),
    new ScmProvider("ghe", "Github-Enterprise", false, "#")
];
function getScmProviders() {
    return scmProviders;
}
function getLatestBuilds() {
    return latestBuilds;
}
function getProducts() {
    return products;
}
app.get('/ui/dashboard/latest', (req, res) => res.json(getLatestBuilds()));
app.get('/ui/scmproviders', (req, res) => res.json(getScmProviders()));
app.get('/', (req, res) => res.send('Hello from Express'));
app.get('/products', (req, res) => res.json(getProducts()));
function getProductById(productId) {
    return products.find(p => p.id === productId);
}
app.get('/products/:id', (req, res) => { res.json(getProductById(parseInt(req.params.id))); });
app.get('/reviews', (req, res) => res.send('Got a request for reviews'));
const server = app.listen(8000, "localhost", () => {
    const { address, port } = server.address();
    console.log("Listening on http://localhost:" + port);
});
