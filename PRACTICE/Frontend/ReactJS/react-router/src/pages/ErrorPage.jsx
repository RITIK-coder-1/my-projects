import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold text-red-600">404 - Not Found</h1>
      <p className="mt-4">Looks like you're lost in space 🪐</p>
      <p className="mt-2 text-sm text-gray-600">
        {error.statusText || error.message}
      </p>
      <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
