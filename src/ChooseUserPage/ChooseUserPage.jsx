import { useState } from "react";
import { FaUser, FaClinicMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SelectRole() {
  const [role, setRole] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 w-[360px] text-center shadow-2xl">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white mb-2">
          Choose Your Role
        </h1>
        <p className="text-slate-400 mb-8 text-sm">
          Select how you want to continue
        </p>

        {/* Options */}
        <div className="flex gap-4 mb-8">
          {/* User */}
          <button
            onClick={() => setRole("user")}
            className={`flex-1 flex flex-col items-center gap-2 p-5 rounded-xl border transition
              ${
                role === "user"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500"
              }`}
          >
            <FaUser className="text-2xl" />
            <span className="font-medium">User</span>
          </button>

          {/* Pharmacy */}
          <button
            onClick={() => setRole("pharmacy")}
            className={`flex-1 flex flex-col items-center gap-2 p-5 rounded-xl border transition
              ${
                role === "pharmacy"
                  ? "bg-emerald-600 border-emerald-500 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:border-emerald-500"
              }`}
          >
            <FaClinicMedical className="text-2xl" />
            <span className="font-medium">Pharmacy</span>
          </button>
        </div>

        {/* Continue Button */}
        <button
          disabled={!role}
          className={`w-full py-3 rounded-xl font-medium transition
            ${
              role
                ? "bg-white text-slate-900 hover:bg-slate-200"
                : "bg-slate-700 text-slate-400 cursor-not-allowed"
            }`}
        >
          <Link to={`/${role}`}>Continue</Link>
        </button>
      </div>
    </div>
  );
}
