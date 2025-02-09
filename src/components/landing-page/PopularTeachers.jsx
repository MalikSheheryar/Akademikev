import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaPlayCircle, FaHeadphones } from 'react-icons/fa'
import teacher1 from '../../assets/teacher-1.png'
import teacher2 from '../../assets/teacher-2.png'
import teacher3 from '../../assets/teacher-3.png'
import teacher4 from '../../assets/teacher-4.png'
import teacher5 from '../../assets/teacher-5.png'
import teacher6 from '../../assets/teacher-6.png'
import course1 from '../../assets/course-1.png'
import course2 from '../../assets/course-2.png'
import course3 from '../../assets/course-3.png'
import course4 from '../../assets/course-4.png'
import course5 from '../../assets/course-5.png'
import course6 from '../../assets/course-6.png'

const teachers = [
  {
    name: 'Cem Yılmaz',
    role: 'Python Geliştiricisi',
    image: teacher1,
    course: 'Denetimli Makine Öğrenimi: Regresyon ve Sınıflandırma',
    lessons: 25,
    rating: 5,
    courseImage: course1,
  },
  {
    name: 'Ayşe Demir',
    role: 'Yapay Zeka Uzmanı',
    image: teacher2,
    course: 'İleri Seviye Veri Bilimi ve Yapay Zeka Uygulamaları',
    lessons: 30,
    rating: 4,
    courseImage: course2,
  },
  {
    name: 'Mehmet Aksoy',
    role: 'Kimya Uzmanı',
    image: teacher3,
    course: 'Kuantum Kimyası ve Organik Kimyaya Giriş',
    lessons: 20,
    rating: 5,
    courseImage: course3,
  },
  {
    name: 'Fatma Yıldız',
    role: 'Fizik Profesörü',
    image: teacher4,
    course: 'Görelilik ve Uzay-Zaman',
    lessons: 18,
    rating: 5,
    courseImage: course4,
  },
  {
    name: 'Mustafa Karaca',
    role: 'Bilgisayar Bilimi Öncüsü',
    image: teacher5,
    course: 'Bilgisayar Tarihi ve Algoritmalar',
    lessons: 22,
    rating: 5,
    courseImage: course5,
  },
  {
    name: 'Zeynep Şahin',
    role: 'Elektrik Mühendisi',
    image: teacher6,
    course: 'Elektriğin Geleceği ve Kablosuz Teknolojiler',
    lessons: 28,
    rating: 4,
    courseImage: course6,
  },
]

const PopularTeachers = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('popular-teachers')
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
    <div id="popular-teachers" className="md:mt-20 mt-10 md:mx-16 mx-6 mb-16">
      {/* Header Section */}
      <div className="md:flex md:justify-between mb-5">
        <div className="md:w-4/5 ml-0 md:ml-9">
          <h1 className="md:text-3xl text-2xl mb-3 font-semibold">
            En <span className="text-[#5e27ff]">Popüler Öğretmenlerimiz</span>
          </h1>
          <p className="text-gray-600">
            En iyi derslerimize, ünlü eğitmenlerimiz ve enstitülerimizle
            katılın.
          </p>
        </div>
        <div className="my-5 md:w-1/5">
          <a
            className="text-[#5e27ff] font-semibold hover:underline transition"
            href="/"
          >
            Explore Teachers →
          </a>
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-9 ">
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full md:w-80"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Course Image */}
            <img
              src={teacher.courseImage}
              alt="Course"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              {/* Lessons Completed & Stars */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaPlayCircle className="text-[#5e27ff] text-lg" />
                  <span className="text-base font-semibold">
                    {teacher.lessons} lessons completed
                  </span>
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(teacher.rating)}
                  {'☆'.repeat(5 - teacher.rating)}
                </div>
              </div>
              {/* Course Title */}
              <h5 className="text-base font-semibold mt-3">{teacher.course}</h5>
            </div>
            <hr />

            {/* Teacher Section */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={teacher.image}
                  alt="Instructor"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{teacher.name}</p>
                  <p className="text-xs text-gray-500">{teacher.role}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-[#5e27ff] text-white px-3 py-2 rounded-full hover:bg-purple-700 transition text-sm">
                <FaHeadphones className="text-lg" />
                Contact
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PopularTeachers
