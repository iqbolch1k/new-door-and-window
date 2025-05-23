import telegram from '../../assets/images/icons/telegram.svg'
import instagram from '../../assets/images/icons/instagram.svg'
import facebook from '../../assets/images/icons/faceBook.svg'
import gmail_icon from '../../assets/images/icons/gmail_icon.svg'
import phone from '../../assets/images/icons/phone_icon.svg'
import location from '../../assets/images/icons/location.svg'
function Footer() {
  return (
    <div className="md:px-5 sm:px-5 continer max-[640px]:px-3">
      <div className="border-y border-boderColor grid grid-cols-1 md:grid-cols-3 gap-6 py-10 mt-1 bg-gray-50 text-sm text-gray-800">
        <ul className="flex flex-col gap-2">
          <li className=" font-semibold  text-dark text-xl">Eshik deraza</li>
          <li className="text-[15px] font-normal">Qo'llab quvvatlash</li>
          <li className="text-[15px] font-normal flex items-center gap-1"><img src={phone} alt="" /> +998 99 999 99 99</li>
          <li className="text-[15px] font-normal flex items-center gap-1"><img src={location} alt="" /> Olmazor, Toshkent</li>
          <li className="text-[15px] font-normal flex items-center gap-1"><img src={gmail_icon} alt="" /> Eshikrom@gmail.com</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className=" font-semibold  text-dark text-xl">Ma'lumotlar</li>
          <li className="text-[15px] font-normal">Biz haqimizda</li>
          <li className="text-[15px] font-normal">Blog</li>
          <li className="text-[15px] font-normal">To'lov va yetkazib berish</li>
          <li className="text-[15px] font-normal" >To'lovni qaytarish va tovarlarni almashtirish</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className=" font-semibold  text-dark text-xl">Qo'shimcha</li>
          <li className="text-[15px] font-normal">Eco-friendly</li>
          <li className="text-[15px] font-normal">Bonus va aksiyalar</li>
          <li className="text-[15px] font-normal">Servis markazlari</li>
          <li className="text-[15px] font-normal" >Ommaviy oferta</li>
        </ul>
      </div>
      <div className="flex justify-between items-center py-4">
        <p className='text-[12px] font-normal text-[#808080] max-[546px]:hidden'>© 2024. 000 "Eshikrom store"</p>
        <p className='text-[12px] font-normal text-[#808080]'>Ommaviy oferta</p>
        <p className='text-[12px] font-normal text-[#808080]'>Maxfiylik siyosati</p>
        <ul className='flex items-center gap-5'>
          <img src={telegram} alt="telegram icon" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram " />
        </ul>
      </div>
    </div>
  )
}

export default Footer