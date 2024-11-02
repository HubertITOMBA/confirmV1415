"use server"

export default async function PostArticles() {

   const randomNumber = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(
      `https://dummyjson.com/posts?limit=${randomNumber}`,
      {
         // cache: "no-store", // Statiic incremental
          next: {
            revalidate: 5,
          }
      }
    )

    const { posts } = await response.json();
    console.log(posts);

    return (
        <>
            Article disponible : {randomNumber} 
            {posts?.map(post => <div key={post.id}>{post.title}</div>)}
        </>
    )
}
 