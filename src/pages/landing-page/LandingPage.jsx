import Navbar from '../../components/landing-page/Navbar'
import Mainscreen from '../../components/landing-page/MainScreen'
import Popularteachers from '../../components/landing-page/PopularTeachers'
import Topsubs from '../../components/landing-page/Topsubs'
import FindTutorScreen from '../../components/landing-page/FindTutorScreen'
import Testimonial from '../../components/landing-page/Testimonial'
import Footer from '../../components/landing-page/Footer'
const LandingPage = () => {
  return (
    <div className="p-0 m-0">
      <Navbar />
      <Mainscreen />
      <Popularteachers />
      <Topsubs />
      <FindTutorScreen />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default LandingPage
