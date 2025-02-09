import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaFlask,
  FaCamera,
  FaMusic,
  FaChartLine,
  FaMoneyBillWave,
  FaPaintBrush,
  FaBrain,
  FaLanguage,
} from 'react-icons/fa'

const subjects = [
  {
    name: 'Bilgisayar Bilimi',
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
  },
  { name: 'Kimya', icon: <FaFlask className="text-4xl text-green-500" /> },
  {
    name: 'Fotoğrafçılık',
    icon: <FaCamera className="text-4xl text-yellow-500" />,
  },
  { name: 'Müzik', icon: <FaMusic className="text-4xl text-[#5e27ff]" /> },
  {
    name: 'Pazarlama',
    icon: <FaChartLine className="text-4xl text-red-500" />,
  },
  {
    name: 'Finans',
    icon: <FaMoneyBillWave className="text-4xl text-teal-500" />,
  },
  {
    name: 'Sanat ve Tasarım',
    icon: <FaPaintBrush className="text-4xl text-pink-500" />,
  },
  {
    name: 'Psikoloji',
    icon: <FaBrain className="text-4xl text-indigo-500" />,
  },
  {
    name: 'Diller',
    icon: <FaLanguage className="text-4xl text-orange-500" />,
  },
]

const Topsubs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mt-10"
    >
      <h3 id="caladea" className="text-3xl font-bold">
        Keşfedin <span></span>
        <span id="purple" className="purpleTxt">
          Popüler Konuları
        </span>
      </h3>
      <p className="text-gray-600 mb-5">
        Kategorilere tıklayın ve tüm kursları keşfedin
      </p>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-5xl mx-auto my-6 relative"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {subjects.map((subject, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center border border-gray-200 mt-8 mb-4"
            >
              {subject.icon}
              <h4 className="mt-3 text-lg font-semibold">{subject.name}</h4>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default Topsubs
