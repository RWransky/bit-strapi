// adapted from react-strapi-img
import { useRef, useEffect, useState, RefObject } from "react";
// https://usehooks-typescript.com/react-hook/use-intersection-observer

interface Args<T> extends IntersectionObserverInit {
  elementRef: RefObject<T>;
  freezeOnceVisible?: boolean;
  disable?: boolean;
}

type ReturnType = [boolean, IntersectionObserverEntry | undefined];
function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  elementRef,
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
  disable = false,
}: Args<T>): ReturnType {
  const observer = useRef<IntersectionObserver | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const isClient = typeof window !== `undefined`;
  const hasIOSupport = isClient && !!window.IntersectionObserver;
  const noUpdate = entry?.isIntersecting && freezeOnceVisible;
  const IOOptions = { threshold, root, rootMargin };
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };
  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    if (!hasIOSupport || noUpdate || !node || disable) {
      return;
    }
    // Delete the old observer before creating a new one
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(updateEntry, IOOptions);
    // Ensure the rest of useEffect use the same observer
    const { current: currentObserver } = observer;
    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, noUpdate]);
  return [!!entry?.isIntersecting, entry];
}

export default useIntersectionObserver;
