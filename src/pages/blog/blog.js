import "./blog.css";
import BlogImage from "../../images/blogImage.jpg";

const Blog = () => {
  return (
    <div className="blog-screen-container">
      <h1>Lastest Blog Posts</h1>
      <div className="blogs-container">
        <div className="blog-description">
          <h1>Financial Markets & Corporate Sustainability</h1>

          <p>
            According to a report by the Carbon Disclosure Project (CDP), 100
            companies were responsible for 71% of global greenhouse gas
            emissions in the years between 1988 and 2015...
          </p>

          <p>
            By <span>Paul Rösler & Joshua Sherrard-Bewhay</span>
          </p>

          <span>2021-08-12</span>
        </div>
        <div className="blog-image">
          <img src={BlogImage} alt="thumbnail of green forest trees" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
