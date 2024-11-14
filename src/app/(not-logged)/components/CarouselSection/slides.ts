import img1 from "@/public/images/not-logged-slide-1.png";
import img2 from "@/public/images/not-logged-slide-2.png";
import img3 from "@/public/images/not-logged-slide-3.png";
import type { Slide } from "./types";

export const SLIDES: Slide[] = [
  {
    img: img1,
    header: "Let the right people know you’re open to work",
    description:
      "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
  },
  {
    img: img2,
    header: "Conversations today could lead to opportunity tomorrow",
    description:
      "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
  },
  {
    img: img3,
    header: "Stay up to date on your industry",
    description:
      "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
  },
];
