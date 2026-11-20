"use client";

import {useState} from "react";
import BilledTekst from "@/app/components/(andre_sider)/BilledTekstEvent";
import Pagination from "@/app/components/PaginationClient";

export default function EventsClient({events}) {
  const eventsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * eventsPerPage;
  const visibleEvents = events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <>
      <section
        className="full-bleed bg-[url('/assets/bg/pattern_bg.jpg')] bg-cover bg-center
      bg-no-repeat py-(--big-block-space)"
      >
        {visibleEvents.map((event, index) => {
          return (
            <BilledTekst
              key={event.id}
              event={event}
              reverse={index % 2 === 1}
            />
          );
        })}

        <Pagination
          eventsPerPage={eventsPerPage}
          totalEvents={events.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
}
