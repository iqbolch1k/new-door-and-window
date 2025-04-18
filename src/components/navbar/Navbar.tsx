import location from '../../assets/images/icons/location.svg'
import phone from '../../assets/images/icons/phone_icon.svg'
function Navbar() {
  const flex_style = 'flex items-center'
  return (
    <div className='h-10 flex items-center  w-full bg-lightGray'>
      <div className={`${flex_style} justify-between md:px-5 sm:px-5 continer max-[640px]:px-3`}>
        <div className='flex items-center justify-center gap-2 cursor-pointer'>
          <img src={location} alt="location icon" />
          <p className='text-[12px] font-normal text-dark'>Toshkent</p>
        </div>
        <div className={`${flex_style} gap-10`}>
          <select className="text-dark text-[16px] bg-transparent px-1">
            <option value="uzb">Uzb</option>
            <option value="rus">Rus</option>
            <option value="eng">Eng</option>
          </select>
          <div className={`${flex_style} gap-2 cursor-pointer`}>
            <img src={phone} alt="phone icon" />
            <p className='text-[12px] font-normal text-dark'>+9998505040532</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar