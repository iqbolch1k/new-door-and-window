import { ReactNode } from "react"

function Productfilter({title}: {title:ReactNode}) {
    return (
        <div className="md:px-5 sm:px-5 continer max-[640px]:px-3 mb-3">
            <h2 className="text-dark text-[35px] font-medium mt-12 mb-3">{title}</h2>
            <div className="flex justify-between items-center border-y py-3 border-boderColor px-4 mb-10">
                <nav className="flex items-center gap-12 max-[823px]:hidden">
                    <li className="hover:text-dark cursor-pointer text-[#BBBBBB]">Eshiklar</li>
                    <li className="hover:text-dark cursor-pointer text-[#BBBBBB]">Derazalar</li>
                    <li className="hover:text-dark cursor-pointer text-[#BBBBBB]">Ko'p sotilgan</li>
                    <li className="hover:text-dark cursor-pointer text-[#BBBBBB]">Chegirma</li>
                    <li className="hover:text-dark cursor-pointer text-[#BBBBBB]">Brendlar</li>
                </nav>
                <nav className="hidden max-[823px]:block">
                    <select>
                        <option value="Eshiklar">Eshiklar</option>
                        <option value="Derazalar">Derazalar</option>
                        <option value="Ko'p sotilgan">Ko'p sotilgan</option>
                        <option value="Chegirma">Chegirma</option>
                        <option value="Brendlar">Brendlar</option>
                    </select>
                </nav>
                <button className="px-8 border py-1 rounded-lg text-[14px] text-[#A4A4A4]">Filtirlash</button>
            </div>
        </div>
    )
}

export default Productfilter