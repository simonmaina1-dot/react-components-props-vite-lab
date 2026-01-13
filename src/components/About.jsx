function About({ image, about }) {
  // Default placeholder image if none provided
  const blogImage = image || "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={blogImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;

