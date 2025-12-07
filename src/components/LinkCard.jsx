import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const LinkCard = ({ title, description, icon: Icon, url, color = "bg-neutral-900" }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-5 rounded-2xl ${color} border border-neutral-800 flex items-center gap-5 overflow-hidden active:scale-98 transition-all duration-300 hover:border-neutral-600 hover:shadow-lg hover:shadow-neutral-900/50`}
      whileHover={{ y: -2 }}
    >
      {/* Icon Container with subtle bg */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">{Icon && <Icon size={22} />}</div>

      {/* Text */}
      <div className="flex-grow z-10">
        <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-neutral-400 text-sm font-medium line-clamp-1 group-hover:text-neutral-300 transition-colors">{description}</p>
      </div>

      {/* Hover Arrow */}
      <div className="flex-shrink-0 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
        <FaArrowRight size={16} />
      </div>
    </motion.a>
  );
};

export default LinkCard;
