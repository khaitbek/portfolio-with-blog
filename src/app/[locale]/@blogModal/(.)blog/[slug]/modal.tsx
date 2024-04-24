"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, type ElementRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "src/shared/ui/Button/button";

export function BlogModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog
        ref={dialogRef}
        className="modal p-6 rounded-lg"
        onClose={onDismiss}
      >
        <Button
          onClick={onDismiss}
          className="close-button sticky left-full top-0"
        >
          Close
        </Button>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
