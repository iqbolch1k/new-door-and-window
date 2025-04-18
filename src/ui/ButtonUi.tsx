interface ButtonUiProps {
    text: string;
    width?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
}

function ButtonUi({
    text,
    width = "full",
    onClick,
    type = "button",
    disabled = false,
    className = ""
}: ButtonUiProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-${width} mt-5 h-12 bg-black text-white rounded-xl font-semibold hover:bg-[#000000d9] transition-all disabled:opacity-50 ${className}`}
        >
            {text}
        </button>
    );
}

export default ButtonUi;
