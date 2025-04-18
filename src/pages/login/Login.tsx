import LoginRegisterInput from "@/ui/LoginRegisterInput"
import Home from "../home/Home"
import ButtonUi from "@/ui/ButtonUi"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import ErrorModal from "@/ui/ErrorModal";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        {
            username: '',
            location: '',
            phone: '+998'
        }

    )
    const [error, setError] = useState<boolean>(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.username || formData.phone || formData.location) {
            setError(true)
        } else {
            setError(false)
            console.log("foydalanuvchi malumotlari", formData);
        }
        setTimeout(() => {
            setError(false)
        }, 2000)
        setFormData({
            username: '',
            location: '',
            phone: '+998'
        });
    };
    console.log(error);

    return (
        <div className="relative h-screen overflow-hidden">
            <div className="h-full overflow-y-auto">
                <Home />
                <ErrorModal
                    title="Inputlar bo‘sh bo‘lmasligi kerak"
                    className={`${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
                />

            </div>
            <div className="absolute top-0 w-full h-screen bg-[#000000ca] z-20 flex flex-col items-center justify-center p-5">
                <div className="max-w-[500px] w-full max-h-[529px] h-full bg-white rounded-xl p-4 relative">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-[30px] font-medium text-[#000] text-center">Ro‘yxatdan o‘tish</h2>
                            <p className="text-center text-[14px] font-light text-[#000]">Iltimos quyidagi ma’lumotlarni kiriting</p>
                        </div>
                        <form className="flex flex-col gap-2 " onSubmit={handleSubmit} >
                            <LoginRegisterInput type="text" name="username" placeholder='F.I.SH kiriting' title="F.I.SH" onChangle={handleChange} defaultValue={formData.username} />
                            <LoginRegisterInput type="text" name="location" placeholder='Yashash manzilingizni kiriting' title="Yashash manzil" onChangle={handleChange} defaultValue={formData.location} />
                            <LoginRegisterInput type="text" name="phone" placeholder='' title="Telefon raqam" onChangle={handleChange} defaultValue={formData.phone} />
                            <div className="flex items-center gap-2 mx-auto">
                                <input type="checkbox" className="p-2" />
                                <p>Ommaviy <span>oferta</span></p>
                            </div>
                            <ButtonUi text="Keyingi" type="submit" />
                        </form>
                    </div>
                    <div className="absolute top-0 right-2 text-2xl" onClick={() => navigate('/')}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login