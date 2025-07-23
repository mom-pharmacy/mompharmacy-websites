function NavButton({children , onClick}){
    return <button onClick={onClick} className=" flex items-center px-4 py-2 bg-white text-black rounded-full font-semibold">
        {children}
    </button>
}

export default NavButton