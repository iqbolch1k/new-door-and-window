import { useNavigate } from 'react-router-dom'
import shop from '../../assets/images/icons/product_light.svg'
interface ProductProps {
    id: number;
    name: string;
    category: number;
    brand: number;
    is_discounted: boolean;
    price: number;
    next_price: number;
    rating?: number;
    review_count: number;
    thumbnail: string;
    images: string[];
    colors: string[];
    sizes: string[];
    in_stock: boolean;
    like: boolean;
}
function Product({ name, sizes, price, is_discounted, id, thumbnail, next_price, category }: ProductProps) {

    const navigate = useNavigate();
    return (
        <div>
            <div className='border border-[#F3F3F3] rounded-xl w-full'>
                <div className="relative w-full h-[370px] bg-lightGray rounded-t-xl overflow-hidden">
                    {is_discounted && (
                        <span className="absolute top-0 left-0 bg-red-500 text-white text-[16px] h-7 w-24 flex items-center justify-center rounded-tl-xl z-10">
                            Chegirma
                        </span>
                    )}
                    <img
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                        onClick={() => navigate(`product/${id}`)}
                        src={thumbnail}
                        alt={name}
                    />
                </div>

                <div className='flex justify-between pt-5 px-5'>
                    <div>
                        <h3 className='text-[18px] text-dark font-medium'>{name}</h3>
                        <p className='text-[14px] font-normal text-[#858585]'>{sizes}* {category} qanotli</p>
                    </div>
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className='text-[#9E9E9E] text-[10px]'>{price} komment</p>
                    </div>
                </div>
                <p className='px-5 text-[10px] text-[#44E054]'>{ }</p>
                <div className='flex items-center justify-between px-5 pb-5'>
                    <p className='text-2xl font-bold'>{next_price} so'm</p>
                    <div className='w-10 h-10 flex items-center justify-center border bg-dark rounded-md cursor-pointer'>
                        <img className='' src={shop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product