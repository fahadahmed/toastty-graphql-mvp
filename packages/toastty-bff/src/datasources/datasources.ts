import blogDataSource, { BlogDataSource } from "./BlogDataSource";

export type DataSources = BlogDataSource;

const datasources = (): DataSources => ({
  ...blogDataSource()
});

export default datasources;