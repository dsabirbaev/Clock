import { useState, useEffect } from "react";



const Header = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);

    useEffect(() => {
        
        localStorage.setItem('darkMode', darkMode);
        darkMode ?  document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

    }, [darkMode])
    return (
        <section>
            <div className="px-10 h-[60px] flex items-center justify-end">
                <div onClick={() => setDarkMode(!darkMode)}  className="cursor-pointer">
                    <span >
                        {
                            darkMode ? <i title="Switch to light" className='bx bx-sun text-[28px] dark:text-white'></i> :
                                <i title="Switch to dark" className='bx bx-moon text-[28px]'></i>

                        }
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Header;