import search from '../../assets/images/icons/search_icon.png'
import shop from '../../assets/images/icons/shoppiing_icon.png'
import like from '../../assets/images/icons/like_icon.png'
function Header() {
    return (
        <div className="md:px-5 sm:px-5 continer max-[640px]:px-3">
            <div className="flex items-center justify-between py-5 border-b border-boderColor">
                <div className='text-xl text-dark uppercase font-semibold'>
                    Eshik deraza
                </div>
                <div className='flex items-center justify-between h-10 border border-boderColor rounded-lg max-w-[31%] max-[640px]:max-w-[60%] w-full '>
                    <input className='w-[90%] px-4 bg-white' type="text" />
                    <img className='w-6 h-6 mx-2' src={search} alt="" />
                </div>
                <div className='flex items-center gap-2 max-[640px]:hidden'>
                    <div className='cursor-pointer'>
                        <img src={shop} alt="" />
                    </div><br />
                    <div className='cursor-pointer'>
                        <img src={like} alt="" />
                    </div>
                    <div className='rounded-md px-3 py-[7px] cursor-pointer hover:bg-lightGray text-dark'>
                        Kirish
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header