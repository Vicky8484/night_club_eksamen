"use client";

import postComment from "@/app/actions/actions";
import {useRouter} from "next/navigation";
import {useActionState, useState, useEffect} from "react";
import {initialComment} from "@/app/components/(forms)/schema/commentSchema";
import BorderBlockBtn from "@/app/components/(knapper)/BorderBlockBtn";

const CommentForm = ({eventId}) => {
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

    //currentFields bevarer den nyeste værdi af formFields og spreader dem inde i det nye objekt
    //vi tager name attributten, læser værdien af den og bruger den som nøgle [name], så hver gang der sker noget får vi det rette navn gemt som nøgle hver gang vi udfylder et felt. Vi opdaterer med et nyt object ved at tage en kopi af det eksisterende object (...curentFields) og sætte en ny nøgle+værdi til
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

  return (
    <section className="full-bleed">
      <h1 className="text-3xl">LEAVE A COMMENT</h1>

      <form
        action={postCommentAction}
        className="flex flex-col gap-5 text-black"
      >
        <div className="flex w-full gap-4">
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Your name</span>
            <input
              type="text"
              name="commentname"
              value={formFields.commentname}
              onChange={handleChange}
              className="rounded-xl border-2 border-green-200 bg-white p-2"
              maxLength={100}
            />
            {showFieldError("commentname")}
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              name="commentemail"
              value={formFields.commentemail}
              onChange={handleChange}
              className="rounded-xl border-2 border-green-200 bg-white p-2"
            />
            {showFieldError("commentemail")}
          </label>
        </div>

        <label className="flex flex-col gap-1">
          <span className="font-semibold">Your comment</span>
          <textarea
            name="commenttext"
            value={formFields.commenttext}
            onChange={handleChange}
            rows="5"
            maxLength={1000}
            className="resize-y rounded-xl border-2 border-green-200 bg-white p-2"
          />
          {showFieldError("commenttext")}
        </label>

        <BorderBlockBtn
          buttontxt={isPending ? "Sending..." : "Comment"}
          type="submit"
          disabled={isPending}
        />
      </form>
      {state.message && (
        <p
          className={`mt-4 rounded border p-3 ${
            state.success === true
              ? "border-green-300 text-center bg-green-100 text-green-800"
              : "border-red-300 text-center bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </p>
      )}
    </section>
  );
};

export default CommentForm;
