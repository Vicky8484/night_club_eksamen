"use client";
const ActiveBtns = ({events, activeIndex, onSelect}) => (
  <div className="flex justify-center gap-3 md:hidden pt-4">
    {events.map((event, index) => (
      <button
        key={event.id}
        type="button"
        onClick={() => onSelect(index)}
        aria-label={`Vis slide ${index + 1}: ${event.title}`}
        aria-pressed={activeIndex === index}
        className={`h-6 w-6 ${
          activeIndex === index ? "bg-(--accent1)" : "bg-foreground"
        }`}
      />
    ))}
  </div>
);
export default ActiveBtns;
