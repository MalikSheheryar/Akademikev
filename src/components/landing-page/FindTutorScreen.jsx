import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLightbulb,
  FaBrain,
  FaKey,
  FaBook,
} from 'react-icons/fa'
import tutorImage from '../../assets/tutor-image.png' // Ana eğitmen resmi
import smallCircleImage from '../../assets/small-circle.png' // Küçük ek resim

const FindTutorScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('find-tutor')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="find-tutor"
      className="mx-12 my-10 flex flex-col md:flex-row items-center relative mt-16"
    >
      {/* Sol Bölüm (Resim ve Dekoratif Öğeler) */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Ana Eğitmen Resmi */}
        <motion.img
          src={tutorImage}
          alt="Eğitmen"
          className="rounded-lg w-72 md:w-80"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        />

        {/* Küçük Dairesel Resim */}
        <motion.img
          src={smallCircleImage}
          alt="Küçük Ek Resim"
          className="absolute top-[-20px] right-[20px] w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Dekoratif Baloncuk */}
        <motion.div
          className="absolute w-32 h-16 rounded-tl-full rounded-tr-full bg-purple-300 opacity-40"
          style={{ bottom: '-20px', left: '10px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1.1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Ek Yüzen Öğeler */}
        <motion.div
          className="absolute w-6 h-6 bg-purple-400 rounded-full opacity-50"
          style={{ top: '10px', left: '-30px' }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        />
        <motion.div
          className="absolute w-10 h-10 bg-indigo-400 rounded-full opacity-30"
          style={{ bottom: '-30px', right: '10px' }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
      </div>

      {/* Sağ Bölüm (Metin & Simgeler) */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex flex-col"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold leading-tight">
          Doğru eğitmeni bulmak hiç bu kadar{' '}
          <span className="text-[#5e27ff]">kolay olmamıştı.</span>
        </h2>

        {/* Öğren, Öğret, Düşün Simgeleri */}
        <div className="flex gap-6 my-6 mt-8">
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-[#5e27ff] text-xl" />
            <p className="text-lg font-medium">Öğren</p>
          </div>
          <div className="flex items-center gap-2">
            <FaChalkboardTeacher className="text-[#5e27ff] text-xl" />
            <p className="text-lg font-medium">Öğret</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLightbulb className="text-[#5e27ff] text-xl" />
            <p className="text-lg font-medium">Düşün</p>
          </div>
        </div>

        {/* Slogan ve Simgeler */}
        <div className="my-6">
          <div className="flex items-center gap-3 text-gray-600 text-lg">
            <FaBrain className="text-[#5e27ff] text-xl" />
            <p className="m-0">
              Zihinleri güçlendiriyoruz, her derste bir adım daha.
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-lg mt-2">
            <FaKey className="text-[#5e27ff] text-xl" />
            <p className="m-0">Eğitimle potansiyelinizi açığa çıkarın.</p>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-lg mt-2">
            <FaBook className="text-[#5e27ff] text-xl" />
            <p className="m-0">Bilgi yolculuğunuz burada başlıyor.</p>
          </div>
        </div>

        {/* Hareketli Buton */}
        <motion.button
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Eğitmenleri Keşfet
        </motion.button>
      </motion.div>
    </div>
  )
}

export default FindTutorScreen
