import { domToPng } from "modern-screenshot";
import { IconDownload } from "@/components/Icons";

export function DownloadImg() {
  const handleDownload = () => {
    domToPng(document.querySelector("#canvas") as Node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "mdpvss.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        alert("ERROR: Failed to download image. View console for details.");
        console.warn("ERROR: Failed to download image.", error);
      });
  };

  return (
    <button type="button" className="setting" onClick={handleDownload}>
      <span>
        <IconDownload aria-hidden="true" /> DOWNLOAD
      </span>
    </button>
  );
}
