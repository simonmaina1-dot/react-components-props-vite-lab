/*
 * About Component
 * Displays an aside section with a blog image and description.
 *
 * @param {string} image - URL of the blog image 
 * @param {string} about - Text description about the blog
 */
function About({ image, about }) {
  // Default placeholder image if none provided
  // This ensures the component always has a valid image to display
  const blogImage = image || "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={blogImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;

