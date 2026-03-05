import { useEffect, useState } from "react";

const InstallButton = () => {
  const [prompt, setPrompt] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPrompt(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!prompt) return;

    prompt.prompt();
    const result = await prompt.userChoice;

    if (result.outcome === "accepted") {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={installApp}
      className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
    >
      Install App
    </button>
  );
};

export default InstallButton;