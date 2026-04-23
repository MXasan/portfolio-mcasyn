    import * as React from "react"
    import { Card, CardContent } from "@/components/ui/card";
    import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from "@/components/ui/carousel";

    export function RightSideCarousel() {
    return (
        <Carousel className="carusel w-full max-w-[12rem] sm:max-w-xs">
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="parent-card p-1">
                <Card>
                    <CardContent className="card-content flex aspect-square items-center justify-center p-6">
                    <span className="card-text text-4xl font-semibold">{index + 1}</span>
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

