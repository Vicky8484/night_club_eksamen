"use client";

import postComment from "@/app/actions/actions";
import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";

import {useRouter} from "next/navigation";
import {useActionState, useState, useEffect} from "react";
import {initialComment} from "@/app/components/(forms)/schema/commentSchema";

const CommentForm = ({eventId}) => {
  //Ejer ID
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    let storedOwnerId = localStorage.getItem("comment-owner");

    if (!storedOwnerId) {
      storedOwnerId = crypto.randomUUID();
      localStorage.setItem("comment-owner", storedOwnerId);
    }

    setOwnerId(storedOwnerId);
  }, []);

  // PostCommentAction og formFields

  const [state, postCommentAction, isPending] = useActionState(postComment, {
    success: null,
    message: "",
  });

  const [formFields, setFormFields] = useState(initialComment);

  const router = useRouter();

  useEffect(() => {
    if (state.success === true) {
      setFormFields(initialComment);
      router.refresh();
    }
  }, [state]);

  function handleChange(event) {
    const {name, value} = event.target;
    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }

  function showFieldError(fieldName) {
    const error = state.fieldErrors?.[fieldName]?.[0];

    return error ? (
      <p role="alert" className="text-red-700 bg-red-50 p-2">
        {error}
      </p>
    ) : null;
  }

  // Notification key til fejl-/succesmeddelelse

  const [notificationKey, setNotificationKey] = useState(0);

  useEffect(() => {
    if (state.success === null) return;

    setNotificationKey((prev) => prev + 1);

    if (state.success) {
      setFormFields(initialComment);
      router.refresh();
    }
  }, [state, router]);

  return (
    <section className="full-bleed pb-(--big-block-space)">
      <h1 className="text-3xl pb-6">LEAVE A COMMENT</h1>

      <form
        action={postCommentAction}
        className="flex flex-col gap-5 text-black"
      >
        <input type="hidden" name="eventId" value={eventId} />
        <input type="hidden" name="ownerId" value={ownerId} />

        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex flex-col gap-1 w-full">
            <input
              type="text"
              placeholder="Your name"
              name="commentname"
              value={formFields.commentname}
              onChange={handleChange}
              className="border-2 border-foreground p-2 text-foreground"
              maxLength={100}
            />
            {showFieldError("commentname")}
          </label>

          <label className="flex flex-col gap-1 w-full">
            <input
              type="email"
              name="commentemail"
              value={formFields.commentemail}
              onChange={handleChange}
              placeholder="Your Email"
              className="border-2 border-foreground p-2 text-foreground"
            />
            {showFieldError("commentemail")}
          </label>
        </div>

        <label className="flex flex-col gap-1">
          <textarea
            name="commenttext"
            value={formFields.commenttext}
            placeholder="Your comment"
            onChange={handleChange}
            rows="5"
            maxLength={1000}
            className="resize-y border-2 border-foreground p-2 text-foreground"
          />
          {showFieldError("commenttext")}
        </label>

        <BorderBlockBtn
          buttontxt={isPending ? "Sending..." : "Comment"}
          type="submit"
          disabled={isPending}
          className="w-fit self-end"
        />
      </form>
      {state.message && (
        <p
          key={notificationKey}
          className={`timedSuccessBox mt-4 rounded p-3 ${
            state.success === true
              ? "text-center bg-green-500 text-foreground"
              : "text-center bg-red-400 text-foreground"
          }`}
        >
          {state.message}
        </p>
      )}
    </section>
  );
};

export default CommentForm;
