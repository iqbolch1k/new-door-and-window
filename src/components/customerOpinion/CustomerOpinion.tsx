import diffrence from '../../assets/images/png-imges/difference.png'
import tinish from '../../assets/images/icons/mijozlar_bg_icon.png'
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
        <div className='md:px-5 sm:px-5 continer max-[640px]:px-3 '>
            <h2 className="text-dark text-[35px] font-medium mb-7">Mijozlar fikri</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-8 my-16'>
                <div>
                    <Carousel
                        opts={{
                            align: "center",
                        }}
                        orientation="vertical"
                        className="h-[520px] w-full flex flex-col items-center justify-center max-[1024px]:h-[330px]"
                    >
                        <CarouselContent className="-mt-1 h-full">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1">
                                    <div className="p-1">
                                        <div className="bg-[#F3F3F3] px-6 py-4 rounded-2xl shadow-md max-w-[550px] relative max-[1024px]:w-full hover:bg-dark hover:text-[#FFFFFF]">
                                            <p className="text-gray-700 text-[14px] mb-4 hover:text-[#FFFFFF]">“{testimonial.message}”</p>
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={avatarUrl}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="text-gray-900 font-semibold hover:text-[#FFFFFF]">{testimonial.name}</p>
                                                    <p className="text-gray-500 text-sm hover:text-[#FFFFFF]">{testimonial.position}</p>
                                                </div>
                                                <div className='absolute right-11 bottom-0'>
                                                    <img src={tinish} alt="" />
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
                <div className='w-full max-[1024px]:hidden'>
                    <img src={diffrence} />
                </div>
            </div>
        </div>
    )
}

export default CustomerOpinion