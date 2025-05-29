import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import client from '../../sanity';
import '../../styles/AlbumDetails.css';

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      const query = `*[_type == "weddingAlbum" && _id == $id][0]{
      _id,
      title,  
        description,
        coupleName,
        photos[] {
          asset->{
          _id,
          url
          }
        }
      }`;
      const data = await client.fetch(query, { id });
      setAlbum(data);
      setLoading(false);
    };
    fetchAlbum();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!album) return <p>Album not found</p>;

  console.log(album); 
  return (
    <div className="album-details-wrapper">
      <div className="album-details-container">
        <h2>{album.coupleName}</h2>
        <p>{album.description}</p>
        <div className="photos-grid">
          {album.photos?.map((photo, idx) => (
            <img key={idx} src={photo.asset.url} alt={`Wedding Photo ${idx + 1}`} className="album-photo" />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AlbumDetails;

