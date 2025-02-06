export function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
