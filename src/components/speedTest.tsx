import React, { useState } from "react";

const InternetSpeedTest = () => {
  const [loading, setLoading] = useState(false);
  const [speed, setSpeed] = useState(null);
  const [error, setError] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [liveSpeed, setLiveSpeed] = useState(null);

  const testFileUrl =
    "https://sin-speed.hetzner.com/100MB.bin";

  const calculateSpeed = async () => {
    setLoading(true);
    setSpeed(null);
    setError(null);
    setLiveSpeed(null);

    const startTime = new Date().getTime();
    let bytesDownloaded = 0;

    try {
      const response = await fetch(testFileUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Dosya indirilemedi.");
      }

      const reader = response.body.getReader();
      const contentLength = +response.headers.get("Content-Length");
      let chunk;
      const durationStart = new Date().getTime();

      while (true) {
        chunk = await reader.read();
        if (chunk.done) break;

        bytesDownloaded += chunk.value.length;

        const currentTime = new Date().getTime();
        const elapsedTimeInSeconds = (currentTime - durationStart) / 1000;
        const currentSpeed = (bytesDownloaded * 8) / (elapsedTimeInSeconds * 1000000);

        setLiveSpeed(currentSpeed.toFixed(2));

        if (bytesDownloaded === contentLength) {
          const duration = (new Date().getTime() - startTime) / 1000;
          const speedInMbps = (bytesDownloaded * 8) / (duration * 1000000);

          setSpeed(speedInMbps.toFixed(2));
          break;
        }
      }
    } catch (err) {
      setError("Hız testi sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[120px] bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6 rounded-xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        İnternet Hızı Testi
      </h2>

      {loading && (
        <div className="text-white text-lg mb-4 flex items-center">
          <svg
            className="animate-spin h-8 w-8 mr-3 text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path d="M4 12h8" />
          </svg>
          <span className="animate-pulse text-lg text-gray-700">Test yapılıyor...</span>
        </div>
      )}

      {liveSpeed && !speed && (
        <p className="text-blue-500 text-lg mb-4">
          Anlık Hız: <strong>{liveSpeed} Mbps</strong>
        </p>
      )}

      {speed && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center border border-gray-300">
          <p className="text-green-600 text-xl font-semibold mb-4">İnternet Hızınız</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-lg">Sonuç: </span>
            <strong>{speed} Mbps</strong>
          </h3>
        </div>
      )}

      {error && <p className="text-red-500 text-lg mb-4 text-center">{error}</p>}

      {!testStarted ? (
        <button
          onClick={() => {
            setTestStarted(true);
            calculateSpeed();
          }}
          className="px-8 py-3 mt-6 text-white font-semibold rounded-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 transform transition duration-300 ease-in-out hover:scale-105"
        >
          Teste Başla
        </button>
      ) : (
        <button
          onClick={() => {
            setTestStarted(false);
            setSpeed(null);
            setError(null);
            setLiveSpeed(null);
          }}
          className="px-8 py-3 mt-6 text-white font-semibold rounded-full shadow-xl bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 transform transition duration-300 ease-in-out hover:scale-105"
        >
          Yeniden Test Et
        </button>
      )}
    </div>
  );
};

export default InternetSpeedTest;
