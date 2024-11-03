import "./App.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./componenets/Footer";
import Banners from "./componenets/Banners/Banners";
import ThingsWeOffer from "./componenets/carriculum/ThingsWeOffer";
import CoursesWeOffer from "./componenets/coursesweoffer/courses";
import HeroSection from "./componenets/HeroSection";
import Navbar from "./componenets/navbar/Navbar";
import Courses from "./componenets/pages/our-courses/Courses";
import Domains from "./componenets/pages/our-domains/Domains";
import DomainCourse from "./componenets/pages/our-domains/domain-courses/DomainCourse";
import Home_video from "./componenets/Home_video";
import Design2 from "./componenets/designs for homepage/Design2";
import Design3 from "./componenets/designs for homepage/Design3";
import CourseInfo from "./componenets/pages/course-info/CourseInfo";
import BookAMeeting from "./componenets/meeting-Forms/BookAMeeting";
import ContactForm from "./componenets/meeting-Forms/ContactForm";
import AboutUs from "./componenets/pages/about-us/AboutUs";
import TryComponent from "./componenets/TryComponent";
import Educators from "./componenets/pages/for-educators/Educators";
import MainCarousel from "./componenets/carousel/MainCarousel";
import SubscribeNewsletter from "./componenets/newzletter/SubscribeNewsletter";
import EngineeringProjects from "./componenets/pages/engineering-projects/EngineeringProjects";
import ViewEngineeringProjects from "./componenets/pages/engineering-projects/view-projects/ViewEngineeringProjects";
import DomainEngineering from "./componenets/pages/engineering-projects/projectEnggDomains/DomainEngineering";
import ViewEngineeringProjectsTwo from "./componenets/pages/engineering-projects/view-projects/try/ViewEngineeringProjectsTwo";
import DetailedProjectView from "./componenets/pages/engineering-projects/view-projects/detailed-project-view/DetailedProjectView";
import ViewEngineeringProjectsThree from "./componenets/pages/engineering-projects/view-projects/try2/ViewEngineeringProjectsThree";

// import NavbarOne from "./componenets/navbar/navbar-try/NavbarOne.jsx";

function App() {
  const homeimages = [
    "/images/MainCarouselImages/1.jpg",
    "/images/MainCarouselImages/2.jpg",
    "/images/MainCarouselImages/3.jpg",
    "/images/MainCarouselImages/4.jpg",
    "/images/MainCarouselImages/5.jpg",
  ];
  return (
    <>
      <Navbar />
      {/* <NavbarOne /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Banners name="Discover what we offer and how we can help you!" />
              <Home_video />
              <Banners name="Things We Offer!" />
              <ThingsWeOffer />
              <Banners name="Courses We Offer!" />
              <CoursesWeOffer />
              <Banners name="Our Level-Based Teaching Curriculum" />
              <Design2 />

              {/* <Design1 /> */}
            </div>
          }
        />
        <Route path="/our-domains" element={<Domains />} />
        <Route path="/our-course" element={<Courses />} />
        <Route path="/for-educators" element={<Educators />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/domain-course" element={<DomainCourse />} />
        <Route path="/course/:title" element={<CourseInfo />} />
        <Route path="/get-in-touch" element={<BookAMeeting />} />
        <Route path="/show-interest" element={<ContactForm />} />
        <Route path="/engineering" element={<EngineeringProjects />} />
        <Route
  path="/engineering/:projectType/:domainType/:subdomain?/:subSubdomain?"
  element={<ViewEngineeringProjectsThree />}
/>


        {/* <Route
          path="/engineering/:projectType/domain/:domainType/"
          element={<ViewEngineeringProjectsThree />}
        /> */}

        <Route
          path="/engineering/:projectType/domains"
          element={<DomainEngineering />}
        />
        {/* <Route
          path="/engineering/major-projects/domain/iot/project-detailed-view"
          element={<DetailedProjectView />}
        /> */}
        <Route
          path="/engineering/:projectType/domain/:domainType/:subdomain/:projectTitle"
          element={<DetailedProjectView />}
        />

        {/* <Route path="/try" element={<TryComponent />} /> */}
      </Routes>
      <SubscribeNewsletter />
      <Footer />
    </>
  );
}

export default App;
