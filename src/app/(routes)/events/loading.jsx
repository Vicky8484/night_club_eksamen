import {LoadingUI} from "@/app/components/(loading_ui)/LoadingUIEvents";

export default function Loading() {
  return (
    <div className="flex min-h-100 justify-center items-center top-0 bottom-0">
      <LoadingUI />
    </div>
  );
}
