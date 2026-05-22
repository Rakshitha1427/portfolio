"use client";

import { Download } from "lucide-react";

export function ResumeDownloadButton({
  className = "glow-button-secondary",
}: {
  className?: string;
} = {}) {
  const handleDownload = async () => {
    try {
      const response = await fetch("/resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "D-Rakshitha-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button onClick={handleDownload} className={className}>
      Download Resume <Download size={16} />
    </button>
  );
}
