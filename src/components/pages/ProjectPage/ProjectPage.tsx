import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCards from './ProjectCards';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
const ProjectPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate('/coursepage');
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate('/quizpage');
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
    navigate('/competetionspage');
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate('/aboutuspage');
  }, [navigate]);

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-4xl text-nero font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        logoColor="#1f95f2"
        onLogoClick={onLogoClick}
        onCoursesClick={onCoursesClick}
        onQuizzesClick={onQuizzesClick}
        onCompetetionsClick={onCompetetionsClick}
        onAboutUsClick={onAboutUsClick}
        coursesColor="#000"
        competetionsColor="#000"
        aboutUsColor="#000"
        quizzesColor="#000"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-start py-0 px-[15px] gap-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-sm">
              Coding Projects By Kids
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-md">
            <div className="self-stretch relative leading-[150%] whitespace-pre-wrap">
              Fun way to learn coding for kids by doing projects
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
              View A Projects
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-57@2x.png"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-4xl\ text-black1">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              Projects By Kids
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
            <div className="flex-1 relative leading-[150%]">
              Great collection of fun and interactive coding projects for kids
              to assess and acquire computer science knowledge.
            </div>
          </div>
        </div>
        <ProjectCards />
        <div
          className="absolute left-[0] top-[-70px]"
          data-scroll-to="projectsContainer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
