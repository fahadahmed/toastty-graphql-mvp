### This file was generated by Nexus Schema
### Do not make changes to this file directly


type Article {
  content: String
  id: String
  title: String
}

type Query {
  Blog: [Article]
}
