
import React, {useEffect,useState  } from "react";

function PostList() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState([true]);
  const [error,setError]=useState([null]);

  useEffect(()=>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((response)=>{
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data)=>{
      setPosts(data);
      setLoading(false);
    })
    .catch((error)=>{
      setError(error.message);
      setLoading(false);
    })
  },[])

  if(loading) return <p>Cargando...</p>
  if(loading) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Lista de publicaciones</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}><img src={post.url}></img></li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
