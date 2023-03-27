import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PortalContainer({ children, className }) {
  const [mounted, setMounted] = useState();
  const [portalElement, setPortalElement] = useState();
  const isClient = typeof window !== "undefined";
  const rootElement = isClient ? document.querySelector("body") : null;

  useEffect(() => {
    if (isClient) {
      const el = document.createElement("div");
      el.className = className;
      setPortalElement(el);

      return () => {
        if (
          rootElement &&
          el &&
          rootElement.contains(el) &&
          el.children.length === 0
        ) {
          rootElement.removeChild(el);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (portalElement && rootElement) {
      rootElement.appendChild(portalElement);
    }

    setMounted(true);
  }, [portalElement]);

  return mounted && portalElement
    ? createPortal(children, portalElement)
    : null;
}
