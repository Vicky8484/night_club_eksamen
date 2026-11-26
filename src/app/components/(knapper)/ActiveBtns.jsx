"use client";
const ActiveBtns = ({events, activeIndex, onSelect, className = ""}) => (
  <div className={`flex justify-center gap-3 pt-4 ${className}`}>
    {events.map((event, index) => (
      <button
        key={event.id}
        type="button"
        onClick={() => onSelect(index)}
        aria-label={`Show slide ${index + 1}: ${event.title}`}
        aria-pressed={activeIndex === index}
        className={`focus h-6 w-6 ${
          activeIndex === index ? "bg-(--accent1)" : "bg-foreground"
        }`}
      />
    ))}
  </div>
);
export default ActiveBtns;
