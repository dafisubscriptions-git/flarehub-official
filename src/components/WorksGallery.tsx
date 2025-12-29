import work1 from '@/assets/gallery/work-1.png';
import work2 from '@/assets/gallery/work-2.png';
import work3 from '@/assets/gallery/work-3.png';
import work4 from '@/assets/gallery/work-4.png';
import work5 from '@/assets/gallery/work-5.png';
import work6 from '@/assets/gallery/work-6.png';
import work7 from '@/assets/gallery/work-7.png';
import work8 from '@/assets/gallery/work-8.png';
import work9 from '@/assets/gallery/work-9.png';

const WorksGallery = () => {
  const works = [work1, work2, work3, work4, work5, work6, work7, work8, work9];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
          Our <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
        </h2>
      </div>

      <div className="relative">
        <div className="inline-flex w-max flex-nowrap will-change-transform animate-scroll-left-mobile md:animate-scroll-left">

          {/*<div className="flex animate-scroll-left-mobile md:animate-scroll-left">
          {/* First set of images */}
          {works.map((work, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[400px] h-[300px] mx-4"
            >
              <img
                src={work}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {works.map((work, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[400px] h-[300px] mx-4"
            >
              <img
                src={work}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
