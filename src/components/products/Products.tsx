import { useEffect, useState } from "react";
import Product from "./Product"
import Productfilter from "./Productfilter"
import { ProductServices } from "@/services/ProductService";
import ProductCardSkeleton from "@/ui/ProductCardSkeleton ";

// const products = [
//     {
//         id: 1,
//         image: "/images/door1.png",
//         name: "MDF Eshiklar",
//         size: "120x200 sm",
//         type: "1 qanotli",
//         label: "MDF",
//         labelColor: "text-green-600",
//         price: "1 000 000 so‘m",
//         oldPrice: "1 200 000 so‘m",
//         discount: true,
//         comments: 40,
//     },
//     {
//         id: 2,
//         image: "/images/door1.png",
//         name: "MDF Eshiklar",
//         size: "120x200 sm",
//         type: "1 qanotli",
//         label: "AKFA",
//         labelColor: "text-green-500",
//         price: "1 200 000 so‘m",
//         comments: 40,
//     },
//     {
//         id: 3,
//         image: "/images/door1.png",
//         name: "MDF Eshiklar",
//         size: "120x200 sm",
//         type: "1 qanotli",
//         label: "MDF",
//         labelColor: "text-green-600",
//         price: "1 050 000 so‘m",
//         oldPrice: "1 300 000 so‘m",
//         discount: true,
//         comments: 30,
//     },
//     {
//         id: 4,
//         image: "/images/door1.png",
//         name: "MDF Eshiklar",
//         size: "120x200 sm",
//         type: "1 qanotli",
//         label: "AKFA",
//         labelColor: "text-green-500",
//         price: "1 150 000 so‘m",
//         comments: 35,
//     },
//     {
//         id: 5,
//         image: "/images/door1.png",
//         name: "MDF Eshiklar",
//         size: "120x200 sm",
//         type: "1 qanotli",
//         label: "MDF",
//         labelColor: "text-green-600",
//         price: "900 000 so‘m",
//         oldPrice: "1 100 000 so‘m",
//         discount: true,
//         comments: 28,
//     },
//     {
//         id: 6,
//         image: "/images/door1.png",
//         name: "MDF Eshiklar",
//         size: "120x200 sm",
//         type: "1 qanotli",
//         label: "AKFA",
//         discount: true,
//         labelColor: "text-green-500",
//         price: "1 300 000 so‘m",
//         comments: 50,
//     },
// ]


function Products() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await ProductServices.getProducts();
                setData(res);
            } catch (error) {
                console.error('Mahsulotlarni olishda xatolik:', error);
            } finally {
                setInterval(() => {
                    setLoading(false);
                }, 2000)
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Productfilter title="Mahsulotlar" />
            <div className="md:px-5 sm:px-5 continer max-[640px]:px-3">
                {loading ? (
                    <>
                        <ProductCardSkeleton/>
                    </>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.map(product => (
                                <Product key={product.id} {...product} />
                            ))}
                        </div>
                        <p className='mt-11 text-center underline cursor-pointer'>Ko‘proq ko‘rish</p>
                    </>
                )}
            </div>
        </>
    );
}

export default Products;