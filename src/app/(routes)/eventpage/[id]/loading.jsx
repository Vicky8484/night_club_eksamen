import Header from "@/app/components/(alle_sider)/Header";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import {LoadingUI} from "@/app/components/(loading_ui)/LoadingUIEvents";

export default function Loading() {
  return (
    <>
      <Header />
      <MiniHero overskrift="Event" />
      <div className="flex min-h-100 items-center justify-center">
        <div className="w-full px-4">
          <LoadingUI whatisloading="event" />
        </div>
      </div>
    </>
  );
}
