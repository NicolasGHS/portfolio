import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectImagesProps = {
	images: string[];
};

export const ProjectImages = ({images}: ProjectImagesProps) => {
	return (
		<div>
			<Carousel>
				<CarouselContent>
					{images.map((image, index) => (
						<CarouselItem key={index}>
							<img src={image} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};
