import { useEffect, useRef } from "react";

/**
 * Adds the CSS class `is-visible` to an element (and optionally its
 * children matching `childSelector`) when it scrolls into view.
 *
 * Works with the .anim-fade-up / .anim-fade-left / etc. CSS classes
 * defined in animations.css.
 *
 * @param childSelector - Optional CSS selector for children to animate
 *                        individually (e.g. staggered grid items).
 * @param threshold     - Intersection ratio to trigger (default 0.12)
 */
export function useInView<T extends HTMLElement>(
  childSelector?: string,
  threshold = 0.12,
  deps: React.DependencyList = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    // Small delay to ensure DOM has updated before grabbing querySelectors
    const timeoutId = setTimeout(() => {
      const el = ref.current;
      if (!el) return;

      const targets = childSelector
        ? Array.from(el.querySelectorAll<HTMLElement>(childSelector))
        : [el];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target); // animate once
            }
          });
        },
        { threshold },
      );

      targets.forEach((t) => observer.observe(t));

      return () => observer.disconnect();
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [childSelector, threshold, ...deps]);

  return ref;
}
