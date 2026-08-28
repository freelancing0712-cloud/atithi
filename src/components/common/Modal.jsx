import { useEffect } from "react";

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/10 bg-[#111] p-6 shadow-2xl sm:p-9" onClick={(e) => e.stopPropagation()}>
        <div className="mb-8 flex items-start justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold text-amber-300">{title}</h3>
            <p className="mt-3 text-sm text-gray-400">All details will be sent directly to the hotel owner on WhatsApp.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-2xl leading-none text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
