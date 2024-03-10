
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Noticias.css';

const WordPressNews: React.FC = () => {
  const [siteData, setSiteData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const apiUrl = 'https://eldia.com.do/wp-json/wp/v2/';

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setSiteData(response.data);
      } catch (error) {
        console.error('Error al obtener datos del sitio WordPress:', error);
      }
    };

    const fetchLatestPosts = async () => {
      try {
        const response = await axios.get(`${apiUrl}posts?_embed&per_page=3`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error al obtener las últimas noticias:', error);
      }
    };

    fetchSiteData();
    fetchLatestPosts();
  }, [apiUrl]);

  return (
    <div>
      {siteData && (
        <div>
          <h3>Sitio WordPress: {siteData.name}</h3>
          {siteData.icon && <img src={siteData.icon} alt="Logo del sitio" />}
        </div>
      )}

      {posts.length > 0 && (
        <div>
          <h3>Últimas Noticias</h3>
          {posts.map((post) => (
            <div key={post.id}>
              <h4>{post.title.rendered}</h4>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <a href={post.link} target="_blank" rel="noopener noreferrer">Visitar Noticia</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordPressNews;
