import {Heart, MessageCircle, Share2} from "lucide-react";

import PhotoSection from "@/components/photoSection";

interface Gallery {
  icon: React.ReactNode;
}
const projects: Array<{
  id: number;
  image: string;
  title: string;
  link: string;
}> = [
  {
    id: 1,
    image: "/websitesImg/website2.jpg",
    title: "Christmas Shop",
    link: "https://christmas-shop-flame.vercel.app",
  },
  {
    id: 2,
    image: "/websitesImg/test.jpeg",
    title: "Hangman Game",
    link: "https://hangman-game-xi-umberF.vercel.app/",
  },
  {
    id: 2,
    image: "/websitesImg/test.jpeg",
    title: "Hangman Game",
    link: "https://hangman-game-xi-umberF.vercel.app/",
  },
  {
    id: 2,
    image: "/websitesImg/test.jpeg",
    title: "Hangman Game",
    link: "https://hangman-game-xi-umberF.vercel.app/",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-section mx-2 sm:m-0">
      <img src="/Profile.jpg" alt="" className="profile-icon" />
      <div className="info-photo">
        <div className="username-photo flex mini-gap">
          <h1>Xasan Mamurov</h1>
          <p className="text-gray-600">@mcasyn</p>
        </div>
        <p className="text-white mar-bottom">Bro never trust his physics teacher</p>
        <PhotoSection projects={projects} />
        <div className="reactions flex items-start mini-gap mar-top justify-between w-auto">
          <Heart strokeWidth={2.2} className="like-btn text-white" />
          <MessageCircle className="comment-btn text-white" />
          <Share2 className="share-btn text-white" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
