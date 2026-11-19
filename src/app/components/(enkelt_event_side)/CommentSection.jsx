const CommentSection = ({comments = []}) => {
  return (
    <div>
      <h1>
        Comments <span></span>
      </h1>
      <div className="">
        {comments.map((comment) => (
          <article key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
