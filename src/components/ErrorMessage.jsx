


import { AlertTriangle } from "lucide-react";

function ErrorMessage({ message }) {
  return (
    <div className="max-w-md mx-auto mt-6 bg-red-500 text-white rounded-md p-4 flex items-center">
      <AlertTriangle size={20} className="mr-2" />
      {message}
    </div>
  );
}

export default ErrorMessage;
