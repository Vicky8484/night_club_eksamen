"use server";

import {revalidatePath} from "next/cache";
import {Comment} from "@/app/components/(forms)/schema/commentSchema";
import * as z from "zod";

const postComment = async (prevState, formData) => {
  const eventId = formData.get("eventId");
  const ownerId = formData.get("ownerId");

  try {
    const {
      commentname: commentName,
      commentemail: commentEmail,
      commenttext: commentText,
    } = Comment.parse({
      commentname: formData.get("commentname"),
      commentemail: formData.get("commentemail"),
      commenttext: formData.get("commenttext"),
    });

    const response = await fetch(
      "https://night-club-api-2026-1nvc.onrender.com/comments",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          eventId: Number(eventId),
          ownerId,
          name: commentName,
          content: commentText,
          date: new Date().toISOString(),
        }),
      },
    );

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    revalidatePath(`/eventpage/${eventId}`);

    return {
      success: true,
      message: "The comment was sent",
      fieldErrors: {},
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "",
        fieldErrors: z.flattenError(error).fieldErrors,
      };
    }
    return {success: false, message: "There was an error", fieldErrors: {}};
  }
};

export async function deleteComment(commentId, eventId, ownerId) {
  try {
    const commentResponse = await fetch(
      `https://night-club-api-2026-1nvc.onrender.com/comments/${commentId}`,
    );

    if (!commentResponse.ok) {
      throw new Error("Comment not found");
    }

    const comment = await commentResponse.json();

    if (comment.ownerId !== ownerId) {
      return {
        success: false,
        message: "You cannot delete this comment",
      };
    }

    const response = await fetch(
      `https://night-club-api-2026-1nvc.onrender.com/comments/${commentId}`,
      {method: "DELETE"},
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    revalidatePath(`/eventpage/${eventId}`);

    return {success: true};
  } catch (error) {
    return {
      success: false,
      message: "The comment could not be deleted",
    };
  }
}
export default postComment;
