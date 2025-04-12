import bgImg from '../../assets/images/png-imges/to order.png'
function Todorder() {
    return (
        <div className="md:px-5 sm:px-5 continer rounded-lg max-[640px]:px-3">
            <div className='relative mt-20 mb-12 flex flex-col justify-center'>
                <div className='absolute left-40 max-[950px]:left-24 max-[720px]:left-14 max-[640px]:left-10 max-[543px]:left-6 flex flex-col items-start justify-center'>
                    <h2 className='text-3xl max-[950px]:text-2xl font-medium text-white'>
                        Uyingizga mos bo'lgan uslubni <br />
                        biz bilan yarating
                    </h2>
                    <p className='text-sm font-light text-white pt-4'>Uslubni yaratishda bizning maxsus xodimlarimiz sizga yordam berishadi</p>
                    <button className='text-dark rounded-lg px-8 py-2 bg-white mt-10 max-[950px]:px-6 max-[950px]:py-1 max-[950px]:text-[12px]'>Buyurtma qilish</button>
                </div>
                <img className='w-full object-cover h-[300px] max-[950px]:h-[270px] rounded-lg ' src={bgImg} alt="" />
            </div>
        </div>
    )
}

export default Todorder