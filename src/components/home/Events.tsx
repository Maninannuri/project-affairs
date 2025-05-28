import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import { useState, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const events = [
  {
    id: 1,
    title: 'Vashisht',
    date: 'March 15-16, 2025',
    image: 'https://www.techsac.iiitdm.ac.in/pic1.jpeg',
    description: "Vashisht is a much awaited three-day tech-fest that assessed participants in a variety of subjects, from robots to entrepreneurship, coding to designing. It inspired a love of technology, opening students' eyes to new avenues for creativity and drawing more than 3000+ pupils from all across the nation.",
    location: 'IIIT Kancheepuram Campus',
    participants: '3000+',
    category: 'Annual Techfest',
    color: 'bg-blue-600'
  },
  {
    id: 2,
    title: 'Code Warriors',
    date: 'April 8, 2025',
    image: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Competitive programming contest challenging participants with algorithmic problems of varying difficulty.',
    location: 'Online',
    participants: '300+',
    category: 'Competition',
    color: 'bg-green-600'
  },
  {
    id: 3,
    title: 'Design Jam!',
    date: 'May 22, 2025',
    image: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'A 24-hour design marathon where participants create stunning UI/UX designs for given problem statements.',
    location: 'IIIT Kancheepuram Campus',
    participants: '150+',
    category: 'Workshop',
    color: 'bg-purple-600'
  },
  {
    id: 4,
    title: 'TechTalks',
    date: 'June 10, 2025',
    image: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Speaker series featuring industry experts sharing insights on emerging technologies and career opportunities.',
    location: 'Online & Offline',
    participants: '400+',
    category: 'Seminar',
    color: 'bg-red-600'
  },
  {
    id: 5,
    title: 'AI&ML Bootcamp',
    date: 'July 5-7, 2025',
    image: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Intensive 3-day bootcamp covering machine learning fundamentals, algorithms, and practical applications.',
    location: 'IIIT Kancheepuram Campus',
    participants: '200+',
    category: 'Bootcamp',
    color: 'bg-yellow-600'
  },
];

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < events.length - 1) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current?.scrollTo({
        left: (currentSlide + 1) * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current?.scrollTo({
        left: (currentSlide - 1) * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Events & Hackathons"
          subtitle="Join our exciting events that challenge your skills and expand your knowledge"
          centered
        />

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`rounded-full p-2 bg-white shadow-md hover:bg-gray-100 transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              disabled={currentSlide === events.length - 1}
              className={`rounded-full p-2 bg-white shadow-md hover:bg-gray-100 transition-colors ${currentSlide === events.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="overflow-x-hidden scroll-smooth"
          >
            <div className="flex w-full">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-64 md:h-auto relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`${event.color} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>

                        <div className="flex items-center text-gray-600 mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{event.date}</span>
                        </div>

                        <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{event.participants} Participants</span>
                          </div>
                        </div>

                        <Button href="#" variant="primary">Register Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  sliderRef.current?.scrollTo({
                    left: index * sliderRef.current.offsetWidth,
                    behavior: 'smooth'
                  });
                }}
                className={`h-3 w-3 rounded-full mx-1 transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="#" variant="outline">View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default Events;