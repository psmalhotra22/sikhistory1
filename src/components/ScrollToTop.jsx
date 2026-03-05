import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-12 right-8  bg-transparent"
          aria-label="Scroll to top"
        >
          {/* Top HUD line (LONGER) */}
          <span
            className="block mx-auto mb-1 w-px"
            style={{
              height: "56px",
              background:
                "linear-gradient(to top, transparent, rgba(0,255,255,.9))",
            }}
          />

          {/* Arrow */}
          <motion.span
            className="block text-cyan-400 text-4xl font-bold text-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            style={{
              textShadow:
                "0 0 10px rgba(0,255,255,.9), 0 0 28px rgba(0,255,255,.6)",
            }}
          >
            ↑
          </motion.span>

          {/* Bottom HUD tick (SLIGHTLY LONGER) */}
          <span
            className="block mx-auto mt-1"
            style={{
              width: "32px",
              height: "4px",
              background:
                "linear-gradient(to right, transparent, rgba(0,255,255,.9), transparent)",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
