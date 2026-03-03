import NotFound from "./components/ui/NotFound";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 font-google-sans mt-20">
      {/* Static Server-Side Content */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 mb-4">
        404 - OOPS..!!
      </h1>

      <p className="text-gray-400 text-lg max-w-md mb-8">
        Seems like you are trying to visit a page that does not exist. We
        believe its not our fault.
      </p>

      {/* Interleaving: Wrapping Client logic inside Server Layout */}
      <NotFound>
        <div className="p-6 rounded-2xl mb-10 text-left max-w-lg">
          <h3 className="text-blue-400 font-bold mb-3 uppercase tracking-wider text-sm">
            Possible Causes:
          </h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
            <li>There might be a typo in the URL.</li>
            <li>
              This asset might have been deleted even before your verification
              request.
            </li>
            <li>Our system is 'Ghost Marking' this section right now.</li>
          </ul>
        </div>
      </NotFound>
    </main>
  );
};
export default NotFoundPage;
