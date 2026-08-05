export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') return false;

  const target = document.getElementById(sectionId);
  if (!target) return false;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  // Let the browser honor CSS `scroll-margin-top` / `scroll-mt-*` on sections.
  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
    inline: 'nearest',
  });

  return true;
};
