import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import InstallButton from "./InstallButton";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const softFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

/* ---------------- CAROUSEL IMAGES ---------------- */
const images = [
  "/images/guruNanak.jpg",
  "/images/shreeChandJi.jpg",
  "/images/babaDeepSingh ji.jpg",
  "/images/guru-gobind-singh.jpg",
  "/images/charSahib.jpg",
  "/images/golden-temple.jpg",
];

/* ---------------- DAILY THOUGHTS ---------------- */
const thoughts = [
  "ਸਚ ਦੇ ਰਸ ਵਿਚ ਜੀਵੋ, ਦੁਨੀਆ ਦੇ ਮੋਹ ਵਿਚ ਨਹੀਂ। – Guru Nanak Dev Ji",
  "ਸੇਵਾ ਹੀ ਸੱਚੀ ਧਰਮ ਦੀ ਪਹਿਚਾਣ ਹੈ। – Guru Gobind Singh Ji",
  "ਅਹੰਕਾਰ ਨੂੰ ਛੱਡੋ, ਨਮ੍ਰਤਾ ਵਿੱਚ ਜੀਵੋ।",
  "ਵਿਚਾਰਾਂ ਦੀ ਸ਼ਕਤੀ ਨਾਲ ਮਨ ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ।",
  "ਸੱਚ, ਧਰਮ ਅਤੇ ਨਿਰਭੀਕਤਾ – ਇਹੀ ਜੀਵਨ ਦਾ ਰਾਹ ਹੈ।",
  "ਪਿਆਰ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ ਸਭ ਨਾਲ ਪੇਸ਼ ਆਓ।",
  "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਕਹਿੰਦੇ ਸਨ ਦੇਖੀ ਚੱਲ ਮਰਦਾਨਿਆ ਰੰਗ ਕਰਤਾਰ ਦੇ ਆਪੇ ਮਰ ਜਾਂਦੇ ਜਿਹੜੇ ਦੂਜਿਆਂ ਨੂੰ ਮਾਰਦੇ  ",
  "ਜਦੋਂ ਕੋਈ ਹੱਥ ਤੇ ਸਾਥ ਦੋਨੋ ਛੱਡ ਦੇਵੇ ਤਾ ਰੱਬ ਉਂਗਲੀ ਫੜ੍ਹਨ ਵਾਲਾ ਵੀ ਭੇਜ ਦਿੰਦਾ ਹੈ "
];

/* ---------------- DAILY THOUGHT ---------------- */
function getDailyThought() {
  const dayIndex = new Date().getDate() % thoughts.length;
  return thoughts[dayIndex];
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(false);
  const [dailyThought, setDailyThought] = useState(getDailyThought());
  const [showWelcome , setShowWelcome] = useState(false);

  /* ---------------- IMAGE CAROUSEL ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 900);
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if(!hasVisited){
      setShowWelcome(true);
      localStorage.setItem("hasVisited", "true");
    }
  },[]);

  return (
    <section className="relative overflow-hidden">
    {showWelcome && (
  <motion.div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="bg-white max-w-md w-full p-8 rounded-2xl shadow-2xl text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-navy">
         Welcome to Sikh History
      </h2>

      <p className="text-gray-600 mb-6">
        Explore the divine teachings, rich history, and spiritual wisdom of Sikh Gurus.
      </p>

      <button
        onClick={() => setShowWelcome(false)}
        className="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
      >
        Enter 
      </button>
    </motion.div>
  </motion.div>
)}


      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-20">

        <motion.div initial="hidden" animate="visible">

          {/* ---------- IMAGE CAROUSEL ---------- */}
          
          <div className="relative h-64 md:h-96 mb-8 overflow-hidden rounded-3xl shadow-2xl border border-white/30 backdrop-blur-xl">

            <motion.img
              key={index}
              src={images[index]}
              alt="Sikh History"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 4 }}
            />

            {/* Light Aura Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Light Effect */}
            {flash && (
              <>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 0.6 }}
                />

                <motion.div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute w-1/2 h-1 bg-white/60 blur-2xl top-1/2 -translate-y-1/2 -translate-x-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "120%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </motion.div>
              </>
            )}
          </div>
          <div className="flex justify-center my-10">
  <InstallButton />
</div>

          {/* ---------- DAILY THOUGHT CARD ---------- */}
          <motion.div
            className="max-w-3xl mx-auto mb-16 p-6 md:p-8 rounded-2xl 
            bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl text-center"
            variants={softFade}
          >
            <h3 className="text-xl font-semibold text-navy mb-3">
              Thought of the Day
            </h3>

            <motion.p
              key={dailyThought}
              className="text-gray-700 text-lg italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {dailyThought}
            </motion.p>
          </motion.div>

          {/* ---------- TITLE ---------- */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-navy mb-6 text-center"
            variants={fadeUp}
          >
            Learning Sikh History & Gurmat Wisdom
          </motion.h1>

          {/* ---------- SUBTITLE ---------- */}
          <motion.p
            className="text-lg text-gray-700 text-center mb-20 max-w-3xl mx-auto"
            variants={fadeUp}
            custom={1}
          >
            A sacred learning space exploring Sikh history, teachings of the Gurus,
            and the eternal spiritual principles of Gurmat.
          </motion.p>

          {/* ---------- CONTENT GRID ---------- */}
          <div className="grid md:grid-cols-2 gap-10">

            {[
              {
                title: "Sikh History",
                items: [
                  "Life and teachings of Guru Nanak Dev Ji",
                  "Journey of the Ten Sikh Gurus",
                  "Formation of Sikh institutions",
                  "Resistance against injustice",
                ],
              },
              {
                title: "Teachings of the Sikh Gurus",
                items: [
                  "Naam Simran",
                  "Truthful living",
                  "Equality and justice",
                  "Spiritual–worldly balance",
                ],
              },
              {
                title: "Sikh View on Siddhi",
                items: [
                  "No encouragement of miracles",
                  "Rejection of ego-based powers",
                  "Humility as true spirituality",
                  "Inner change over display",
                ],
              },
              {
                title: "True Spiritual Achievement",
                items: [
                  "Freedom from Haumai",
                  "Living in Hukam",
                  "Selfless Seva",
                  "Divine awareness",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl 
                border border-white/40 shadow-lg hover:shadow-2xl transition-all"
              >
                <h2 className="text-xl font-semibold mb-4 text-navy">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}
