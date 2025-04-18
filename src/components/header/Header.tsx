import search from '../../assets/images/icons/search_icon.svg'
import shop from '../../assets/images/icons/product_dark.svg'
import like from '../../assets/images/icons/like_icon.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
    const [modal, setModal] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className="md:px-5 sm:px-5 continer max-[640px]:px-3 relative">
            <div className="flex items-center justify-between py-5 border-b border-boderColor">
                <div className='text-xl text-dark uppercase font-semibold'>
                    Eshik deraza
                </div>
                <div className='flex items-center justify-between h-10 border border-boderColor rounded-lg max-w-[51%] max-[640px]:max-w-[60%] w-full max-[640px]:hidden'>
                    <input className='w-[90%] px-4 bg-white' type="text" placeholder='Mahsulotlarni izlash' />
                    <img className='w-6 h-6 mx-2' src={search} alt="" />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='hidden  cursor-pointer max-[640px]:block' onClick={() => setModal(true)}>
                        <img className='w-6 h-6 mx-2' src={search} alt="" />
                    </div>
                    <div className='cursor-pointer'>
                        <img src={shop} alt="" />
                    </div><br />
                    <div className='cursor-pointer'>
                        <img src={like} alt="" />
                    </div>
                    <div onClick={() => navigate('/login')} className='rounded-md px-3 py-[7px] cursor-pointer hover:bg-lightGray text-dark'>
                        Kirish
                    </div>
                </div>


            </div>
            <div className={`${modal ? "block" : 'hidden'} absolute top-[-40px] w-full left-0 p-3 h-[100vh] bg-[#101010ee] z-20`}>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-chevron-left text-boderColor text-xl cursor-pointer" onClick={() => setModal(false)}></i>
                    <div className='flex items-center justify-between h-10 border border-boderColor rounded-lg w-full'>
                        <input className='w-[90%] px-4 bg-transparent text-white placeholder:text-white' type="text" placeholder='Mahsulotlarni izlash' />
                        <img className='w-6 h-6 mx-2' src={search} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header