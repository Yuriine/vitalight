/**
 * Función utilitaria para realizar un desplazamiento suave a una sección específica de la página
 * @param id - El ID del elemento al que se desea desplazar
 * @param headerOffset - El desplazamiento de la cabecera
 * @param duration - La duración de la animación en milisegundos 
 */
export const scrollToSection = (id: string, headerOffset: number = 80, duration: number = 800): void => {
  const section = document.getElementById(id);
  if (section) {
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;

    let start: number | null = null;

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      const easing = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const position = startPosition + distance * easing(percentage);

      window.scrollTo(0, position);

      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
};