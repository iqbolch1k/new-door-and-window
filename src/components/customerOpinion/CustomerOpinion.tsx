import diffrence from '../../assets/images/png-imges/difference.png'
import tinish from '../../assets/images/icons/mijozlar_bg_icon.svg'
import avatarUrl from '../../assets/images/png-imges/avatar.png'
// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
function CustomerOpinion() {
    const testimonials = [
        {
            name: "Ali Valiyev",
            position: "Frontend Developer",
            message: "Just wanted to drop a note to say how impressed I was with your customer service team. They solved my issue in no time and made sure I was happy every step!",
        },
        {
            name: "Dilnoza Karimova",
            position: "Product Manager",
            message: "Just wanted to drop a note to say how impressed I was with your customer service team. They solved my issue in no time and made sure I was happy every step!",
        },
        {
            name: "Jamshid Rustamov",
            position: "UI/UX Designer",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolor tempora cupiditate dolores vitae unde minima sapiente vel omnis sit cum similique deserunt!",
        },
        {
            name: "Mukhammad Ali",
            position: "Fullstack Developer",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolor tempora cupiditate dolores vitae unde minima sapiente vel omnis sit cum similique deserunt!",
        },
        {
            name: "Zarina Rakhmatova",
            position: "QA Engineer",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolor tempora cupiditate dolores vitae unde minima sapiente vel omnis sit cum similique deserunt!",
        },
    ]
    return (
        <div className="md:px-5 sm:px-5 continer max-[640px]:px-3 flex flex-col gap-14">
            <h2 className="text-dark text-4xl sm:text-3xl md:text-4xl font-semibold sm:text-left mt-12">
                Mijozlar fikri
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="w-full">
                    <Carousel
                        opts={{ align: "center" }}
                        orientation="vertical"
                        className="h-[520px] max-[768px]:h-[250px] w-full flex flex-col items-center justify-center "
                    >
                        <CarouselContent className="-mt-1 h-full ">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-3">
                                    <div className="p-2">
                                        <div className="bg-[#F3F3F3] hover:bg-dark transition-colors duration-300 text-gray-800 hover:text-white px-6 py-5 rounded-2xl shadow-lg max-[768px]:h-[220px] max-[768px]:py-10 relative flex flex-col justify-between">
                                            <p className="text-sm mb-5 max-[768px]:mt-4">“{testimonial.message}”</p>
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={avatarUrl}
                                                    alt="User avatar"
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-semibold">{testimonial.name}</p>
                                                    <p className="text-sm text-gray-500 hover:text-white">{testimonial.position}</p>
                                                </div>
                                                <div className="absolute right-5 bottom-4 w-8 h-8">
                                                    <img src={tinish} alt="quote icon" className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="w-full flex justify-center lg:justify-end max-[1025px]:hidden">
                    <img src={diffrence} alt="Difference" className="rounded-xl shadow-md max-w-full h-auto" />
                </div>
            </div>
        </div>

    )
}

export default CustomerOpinion