import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Users,
  Image,
  Landmark,
  HeartHandshake,
  ScrollText,
  Mail,
  Music,
  HomeIcon,
  Target,
  Eye,
  Goal,
  Sparkles,
} from "lucide-react";

/* ---------------- SIMPLE ANIMATIONS ---------------- */
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

/* ---------------- NAVBAR COMPONENT ---------------- */
export default function Navbar({ setIsMenuOpen }) {
  const [open, setOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const openMenu = () => {
    setOpen(true);
    setIsMenuOpen?.(true);
  };

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdowns({});
    setIsMenuOpen?.(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16">

          {/* LOGO - SAFFRON COLOR */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <span className="text-xl font-semibold text-saffron tracking-wide">
              Sikh History
            </span>
            <span className="text-2xl text-saffron">ੴ</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={openMenu}
            className="ml-auto md:hidden text-2xl text-white hover:text-white transition"
          >
            ☰
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex ml-auto space-x-8">
            {menuItems.map(item =>
              item.children ? (
                <li key={item.label} className="relative group">
                  <span className="flex items-center gap-2 cursor-pointer text-white hover:text-white transition">
                    <item.icon size={18} className="text-white" />
                    {item.label}
                  </span>

                  <div className="absolute left-0 mt-2 w-56 rounded-lg bg-navy border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition">
                    {item.children.map(sub => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-white"
                      >
                        <sub.icon size={16} className="text-white" />
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </li>
              ) : (
                <NavItem key={item.to} {...item} />
              )
            )}
          </ul>
        </div>
      </nav>

      {/* BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-72 bg-navy text-white z-50 shadow-xl"
          >
            <div className="flex justify-between items-center h-16 px-4 border-b border-white/10">
              <span className="font-medium text-white">Menu</span>
              <button onClick={closeMenu} className="text-2xl text-white hover:text-white">
                ✕
              </button>
            </div>

            <ul className="p-6 space-y-5">
              {menuItems.map(item =>
                item.children ? (
                  <motion.li key={item.label} variants={itemVariants}>
                    <button
                      onClick={() =>
                        setOpenDropdowns(p => ({
                          ...p,
                          [item.label]: !p[item.label],
                        }))
                      }
                      className="w-full flex justify-between items-center text-lg text-white"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon size={20} className="text-white" />
                        {item.label}
                      </span>
                      <span>{openDropdowns[item.label] ? "−" : "+"}</span>
                    </button>

                    <AnimatePresence>
                      {openDropdowns[item.label] && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-6 mt-3 space-y-3 overflow-hidden"
                        >
                          {item.children.map(sub => (
                            <MobileNavItem
                              key={sub.to}
                              {...sub}
                              onClick={closeMenu}
                            />
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ) : (
                  <motion.li key={item.to} variants={itemVariants}>
                    <MobileNavItem {...item} onClick={closeMenu} />
                  </motion.li>
                )
              )}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </>
  );
}

/* ---------------- MENU DATA ---------------- */
const menuItems = [
  { to: "/home", label: "Home", icon: HomeIcon },
  { to: "/introduction", label: "Introduction", icon: BookOpen },
  { to: "/gurus", label: "Gurus", icon: Home },
  { to: "/sakhiyan", label: "Sakhiyan", icon: BookOpen },
  { to: "/shaheeds", label: "Shaheeds", icon: Users },
  {
    label: "Sikh Gallery",
    icon: Image,
    children: [
      { to: "/gallery", label: "Gallery", icon: Image },
      { to: "/gurudwara", label: "Gurudwara", icon: Landmark },
    ],
  },
  { to: "/beliefs", label: "Beliefs", icon: HeartHandshake },
  {
    label: "Nitnem",
    icon: ScrollText,
    children: [
      { to: "/nitnem", label: "Nitnem", icon: ScrollText },
      { to: "/nitnem/SpiritualSongs", label: "Spiritual Songs", icon: Music },
    ],
  },
  { to: "/purpose", label: "Purpose", icon: Sparkles },
];

/* ---------------- SUB COMPONENTS ---------------- */
function NavItem({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2 text-white hover:text-white transition"
    >
      <Icon size={18} className="text-white" />
      {label}
    </NavLink>
  );
}

function MobileNavItem({ to, label, icon: Icon, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 text-lg text-white hover:text-white transition"
    >
      <Icon size={20} className="text-white" />
      {label}
    </NavLink>
  );
}
