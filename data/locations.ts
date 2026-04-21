export type LocationCategory =
  | "Historical Heritage"
  | "Natural Landscape"
  | "Archaeological Site"
  | "Leisure & Wellness"
  | "Coastal Destination"
  | "City Experience";

export interface LocationItem {
  slug: string;
  name: string;
  city: string;
  category: LocationCategory;
  description: string;
  location: string;
  coverImage: string;
  gallery: string[];
  videoEmbed: string;
  reelEmbed: string;
}

export interface SponsorItem {
  name: string;
  logo: string;
  tier: "Elite Sponsor" | "Super Sponsor" | "Sponsor";
}

export const locations: LocationItem[] = [
  {
    slug: "petra",
    name: "Petra",
    city: "Wadi Musa",
    category: "Historical Heritage",
    description:
      "The Treasury at Petra is one of Jordan’s most iconic views and a must-see landmark for travelers exploring the Rose City.",
    location: "30.3285, 35.4444",
    coverImage: "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3327&Type=Original",
    gallery: [
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3327&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3326&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3325&Type=Original",
    ],
    videoEmbed: "https://www.youtube.com/embed/IZ6jD6l_lMU?autoplay=1&mute=1&controls=0&rel=0",
    reelEmbed: "https://www.youtube.com/embed/IZ6jD6l_lMU?autoplay=1&mute=1&controls=0&rel=0",
  },
  {
    slug: "wadi-rum",
    name: "Wadi Rum",
    city: "Aqaba",
    category: "Natural Landscape",
    description:
      "A cinematic desert landscape of cliffs, canyons, and quiet horizons that captures the spirit of adventure.",
    location: "29.5321, 35.4201",
    coverImage: "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3312&Type=Original",
    gallery: [
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3312&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3302&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3303&Type=Original",
    ],
    videoEmbed: "https://www.youtube.com/embed/KlmwDiSEFwU?autoplay=1&mute=1&controls=1&rel=0",
    reelEmbed: "https://www.youtube.com/embed/KlmwDiSEFwU?autoplay=1&mute=1&controls=1&rel=0",
  },
  {
    slug: "jerash",
    name: "Jerash",
    city: "Jerash",
    category: "Archaeological Site",
    description:
      "A remarkably preserved Roman city with colonnaded streets, theaters, and monumental public spaces.",
    location: "32.2745, 35.8915",
    coverImage: "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3190&Type=Original",
    gallery: [
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3190&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3201&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3193&Type=Original",
    ],
    videoEmbed: "https://www.youtube.com/embed/SZ5JjLdzQ1o?autoplay=1&mute=1&controls=1&rel=0",
    reelEmbed: "https://www.youtube.com/embed/7VnhVN4o2uc?autoplay=1&mute=1&controls=0&rel=0",
  },
  {
    slug: "dead-sea",
    name: "Dead Sea",
    city: "Balqa",
    category: "Leisure & Wellness",
    description:
      "A globally recognized natural destination famous for its unique landscape and floating experience.",
    location: "31.5590, 35.4732",
    coverImage: "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3179&Type=Original",
    gallery: [
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3178&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3186&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3179&Type=Original",
    ],
    videoEmbed: "https://www.youtube.com/embed/ie2nI3cGMzw?autoplay=1&mute=1&controls=1&rel=0",
    reelEmbed: "https://www.youtube.com/embed/7VnhVN4o2uc?autoplay=1&mute=1&controls=0&rel=0",
  },
  {
    slug: "amman",
    name: "Amman",
    city: "Amman",
    category: "City Experience",
    description:
      "A vibrant capital where contemporary life and heritage sit together across a dynamic urban landscape.",
    location: "31.9539, 35.9106",
    coverImage: "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3134&Type=Original",
    gallery: [
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3134&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3133&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3138&Type=Original",
    ],
    videoEmbed: "https://www.youtube.com/embed/7VnhVN4o2uc?autoplay=1&mute=1&controls=1&rel=0",
    reelEmbed: "https://www.youtube.com/embed/ie2nI3cGMzw?autoplay=1&mute=1&controls=0&rel=0",
  },
  {
    slug: "aqaba",
    name: "Aqaba",
    city: "Aqaba",
    category: "Coastal Destination",
    description:
      "Jordan’s Red Sea gateway with open waterfront views and a strong sense of movement and leisure.",
    location: "29.5319, 35.0063",
    coverImage: "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3141&Type=Original",
    gallery: [
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3141&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3147&Type=Original",
      "https://media.visitjordan.com/DownloadPhoto.ashx?SystemPhotoId=3359&Type=Original",
    ],
    videoEmbed: "https://www.youtube.com/embed/7VnhVN4o2uc?autoplay=1&mute=1&controls=1&rel=0",
    reelEmbed: "https://www.youtube.com/embed/KlmwDiSEFwU?autoplay=1&mute=1&controls=0&rel=0",
  },
];

export const eliteSponsors: SponsorItem[] = [
  { name: "Sponsor 1", logo: "/images/sponsor-logo.jpg", tier: "Elite Sponsor" },
  { name: "Sponsor 2", logo: "/images/sponsor-logo.jpg", tier: "Elite Sponsor" },
];

export const superSponsors: SponsorItem[] = [
  { name: "Sponsor 3", logo: "/images/sponsor-logo.jpg", tier: "Super Sponsor" },
  { name: "Sponsor 4", logo: "/images/sponsor-logo.jpg", tier: "Super Sponsor" },
  { name: "Sponsor 5", logo: "/images/sponsor-logo.jpg", tier: "Super Sponsor" },
];

export const otherSponsors: SponsorItem[] = [
  { name: "Sponsor 6", logo: "/images/sponsor-logo.jpg", tier: "Sponsor" },
  { name: "Sponsor 7", logo: "/images/sponsor-logo.jpg", tier: "Sponsor" },
  { name: "Sponsor 8", logo: "/images/sponsor-logo.jpg", tier: "Sponsor" },
  { name: "Sponsor 9", logo: "/images/sponsor-logo.jpg", tier: "Sponsor" },
  { name: "Sponsor 10", logo: "/images/sponsor-logo.jpg", tier: "Sponsor" },
];
