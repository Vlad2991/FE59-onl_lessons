export const PostDetaild = ({ post, setCurrentPost }) => {
  console.log(post);
  return (
    <div className="">
      <button onClick={() => setCurrentPost(null)}>Go back</button>
      <h1>Detail Post Info</h1>
    </div>
  );
};
