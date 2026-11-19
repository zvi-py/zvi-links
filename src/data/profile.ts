export interface IconLink {
  id: string;
  label: string;
  href?: string;
  copyText?: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  fallbackGlyph: string;
}

export const HERO_DEER = {
  src: '/assets/aistudio/download__30__2dae4d67.jpeg',
  alt: 'Two sleepy vintage ceramic deer figurines',
};

export const ICON_LINKS: IconLink[] = [
  {
    id: 'portfolio',
    label: 'portfolio',
    href: 'https://web.zvii.workers.dev/',
    imageSrc: '/assets/aistudio/ball_8_6f7eb027.jpeg',
    imageAlt: 'Pastel blue glossy 8-ball',
    imageClassName: 'scale-[1.06] contrast-[1.04] saturate-[1.06]',
    fallbackGlyph: '🎱',
  },
  {
    id: 'linkedin',
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/zaveriya',
    imageSrc: '/assets/aistudio/download__28__52f192ba.jpeg',
    imageAlt: 'Glossy pastel pink bow wax seal',
    imageClassName: 'scale-[1.08] contrast-[1.04] saturate-[1.06]',
    fallbackGlyph: '🎀',
  },
  {
    id: 'insta',
    label: 'insta',
    href: 'https://www.instagram.com/zvi.py/',
    imageSrc: '/assets/aistudio/download__26__926bb9e3.jpeg',
    imageAlt: 'Glossy pastel pink swirl flower',
    imageClassName: 'scale-[0.92] brightness-[1.04] contrast-[1.06] saturate-[1.08]',
    fallbackGlyph: '🌸',
  },
  {
    id: 'pvt-insta',
    label: 'pvt insta',
    href: 'https://www.instagram.com/xozaviii/',
    imageSrc: '/assets/aistudio/download__32__3ad1bea5.jpeg',
    imageAlt: 'Glossy glass blueberry',
    imageClassName: 'scale-[1.42] contrast-[1.04] saturate-[1.06]',
    fallbackGlyph: '🫐',
  },
  {
    id: 'github',
    label: 'github',
    href: 'https://github.com/zvi-py',
    imageSrc: '/assets/aistudio/download__27__b2407e71.jpeg',
    imageAlt: 'Glossy translucent glass pink star',
    imageClassName: 'scale-[1.16] contrast-[1.05] saturate-[1.06]',
    fallbackGlyph: '⭐',
  },
  {
    id: 'email',
    label: 'email',
    copyText: 'zaveriya.edu@gmail.com',
    imageSrc:
      '/assets/aistudio/Download_3D_render_of_a_glossy_pink_glass_gift_box_with_white_plastic_ribbon_and_bow_isolated_for_free_0ab69b9a.jpeg',
    imageAlt: 'Glossy pink glass gift box with white bow',
    imageClassName: 'scale-[0.98] contrast-[1.04] saturate-[1.06]',
    fallbackGlyph: '🎁',
  },
];
