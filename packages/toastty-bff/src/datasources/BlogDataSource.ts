import BlogAPI from './blog/blog-api';

export type BlogDataSource = {
  blogAPI: BlogAPI;
}

const blogDataSource = (): BlogDataSource => ({
  blogAPI: new BlogAPI(),
});

export default blogDataSource;