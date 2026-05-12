import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const projects = [
  {
    id: 1,
    image: '/websitesImg/website4.jpg',
    title: "HR Portfolio Platform",
    tech: "Next.js · TypeScript · Tailwind CSS",
    Text: "Portfolio website for HR specialists with blog and job listings — currently in development at EdgeRunners.",
    link: "https://persanal-brand-hr.vercel.app/",
  },
  {
    id: 2,
    image: '/websitesImg/website1.jpg',
    title: "Agent Catalog App",
    tech: "React · REST API",
    Text: "Catalog web app for agents with dynamic filtering and responsive layout.",
    link: "https://next-store-gamma.vercel.app",
  },
  {
    id: 3,
    image: '/websitesImg/website2.jpg',
    title: "Christmas Shop",
    tech: "Vanilla JS · HTML · CSS",
    Text: "Holiday-themed e-commerce shop built with pure JavaScript — no frameworks.",
    link: "https://christmas-shop-flame.vercel.app",
  },
  {
    id: 4,
    image: '/websitesImg/website1.jpg',
    title: "Hangman Game",
    tech: "JavaScript",
    Text: "Browser-based word game with game state logic, animations, and keyboard support.",
    link: "https://hangman-game-xi-umber.vercel.app/",
  },
];


export function RightSideCarousel() {
  return (
    <>
      <p className="mini-titles box-for-element">Projects</p>
      <Carousel className="carusel w-full sm:max-w-xs">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="parent-card">
                <Card className="flex justify-items-center bg-foreground/80 ">
                  <a href={item.link} className="cursor-Up">
                    <CardContent className="card-content">
                      <img src={item.image} alt={item.title} />
                      <div className="card-text">
                        <p className="card-title text-xl text-cyan-50">
                          {item.title}
                        </p>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel >
    </>
  );
}
export default RightSideCarousel;
