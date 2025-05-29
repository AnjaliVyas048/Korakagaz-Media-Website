// BlogPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'
import client from '../../sanity';
import '../../styles/Blogs.css';

const BlogPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const query = `*[_type == "weddingAlbum"]{
        _id,
        coupleName,
        description,
        coverPhoto {
          asset->{url}
        }
      }`;
      const data = await client.fetch(query);
      setAlbums(data);
    };
    fetchAlbums();
  }, []);

  return (
    <div className="blog-wrapper">
  <div className="blog-container">
    {albums.map((album) => (
      <div className="album-section" key={album._id}>
        {album.coverPhoto?.asset?.url && (
          <Link to={`/blogs/${album._id}`} className="cover-link">
            <img
              src={album.coverPhoto.asset.url}
              alt="Wedding Cover"
              className="cover-photo"
            />
          </Link>
        )}
        <div className="album-info">
          <Link to={`/blogs/${album._id}`} className="couple-name">
            {album.coupleName}
          </Link>
          <p className="description">{album.description}</p>
        </div>
      </div>
    ))}
  </div>
  <Footer/>
</div>

  );
};

export default BlogPage;