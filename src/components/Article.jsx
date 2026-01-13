/**
 * Article Component
 * Displays a single blog article with title, date, and preview text.
 *
 * @param {string} title - The title of the article
 * @param {string} date - The publication date (optional, uses default if not provided)
 * @param {string} preview - A short preview/description of the article
 */
function Article({ title, date, preview }) {
  // Default date if none provided
  // This ensures every article has a valid date displayed
  const blogDate = date || "January 1, 1970";
  
  return (
    <article>
      <h3>{title}</h3>
      <small>{blogDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

