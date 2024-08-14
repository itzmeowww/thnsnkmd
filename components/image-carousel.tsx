'use client'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "@/data/projects"
import Image from "next/image"
import { useEffect, useState } from "react"

const ImageCarousel = ({ project }: { project: Project }) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <>
            <Carousel className="w-full mx-auto" setApi={setApi}>
                <CarouselContent className="items-center">
                    {project.previews.map((preview, index) => (
                        <CarouselItem key={index} className={`flex flex-col items-center gap-2 w-full ${preview.height > preview.width && 'basis-1/2 md:basis-1/3'}`}>
                            <div className="p-1 border rounded-lg overflow-hidden">
                                <Image src={preview.url} height={preview.height} width={preview.width} alt="" className="rounded-sm overflow-hidden"></Image>
                            </div>
                            <span className="text-muted-foreground text-sm">{preview.alt}</span>
                        </CarouselItem>
                    ))}
                </CarouselContent >
                <CarouselPrevious className="max-sm:hidden" />
                <CarouselNext className="max-sm:hidden" />
            </Carousel>
            <div className="py-2 text-center text-xs text-muted-foreground">
                {current} / {count}
            </div>
        </>
    );
}

export default ImageCarousel;