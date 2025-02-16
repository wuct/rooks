import { useState, useEffect, MutableRefObject } from "react";
import { useMutationObserver } from "shared/useMutationObserver";

/**
 * useBoundingclientRect hook
 *
 * @param ref The React ref whose ClientRect is needed
 * @return ClientRect
 */
function useBoundingclientrect(ref: MutableRefObject<HTMLElement | null>) {
  function getBoundingClientRect(): ClientRect | DOMRect | null {
    if (ref.current) {
      return ref.current.getBoundingClientRect();
    }
    return null;
  }

  const [value, setValue] = useState<ClientRect | DOMRect | null>(null);

  function update() {
    setValue(getBoundingClientRect());
  }

  useEffect(() => {
    update();
  }, [ref.current]);

  useMutationObserver(ref, update);

  return value;
}

export { useBoundingclientrect };
