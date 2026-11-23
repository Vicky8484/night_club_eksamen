const CommentSection = ({comments = []}) => {
  return (
    <section className="pt-5 pb-(--big-block-space)">
      <div
        className="mx-auto mb-6 h-1 w-full md:w-full rounded-full bg-linear-to-r from-transparent via-(--accent1) to-transparent"
        aria-hidden="true"
      ></div>
      <h1 className="text-3xl">
        <span className="text-(--accent1)">{comments.length}</span>
        {comments.length > 1 || comments.length === 0 ? "Comments" : "Comment"}
      </h1>
      <div className="flex flex-col gap-4 pt-4">
        {comments.map((comment) => {
          const dateObj = new Date(comment.date);

          const formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          return (
            <article
              key={comment.id}
              className="bg-(--subtle)/75 p-4 rounded-md"
            >
              <p className="font-bold flex gap-3 text-xl items-center pb-2">
                {comment.name} -
                <span className="text-md font-medium text-(--accent1)">
                  Posted {formattedDate}
                </span>
              </p>
              <p>{comment.content}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CommentSection;
