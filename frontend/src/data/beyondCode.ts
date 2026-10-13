export type PersonalPhoto = {
  id: string;
  src: string;
  smallSrc: string;
  width: number;
  height: number;
  smallWidth: number;
  alt: string;
  caption: string;
};

export type PersonalVideo = {
  src: string;
  poster: string;
  description: string;
  caption: string;
};

export type PersonalStory = {
  id: string;
  category: string;
  title: string;
  summary: string;
  photos: PersonalPhoto[];
  coverPhotoId?: string;
  video?: PersonalVideo;
};

const media = "/media/beyond-code";

function skydivePhoto(id: string, alt: string, caption: string): PersonalPhoto {
  return {
    id,
    src: `${media}/${id}-1600.jpg`,
    smallSrc: `${media}/${id}-640.jpg`,
    width: 1600,
    height: 1400,
    smallWidth: 640,
    alt,
    caption,
  };
}

// Add future travel and interests as stories here, using supplied photos and details.
export const personalStories: PersonalStory[] = [
  {
    id: "skydiving",
    category: "Skydiving / Dubai",
    title: "A different kind of leap.",
    summary:
      "A tandem skydive over Palm Jumeirah in Dubai. From boarding the plane to the jump and the parachute ride down, here are a few moments from a day far away from the keyboard.",
    coverPhotoId: "above-the-palm",
    photos: [
      skydivePhoto("boarding", "Boarding the Skydive Dubai plane before a tandem jump", "Before the jump."),
      skydivePhoto("the-jump", "Ashar and his tandem instructor leaving the plane over Dubai", "Taking the leap."),
      skydivePhoto("above-the-palm", "Ashar tandem skydiving above Palm Jumeirah and the blue waters of Dubai", "A different view of Dubai."),
      skydivePhoto("under-the-canopy", "Ashar descending under a parachute with Palm Jumeirah below", "The ride back down."),
    ],
  },
  {
    id: "london",
    category: "A city moment / London",
    title: "City lights, after dark.",
    summary: "A short glimpse of London after dark: bright screens, passing traffic, and a city still in motion.",
    photos: [],
    video: {
      src: `${media}/london-night.mp4`,
      poster: `${media}/london-night-poster.jpg`,
      description: "A short nighttime street scene in London, with illuminated billboards and passing traffic.",
      caption: "London, after dark.",
    },
  },
  {
    id: "penny",
    category: "The quieter moments / Penny",
    title: "Meet Penny.",
    summary: "A little company for the quieter moments away from the screen. This is Penny, my cat.",
    photos: [
      {
        id: "penny",
        src: `${media}/penny-1600.jpg`,
        smallSrc: `${media}/penny-640.jpg`,
        width: 828,
        height: 1472,
        smallWidth: 360,
        alt: "Penny, a tabby-and-white cat with green eyes, looking up",
        caption: "Penny, taking it all in.",
      },
    ],
  },
];
