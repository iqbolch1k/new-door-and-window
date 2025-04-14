import { useNavigate } from 'react-router-dom'
import shop from '../../assets/images/icons/product_2.png'
import product from '../../assets/images/png-imges/product_img.png'
interface ProductProps {
    id: number
    image?: string
    name?: string
    size?: string
    type?: string
    label?: string
    labelColor?: string
    price?: string
    oldPrice?: string
    discount?: boolean
    comments?: number
}
function Product({ name, size, type, label, price, discount, comments, id }: ProductProps) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='border border-[#F3F3F3] rounded-xl w-full'>
                <div className='bg-lightGray rounded-t-xl relative'>
                    {discount && (
                        <span className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-tl-xl">
                            Chegirma
                        </span>)}
                    <img onClick={() => navigate(`product/${id}`)} src={product} alt={name} />
                </div>
                <div className='flex justify-between pt-5 px-5'>
                    <div>
                        <h3 className='text-[18px] text-dark font-medium'>{name}</h3>
                        <p className='text-[14px] font-normal text-[#858585]'>{size}* {type}</p>
                    </div>
                    <div>
                        <p>yulduz</p>
                        <p className='text-[#9E9E9E] text-[10px]'>{comments} komment</p>
                    </div>
                </div>
                <p className='px-5 text-[10px] text-[#44E054]'>{label}</p>
                <div className='flex items-center justify-between px-5 pb-5'>
                    <p className='text-2xl font-bold'>{price}</p>
                    <div className='w-10 h-10 flex items-center justify-center border bg-dark rounded-md cursor-pointer'>
                        <img className='' src={shop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product