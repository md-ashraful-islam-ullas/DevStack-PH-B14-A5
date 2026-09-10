import navLogo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-300 bg-white">
            <div className="container mx-auto flex justify-between items-center h-22">
                <img className="h-10" src={navLogo} alt="" />

                <ul className="flex gap-10 items-center">
                    <li className="text-[#D91B7E]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex gap-5 items-center">
                    <p className="cursor-pointer">Sign In</p>
                    <button className="bg-[#D91B7E] text-white px-5 py-3 rounded-3xl cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;