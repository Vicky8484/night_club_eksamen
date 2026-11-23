"use server";

import {revalidatePath} from "next/cache";
import {Comment} from "@/app/components/(forms)/schema/commentSchema";
import * as z from "zod";

const postComment = async (prevState, formData) => {
  const eventId = formData.get("eventId");

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

    const response = await fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        eventId: Number(eventId),
        name: commentName,
        content: commentText,
        date: new Date().toISOString(),
      }),
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    return {
      success: true,
      message: "Kommentaren blev indsendt",
      fieldErrors: {},
    };

    revalidatePath(`/eventpage/${eventId}`);

    console.log(`Response status: ${response.status}`);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "",
        fieldErrors: z.flattenError(error).fieldErrors,
      };
    }
    return {success: false, message: "Der skete en fejl", fieldErrors: {}};
  }
};

export default postComment;
