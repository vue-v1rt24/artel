export const sdvigGallery = () => {
  const target = document.querySelectorAll('.sdvig');

  if (!target) return;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const callback = function (entries: any, observer: any) {
    entries.forEach((entry: any) => {
      const type = entry.target.dataset.stvigType;

      if (entry.isIntersecting) {
        if (type && type === 'transform') {
          entry.target.classList.add('sdvig_transform_x');
        } else {
          entry.target.classList.add('sdvig_margin');
        }

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  target.forEach((el) => observer.observe(el));
};
