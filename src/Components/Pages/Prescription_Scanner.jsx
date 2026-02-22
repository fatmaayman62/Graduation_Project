import React, { useState } from "react";
import { Camera, Upload, X, Pill, AlertCircle, Loader2 } from "lucide-react";

export default function Prescription_Scanner() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) processFile(file);
  };

  const processFile = (file) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
      setImage(e.target.result);
      setMedicines([]);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const analyzePrescription = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    try {
      const base64Data = image.split(",")[1];
      const mimeType = image.split(";")[0].split(":")[1];

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: mimeType,
                    data: base64Data,
                  },
                },
                {
                  type: "text",
                  text: `Analyze this prescription image and extract ALL medicine names.
Return ONLY a JSON array like:
[
  { "name": "", "dosage": "", "frequency": "" }
]
Return [] if nothing found.`,
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();

      const textContent = data.content
        ?.filter((item) => item.type === "text")
        .map((item) => item.text)
        .join("");

      const cleanText = textContent.replace(/```json|```/g, "").trim();
      const parsedMedicines = JSON.parse(cleanText);

      if (!parsedMedicines.length) {
        setError("No medicines found. Please upload a clearer image.");
      } else {
        setMedicines(parsedMedicines);
      }
    } catch (err) {
      setError("Failed to analyze prescription. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setImage(null);
    setPreview(null);
    setMedicines([]);
    setError(null);
  };

  return (
    <div className="min-h-screen mt-12 p-4 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-white dark:bg-[#1D293D] rounded-2xl shadow-xl p-6 md:p-8">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-500/20 p-4 rounded-full">
                <Pill className="w-9 h-9 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              Prescription Scanner
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Upload your prescription to identify medicines
            </p>
          </div>

          {/* Upload */}
          {!preview ? (
            <div className="border-2 border-dashed border-blue-500 dark:border-blue-400 rounded-xl p-8 text-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-3" />
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  Upload Prescription Image
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  PNG or JPG (max 10MB)
                </span>
              </label>
            </div>
          ) : (
            <div className="space-y-6">

              {/* Preview */}
              <div className="relative">
                <img
                  src={preview}
                  alt="Prescription"
                  className="w-full max-h-96 object-contain rounded-lg bg-gray-50 dark:bg-[#24324A]"
                />
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Analyze */}
              {!loading && medicines.length === 0 && (
                <button
                  onClick={analyzePrescription}
                  className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white py-3 rounded-lg flex justify-center gap-2"
                >
                  <Camera size={18} />
                  Analyze Prescription
                </button>
              )}

              {/* Loading */}
              {loading && (
                <div className="flex justify-center items-center gap-3 py-6">
                  <Loader2 className="animate-spin text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Analyzing prescription...
                  </span>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-400 rounded-lg p-4 flex gap-2">
                  <AlertCircle className="text-red-500" />
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    {error}
                  </p>
                </div>
              )}

              {/* Results */}
              {medicines.length > 0 && (
                <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-400 rounded-lg p-5">
                  <h2 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <Pill className="text-green-600 dark:text-green-400" />
                    Medicines Found ({medicines.length})
                  </h2>

                  <div className="space-y-3">
                    {medicines.map((med, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-[#24324A] border border-gray-200 dark:border-[#2F3F5C] rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {med.name}
                        </h3>
                        {med.dosage && (
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Dosage: {med.dosage}
                          </p>
                        )}
                        {med.frequency && (
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Frequency: {med.frequency}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={clearImage}
                    className="mt-4 w-full bg-gray-200 dark:bg-[#2F3F5C] text-gray-700 dark:text-gray-200 py-2 rounded-lg"
                  >
                    Scan Another Prescription
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Note */}
          <div className="mt-6 bg-blue-50 dark:bg-[#24324A] border border-blue-200 dark:border-[#2F3F5C] rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <strong>Note:</strong> Always consult a healthcare professional
              before taking any medication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
