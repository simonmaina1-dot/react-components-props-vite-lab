function Article({ title, date, preview }) {
  // Default date if none provided
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

