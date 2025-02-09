import { motion } from 'framer-motion'
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
  FaUsers,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className="relative bg-[#5e27ff] p-10 overflow-hidden text-white  ">
      {/* Animasyonlu İstatistik Kartları - Mobilde Gizli */}
      <div className="hidden sm:grid absolute top-5 left-1/2 transform -translate-x-1/2 grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {[
          { icon: FaChalkboardTeacher, count: '300+', label: 'Eğitmenler' },
          { icon: FaUserGraduate, count: '1000+', label: 'Öğrenciler' },
          { icon: FaBookOpen, count: '20,000+', label: 'Videolar' },
          { icon: FaUsers, count: '50,000+', label: 'Kullanıcılar' },
        ].map((istatistik, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl flex items-center p-6 gap-4 transform hover:scale-110 transition duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 120 }}
          >
            <istatistik.icon className="text-[#5e27ff] text-5xl" />
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {istatistik.count}
              </div>
              <div className="text-sm text-gray-500">{istatistik.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto mt-24">
        {/* Footer Üst Bölüm */}
        <div className="grid md:grid-cols-3 gap-12 p-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">AkademikEv</span>
            </div>
            <p className="text-gray-300">
              Uzman eğitmenler ve etkileyici içerikler ile kaliteli eğitim
              sunuyoruz. Dünya çapında binlerce öğrenciye katılın.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Hakkımızda</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Kurslar</li>
              <li className="hover:text-white cursor-pointer">İletişim</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Bize Ulaşın</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +90 212 555 0104</li>
              <li>✉️ destek@akademikev.com</li>
              <li>📍 123 Akademi Caddesi, İstanbul</li>
            </ul>
          </div>
        </div>

        {/* Footer Alt Bölüm */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6 text-sm text-gray-400">
          <p>© 2024 AkademikEv. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <i className="fa-brands fa-facebook text-xl hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-xl hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-xl hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-behance text-xl hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-dribbble text-xl hover:text-white cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
