const ProductCardSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="animate-pulse bg-white rounded-xl shadow-md p-5">
                <div className="h-[240px] bg-[#E0E0E0] rounded-md mb-4">
                </div>
                <div className="h-4 bg-[#E0E0E0] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#E0E0E0] rounded w-1/2 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="h-4 bg-[#E0E0E0] rounded w-1/4"></div>
                    <div className="h-8 w-8 bg-[#E0E0E0] rounded"></div>
                </div>
            </div>
            <div className="animate-pulse bg-white rounded-xl shadow-md p-5">
                <div className="h-[240px] bg-[#E0E0E0] rounded-md mb-4">
                </div>
                <div className="h-4 bg-[#E0E0E0] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#E0E0E0] rounded w-1/2 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="h-4 bg-[#E0E0E0] rounded w-1/4"></div>
                    <div className="h-8 w-8 bg-[#E0E0E0] rounded"></div>
                </div>
            </div>
            <div className="animate-pulse bg-white rounded-xl shadow-md p-5">
                <div className="h-[240px] bg-[#E0E0E0] rounded-md mb-4">
                </div>
                <div className="h-4 bg-[#E0E0E0] rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-[#E0E0E0] rounded w-1/2 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="h-4 bg-[#E0E0E0] rounded w-1/4"></div>
                    <div className="h-8 w-8 bg-[#E0E0E0] rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
