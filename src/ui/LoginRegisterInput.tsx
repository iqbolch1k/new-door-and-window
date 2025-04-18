function LoginRegisterInput({
    title,
    type,
    placeholder,
    name,
    onChangle,
    defaultValue
}: {
    type: string,
    placeholder?: string,
    title?: string,
    name?: string,
    onChangle?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    defaultValue?: string
}) {
    return (
        <div>
            <div className="w-3/4 mx-auto flex flex-col gap-2">
                <label htmlFor="">{title}</label>
                <input className="border border-[#E4E4E4] rounded-xl h-14 text-[16px] font-medium px-4 placeholder:text-[#BBBBBB]" value={defaultValue} type={type} placeholder={placeholder} name={name} onChange={onChangle} />
            </div>
        </div>
    )
}

export default LoginRegisterInput