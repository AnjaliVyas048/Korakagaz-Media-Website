import client from '../sanity';

export async function getWeddingAlbums() {
  const query = `*[_type == "weddingAlbum"]{
    _id,
    title,
    description,
    coupleName,
    photos[]{
      asset->{
        _id,
        url
      }
    }
  }`;

  return await client.fetch(query);
}
