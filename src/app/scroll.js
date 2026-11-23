// Scroll frem og tilbage funktion

export function scrollX(scrollRef, direction) {
  const container = scrollRef.current;
  if (!container) return;

  container.scrollBy({
    left: direction * container.clientWidth * 0.8,
    behavior: "smooth",
  });
}
