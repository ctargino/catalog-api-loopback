import datasource from './esv7.datasource.config.json'

export default {
  ...datasource,
  connector: "esv6",
  index: "catalog",
  apiVersion: "7",
  //"defaultSize": "",
  configuration: {
    node: "http://elasticsearch:9200",
    requestTimeout: 30000,
    pingTimeout: 3000,
  },
  mappingProperties: {}
}
