"use client";

const Pagination = ({
  eventsPerPage,
  totalEvents,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  // Kodestykke kopieret fra Copilot output:
  // Håndterer valg af en bestemt side og scroll
  const goToPage = (page) => {
    // Kalder parent-komponentens setter via prop
    // page indeholder det sidetal som bliver sendt ind, når funktionen bliver kaldt
    setCurrentPage(page);
    document.getElementById("startHer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  // Slut

  return (
    <nav aria-label="Pagination" className="flex gap-1 justify-center pt-6">
      {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => {
        return (
          <button
            key={page}
            type="button"
            onClick={() => goToPage(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`focus min-w-9 border px-3 py-1 font-semibold text-foreground transition-colors ${
              currentPage === page
                ? "border-(--accent1) bg-(--accent1)"
                : "border-foreground/25 bg-(--subtle) hover:border-(--accent2) hover:bg-(--accent2)"
            }`}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
};

// Eksporterer komponenten som default, så EventsClient kan importere den uden navngivne klammer.
export default Pagination;
