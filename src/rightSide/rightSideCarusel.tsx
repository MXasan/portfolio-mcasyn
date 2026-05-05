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
    img: "https://picsum.photos/seed/proj1/600/400",
    title: "Project 1",
    description: "Description for project 1",
    linkForProject: "https://example.com/project1",
  },
  {
    img: "https://picsum.photos/seed/proj2/600/400",
    title: "Project 2",
    description: "Description for project 2",
    linkForProject: "https://example.com/project2",
  },
  {
    img: "https://picsum.photos/seed/proj3/600/400",
    title: "Project 3",
    description: "Description for project 3",
    linkForProject: "https://example.com/project3",
  },
  {
    img: "https://picsum.photos/seed/proj4/600/400",
    title: "Project 4",
    description: "Description for project 4",
    linkForProject: "https://example.com/project4",
  },
  {
    img: "https://picsum.photos/seed/proj5/600/400",
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
          <CarouselItem key={index}>
            <div className="parent-card">
              <Card className="flex justify-items-center">
                <a href={item.linkForProject} className="cursor-Up">
                  <CardContent className="card-content flex items-center justify-center flex-col">
                    <img src={item.img} alt={item.title} />
                    <div className="carusel-info">
                      <span className="card-title text-xl font-semibold">
                        {item.title}
                      </span>
                      <span className="card-description text-sm">
                        {item.description}
                      </span>
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
    </Carousel>
  );
}
export default RightSideCarousel;
