function ErrorModal({ title, className }: { title: string, className?: string }) {
    return (
        <div>
            <div
                className={`
                    modal ${className}
                    absolute top-10 left-1/2 z-40 -translate-x-1/2
                    transition-all duration-500 ease-in-out
                `}
            >
                <h4 className="text-red-600 text-center font-medium bg-white py-2 px-5 rounded-xl shadow-md">
                    {title}!
                </h4>
            </div>
        </div>
    );
}
export default ErrorModal
