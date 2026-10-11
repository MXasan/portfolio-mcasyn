import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PhotoSection({
  projects,
}: {
  projects: Array<{ id: number; image: string; title: string; link: string }>;
}) {
  return (
    <>
      <Carousel className="carusel w-full max-w-xs ">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="parent-photoCard">
                <Card className="flex justify-items-center">
                  {/* <a href={item.link} data-cursor="up"> */}
                  <CardContent className="photoCard-content mini-gap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-xs md:max-w-md"
                  />
                  </CardContent>
                  {/* </a> */}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </div>
      </Carousel>
    </>
  );
}

export default PhotoSection;
