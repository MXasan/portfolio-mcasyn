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
    img: "/project1.png",
    title: "Project 1",
    description: "Description for project 1",
    linkForProject: "https://example.com/project1",
  },
  {
    img: "/project2.png",
    title: "Project 2",
    description: "Description for project 2",
    linkForProject: "https://example.com/project2",
  },
  {
    img: "/project3.png",
    title: "Project 3",
    description: "Description for project 3",
    linkForProject: "https://example.com/project3",
  },
  {
    img: "/project4.png",
    title: "Project 4",
    description: "Description for project 4",
    linkForProject: "https://example.com/project4",
  },
  {
    img: "/project5.png",
    title: "Project 5",
    description: "Description for project 5",
    linkForProject: "https://example.com/project5",
  },
];

export function RightSideCarousel() {
  return (
    <Carousel className="carusel w-full sm:max-w-xs">
      <CarouselContent>
        {projects.map((item, index) => (
          <CarouselItem key={index} className="cursor-Up">
            <div className="parent-card p-1">
              <Card className="flex justify-items-center ">
                <CardContent className="card-content flex aspect-square items-center justify-center p-6">
                  <span className="card-title text-xl font-semibold">
                    {item.title}
                  </span>
                  <span className="card-description text-sm">
                    {item.description}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default RightSideCarousel;
