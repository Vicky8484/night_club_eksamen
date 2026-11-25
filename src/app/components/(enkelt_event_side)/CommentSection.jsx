"use client";

import {useEffect, useState} from "react";
import {deleteComment} from "@/app/actions/actions";
import {FaTrash} from "react-icons/fa";

const CommentSection = ({comments = [], eventId}) => {
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    setOwnerId(localStorage.getItem("comment-owner") ?? "");
  }, []);

  return (
    <section className="pt-5 pb-(--big-block-space)">
      <div
        className="mx-auto mb-6 h-1 w-full md:w-full rounded-full bg-linear-to-r from-transparent via-(--accent1) to-transparent"
        aria-hidden="true"
      ></div>
      <h1 className="text-3xl">
        <span className="text-(--accent1)">{comments.length}</span>{" "}
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
              className="bg-(--subtle)/75 p-4 rounded-md flex flex-col md:flex-row gap-4 justify-between items-center"
            >
              <div>
                <p className="font-bold flex flex-col md:flex-row gap-3 text-xl items-start md:items-center pb-2">
                  {comment.name}
                  <span className="text-md font-medium text-(--accent1)">
                    Posted {formattedDate}
                  </span>
                </p>
                <p>{comment.content}</p>
              </div>

              {comment.ownerId === ownerId && (
                <form
                  action={deleteComment.bind(
                    null,
                    comment.id,
                    eventId,
                    ownerId,
                  )}
                  className="bg-background/75 md:bg-transparent w-full md:w-fit p-2 md:p-0 flex justify-center rounded"
                >
                  <button type="submit">
                    <FaTrash className="size-5 text-(--accent1) hover:text-(--accent2) transition-colors duration-300 ease-in-out" />
                  </button>
                </form>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CommentSection;
