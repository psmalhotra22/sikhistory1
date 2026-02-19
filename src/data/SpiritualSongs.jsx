import { motion } from "framer-motion";
import { Music, PlayCircle } from "lucide-react";

// Later you can move this to /data/songs.js
const SpiritualSongsData = [
  {
    id: "hind-ki-chadar",
    title: "Hind Ki Chadar",
    artist: "Satinder Sartaaj",
    cover: "/songs/hindKiChadar.jpg", 
    youtube: "https://youtu.be/Sj3Lwp07KxU?si=aCUDXBVhA52LsZ1t",
  },
  {
    id: "aarti-{Aqeedat-e-Sartaaj}",
    title: "AARTI {Aqeedat-e-Sartaaj}",
    artist: "Satinder Sartaaj",
    cover: "/songs/aarti.jpg", 
    youtube: "https://youtu.be/QxEL53vdjmc?si=QuROkjcW9luL5EMN",
  },
  {
    id: "dhan-guru-nanak",
    title: "Dhan Guru Nanak",
    artist: "Diljit Dosanjh",
    cover: "/songs/dhanGuruNanak.jpg", 
    youtube: "https://youtu.be/JVSshOFPJBk?si=9UNXXYvxgzRFySmg",
  },
   {
    id: "disde-ne-nanak",
    title: "Disde Ne Nanak ",
    artist: "Diljit Dosanjh",
    cover: "/songs/disdeNeNanak.webp", 
    youtube: "https://youtu.be/BN5FVimgkLU?si=HuzyKRXmUoZCiXd5",
  },
  {
    id: "so-dukh-kaisa-paave",
    title: "So Dukh Kaisa Paave",
    artist: "Jassie Gill & Jaya Kishori ",
    cover: "/songs/soDukh.jpg", 
    youtube: "https://youtu.be/Yppzo6dTpzY?si=bfBp0Sm3Prjjz7k_",
  },
 

  // 🔽 Newly added tracks

  {
    id: "nanak-naam-rakhaya",
    title: "Nanak Naam Rakhaya",
    artist: "Diljit Dosanjh",
    cover: "/songs/nanakNaamRakhaya.jpg",
    youtube: "https://youtu.be/5OWoIQPz6zI?si=tRskOyOruaC7Jc7g",
  },
  {
    id: "mittar-pyare-nu",
    title: "Mittar Pyare Nu",
    artist: "Amrinder Gill",
    cover: "/songs/mittarPyareNu.jpg",
    youtube: "https://youtu.be/dkRgveC7Zgg?si=2273UjcDKgy8V405",
  },
  {
    id: "satgur-nanak-pargatya",
    title: "Satgur Nanak Pargatya",
    artist: "Traditional / Shabad",
    cover: "/songs/satgurNanakPargatya.jpg",
    youtube: "https://youtu.be/tpeGNzrnPN0?si=bQwuYxPd8VWASFY7",
  },
  {
    id: "aar-nanak-paar-nanak",
    title: "Aar Nanak Paar Nanak",
    artist: "Diljit Dosanjh",
    cover: "/songs/aarNanakPaarNanak.jpg",
    youtube: "https://youtu.be/gikrOo1EGI4?si=9fwSwxFLCc7qNON5",
  },
  {
    id: "nanak-aadh-jugaadh-jiyo",
    title: "Nanak Aadh Jugaadh Jiyo",
    artist: "Diljit Dosanjh",
    cover: "/songs/nanakAadhJugaadh.jpg",
    youtube: "https://youtu.be/1nzrf0VESw0?si=ML0VV-hxovUpwJC0",
  },
  {
    id: "bade-chava-naal",
    title: "Bade Chava Naal",
    artist: "Amrinder Gill",
    cover: "/songs/badeChavaNaal.jpg",
    youtube: "https://youtu.be/EjjkODT2um8?si=oYtHg8kPi5KGV8To",
  },
  {
    id: "nanki-da-veer",
    title: "Nanki Da Veer",
    artist: "Diljit Dosanjh",
    cover: "/songs/nankiDaVeer.jpg",
    youtube: "https://youtu.be/539It5JM0nU?si=evMaTMCBU-DpgIji",
  },
  {
    id: "gobind-de-lal",
    title: "Gobind De Lal",
    artist: "Diljit Dosanjh",
    cover: "/songs/gobindDeLal.jpg",
    youtube: "https://youtu.be/0_EFE4pJJcM?si=oZ8e-ZIc2F9FXR4c",
  },
  {
    id: "baba-nandh-singh-ji",
    title: "Baba Nandh Singh Ji",
    artist: "Diljit Dosanjh",
    cover: "/songs/babaNandhSinghJi.jpg",
    youtube: "https://youtu.be/6oSBeCJ71eg?si=dwMmGAhQHM2vKLJt",
  },
  {
    id: "fateh-singh-di-fateh",
    title: "Fateh Singh Di Fateh",
    artist: "Rajvir Jawanda",
    cover: "/songs/fatehSinghDiFateh.jpg",
    youtube: "https://youtu.be/vrxn-y3FiKk?si=7WopdtrPpE4AtDrf",
  },
  {
    id: "sai-ve-sadi-fariyad",
    title: "Sai Ve Sadi Fariyad Tere Tai",
    artist: "Satinder Sartaaj",
    cover: "/songs/saiVeSadiFariyad.jpg",
    youtube: "https://youtu.be/oWY6hbbHQpI?si=j9VIu9ECRFDr2Cj-",
  },
  {
    id: "dhiaan-dhar-mehsoos-kar",
    title: "Dhiaan Dhar Mehsoos Kar",
    artist: "Diljit Dosanjh",
    cover: "/songs/dhiaanDharMehsoos.jpg",
    youtube: "https://youtu.be/KFKjYJFmPmo?si=RTZyduU3T-g9G3Ul",
  },
];


export default function SpiritualSongs() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-navy via-navy/95 to-black text-white">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-saffron mb-4"
        >
          Sikh Spiritual Songs
        </motion.h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          A divine collection of Gurbani, Kavishri & spiritual songs
          celebrating Sikh history, sacrifice, and faith.
        </p>
      </section>

      {/* SONGS GRID */}
      <section className="max-w-7xl mx-auto px-4">
        {SpiritualSongsData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Music className="w-16 h-16 text-saffron mb-4 opacity-80" />
            <h2 className="text-2xl font-semibold mb-2">
              Songs Coming Soon
            </h2>
            <p className="text-white/60 max-w-md">
              Spiritual tracks like <span className="text-saffron">"Hind Ki Chadar"</span>,
              <span className="text-saffron"> "Dhan Guru Nanak"</span> and many more
              will be added here.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SpiritualSongsData.map((song, i) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-saffron/50 transition"
              >
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h3 className="text-xl font-semibold mb-1 text-saffron">
                  {song.title}
                </h3>
                <p className="text-white/70 mb-4">{song.artist}</p>

                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-saffron text-black px-4 py-2 rounded-full hover:bg-saffron/90 transition"
                >
                  <PlayCircle size={18} />
                  Play on YouTube
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
