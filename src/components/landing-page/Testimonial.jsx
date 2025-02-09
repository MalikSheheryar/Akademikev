import { motion } from 'framer-motion'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const yorumlar = [
  {
    id: 1,
    isim: 'Sinan',
    yorum:
      'Bu platform, mükemmel bir öğretmen bulmama yardımcı oldu! Notlarım önemli ölçüde yükseldi. Öğretmenler sabırlı, bilgili ve her öğrencinin öğrenme yolculuğunda başarılı olmasını sağlamak için özverili.',
    resim: 'https://randomuser.me/api/portraits/men/1.jpg',
    puan: 5,
  },
  {
    id: 2,
    isim: 'Emre',
    yorum:
      'Deneyimli öğretmenlerle bağlantı kurmanın ne kadar kolay olduğunu seviyorum. Dersler interaktif ve ilgi çekici, karmaşık kavramları anlamayı çok daha kolay hale getiriyor. Bu platformu şiddetle tavsiye ederim! ',
    resim: 'https://randomuser.me/api/portraits/women/2.jpg',
    puan: 4.5,
  },
  {
    id: 3,
    isim: 'Devran',
    yorum:
      'Harika bir hizmet! Öğretmenler bilgili, ulaşılabilir ve gerçekten öğrencilerin başarısıyla ilgileniyorlar. Zor konulardaki özgüvenim büyük ölçüde arttı.',
    resim: 'https://randomuser.me/api/portraits/men/3.jpg',
    puan: 4,
  },
]

const Yorumlar = () => {
  return (
    <div className="relative pb-8 px-6 overflow-hidden pt-8">
      {/* Uçan Elemanlar */}
      <div className="absolute top-16 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-40 blur-lg"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-16 bg-purple-300 rounded-full opacity-50"></div>

      {/* Başlık */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
        Yorumlar
      </h1>
      <p className="text-gray-600 text-sm text-center mb-12 font-bold">
        Öğrencilerimiz bizim hakkımızda ne düşünüyor?
      </p>

      {/* Yorumlar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {yorumlar.map((yorum, index) => (
          <motion.div
            key={yorum.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start text-left relative transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Uçan Yarım-Elyaf */}
            <div className="absolute -bottom-5 -right-5 w-32 h-16 bg-purple-200 rounded-tl-full opacity-50"></div>

            {/* Resim & İsim Bölümü */}
            <div className="flex items-center w-full mb-4">
              <img
                src={yorum.resim}
                alt={yorum.isim}
                className="w-14 h-14 rounded-full border-2 border-purple-500"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {yorum.isim}
                </h3>
                <div className="flex text-yellow-500">
                  {yildizOlustur(yorum.puan)}
                </div>
              </div>
            </div>

            {/* Yorum Bölümü */}
            <p className="text-gray-600 text-sm italic leading-relaxed relative z-10">
              {yorum.yorum}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Yıldız Puanı Oluşturma Fonksiyonu
const yildizOlustur = (puan) => {
  const yildizlar = []
  for (let i = 1; i <= 5; i++) {
    if (i <= puan) {
      yildizlar.push(<FaStar key={i} />)
    } else if (i - 0.5 === puan) {
      yildizlar.push(<FaStarHalfAlt key={i} />)
    } else {
      yildizlar.push(<FaRegStar key={i} />)
    }
  }
  return yildizlar
}

export default Yorumlar
