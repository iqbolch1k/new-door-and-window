import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import Productfilter from "./Productfilter"
import { useEffect, useState } from "react";
import productdetail from '../../assets/images/png-imges/productDetail.png'
import CustomerOpinion from "../customerOpinion/CustomerOpinion";
import Todorder from "../toOrder/ToOrder";
import Footer from "../footer/Footer";
interface Productproms {
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
const products = [
    {
        id: 1,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "MDF",
        labelColor: "text-green-600",
        price: "1 000 000 so‘m",
        oldPrice: "1 200 000 so‘m",
        discount: true,
        comments: 40,
    },
    {
        id: 2,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "AKFA",
        labelColor: "text-green-500",
        price: "1 200 000 so‘m",
        comments: 40,
    },
    {
        id: 3,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "MDF",
        labelColor: "text-green-600",
        price: "1 050 000 so‘m",
        oldPrice: "1 300 000 so‘m",
        discount: true,
        comments: 30,
    },
    {
        id: 4,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "AKFA",
        labelColor: "text-green-500",
        price: "1 150 000 so‘m",
        comments: 35,
    },
    {
        id: 5,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "MDF",
        labelColor: "text-green-600",
        price: "900 000 so‘m",
        oldPrice: "1 100 000 so‘m",
        discount: true,
        comments: 28,
    },
    {
        id: 6,
        image: "/images/door1.png",
        name: "MDF Eshiklar",
        size: "120x200 sm",
        type: "1 qanotli",
        label: "AKFA",
        discount: true,
        labelColor: "text-green-500",
        price: "1 300 000 so‘m",
        comments: 50,
    },
]
function ProductDetail() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState<Productproms | null>(null)
    useEffect(() => {
        const resalt = products.find(prev => prev.id === Number(id))
        setProduct(resalt || null)
    })
    return (
        <div>
            <Navbar />
            <Header />
            <Productfilter title='' />
            <div className="md:px-5 sm:px-5 continer max-[640px]:px-3 mb-20">
                <div className="flex gap-1">
                    <p onClick={() => navigate('/')} className="cursor-pointer text-[16px] text-[#6D6D6D] hover:text-dark">Bosh sahifa • </p>
                    <p onClick={() => navigate('/')} className="cursor-pointer text-[16px] text-[#6D6D6D] hover:text-dark">Eshiklar • </p>
                    <p onClick={() => navigate('/')} className="cursor-pointer text-[16px] text-[#6D6D6D] hover:text-dark">{product?.name} • {product?.type} {product?.label} eshik</p>
                </div>
                <div className="mb-20 flex gap-10 mt-5">
                    <div>
                        <img src={productdetail} alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-[35px] font-medium text-[#141311]">{product?.name}</h3>
                            <p className="text-[14px] text-[#9E9E9E]">yulduz {product?.comments} komment</p>
                        </div>
                        <h1 className="text-[45px] font-bold text-[#141311]">{product?.price}</h1>
                        <div>
                            <p className="text-[16px] text-[#606060] ">Rang</p>
                            <div className="flex gap-3 pt-2">
                                <div className="cursor-pointer w-[60px] h-[60px] border border-[#5A5A5A] rounded-lg bg-[#5D412A]"></div>
                                <div className="cursor-pointer w-[60px] h-[60px] border border-[#5A5A5A] rounded-lg bg-[#E3B90F]"></div>
                                <div className="cursor-pointer w-[60px] h-[60px] border border-[#5A5A5A] rounded-lg bg-[#FFFFFF]"></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#606060] ">O'lchamlar</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                                <p className="py-1 px-2 border flex items-center justify-center text[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]">120x200 sm</p>
                                <p className="py-1 px-2 border flex items-center justify-center text[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]">130x200 sm</p>
                                <p className="py-1 px-2 border flex items-center justify-center text[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]">120x200 sm</p>
                                <p className="py-1 px-2 border flex items-center justify-center text[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]">120x200 sm</p>
                                <p className="py-1 px-2 border flex items-center justify-center text[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]">120x200 sm</p>
                                <p className="py-1 px-2 border flex items-center justify-center text[16px] rounded-md hover:bg-[#444444] hover:text-white cursor-pointer text-[#494949] border-[#BEBEBE]">120x200 sm</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-[16px] text-[#606060] ">Breandlar</p>
                            <p className="inline-block py-1 px-2 rounded-md bg-[#444444] text-[16px] text-[#fff] ">{product?.label}</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="py-4 px-10 text-[18px] text-[#fff] bg-[#444444] rounded-lg">Savatga qo‘shish</button>
                            <button className="py-4 px-7 text-[18px] text-[#fff] bg-[#141311] rounded-lg">Sotib olish</button>
                        </div>
                    </div>
                </div>
            </div>
            <CustomerOpinion />
            <Todorder />
            <Footer />
        </div>
    )
}

export default ProductDetail