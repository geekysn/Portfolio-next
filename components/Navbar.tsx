

import {motion} from "framer-motion"
import React from 'react';

const navItems = [
    {name:"About", link:"#about"},
    {name:"Projects", link:"#projects"},
    {name:"Skills", link:"#skills"},
    {name:"Contact", link:"#contact"}
]

interface NavbarProps {
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
    let n = name.split(" ").map((word) => {
        return word[0].toUpperCase();
    }).join("");

    return (
        <div>
            <motion.a
            href="#"
            className="text-xl font-bold text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {n}
          </motion.a>
        </div>
    );
}

export default Navbar;