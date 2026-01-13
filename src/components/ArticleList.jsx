
import Article from "./Article";

/*
 ArticleList Component
 Renders a list of blog articles by mapping through an array of post data.
 Each post is rendered as an individual Article component.
  @param {Array} posts - Array of post objects containing title, date, preview, and id
 */
function ArticleList({ posts }) {
  return (
    <main>
      {/* Map through posts array and render an Article component for each post */}
      {/* Using post.id as the unique key for React's reconciliation algorithm */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;

