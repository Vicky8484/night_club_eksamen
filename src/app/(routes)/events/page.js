import {Suspense} from "react";

import Header from "@/app/components/(alle_sider)/Header";
import EventsData from "@/app/components/(events_listevisning)/EventsData";
import MiniHero from "@/app/components/(alle_sider)/MiniHero";
import {LoadingUI} from "@/app/components/(loading_ui)/LoadingUIEvents";

export default function EventsList() {
  return (
    <>
      <Header />
      <MiniHero overskrift="Events" id="startHer" />
      <Suspense
        fallback={
          <div className="flex min-h-100 items-center justify-center">
            <LoadingUI whatisloading="events" />
          </div>
        }
      >
        <EventsData />
      </Suspense>
    </>
  );
}
