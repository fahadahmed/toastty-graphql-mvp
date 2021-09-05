import { RESTDataSource } from "apollo-datasource-rest";

class UserDataAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000'
  }
}