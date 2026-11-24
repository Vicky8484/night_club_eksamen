export function LoadingUI({whatisloading}) {
  return (
    <div className="flex flex-col w-full gap-4 text-center">
      <h1 className="text-xl">Loading {whatisloading} ...</h1>
      <div
        role="status"
        aria-label="Loading"
        className="h-2 overflow-hidden rounded bg-gray-200 items-center justify-center"
      >
        <div className="h-full loading-bar-fill" />
      </div>
    </div>
  );
}
