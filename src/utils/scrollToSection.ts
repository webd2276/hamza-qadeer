export const scrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined') return false;

  const target = document.getElementById(sectionId);
  if (!target) return false;

  const header = document.querySelector('header');
  const headerHeight =
    header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const top =
    window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });

  return true;
};
