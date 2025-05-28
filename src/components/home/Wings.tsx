import { useState } from 'react';
import { Code, Server, PenTool, Cpu, BarChart, Globe, ShieldCheck, Laptop } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const wings = [
  {
    id: 'mars',
    name: 'MaRS',
    icon: <img src="./images/mars.png" className="club-icon" />,
    description: 'We are Mars Rover Students (MaRS) Club from Indian Institute of Information Technology, Design & Manufacturing, Kancheepuram, a team of 40 interdisciplinary students, interested in building robots and autonomous systems. Currently, we are focusing on building autonomous UGVs (specifically rovers) and robotic arms.Our problem statement revolves around the exploration of inhabitable zones. Our goal is to build a system that can withstand any possible terrain. Currently, to reach our goals, we, Team SHUNYA (from MaRS Club), are participating in different rover challenges(IRC, URC, ARCh, ERC) at the global level to train our systems.Recently we secured 3rd Rank in Asia (6th Rank Globally) in the Finals of European Rover Challenge (ERC) Remote-Edition & 3rd Rank in India (21st Rank Globally) in the Finals of European Rover Challenge (ERC) Onsite-Edition.',
    technologies: ['Robot Operating System(ROS)', 'Fusion 360', 'C++', 'Python', 'Computer Vision'],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'epic',
    name: 'EPiC Club',
    icon: <img src="./images/epic.png" className="club-icon" />,
    description: 'The Entrepreneurship and Investment Club (EPIC), lends a helping hand to shape your dream into a commercial reality. The aim is to provide the necessary platform for the students with the ambition and determination to pursue the life long journey of becoming an entrepreneur. EPIC encourages ingenious thinking and provokes students to generate novel ideas making it truly the “centre” for innovation in the commercial sector.',
    technologies: ['Business Model Canvas', 'Market Research Tools', 'Pitch Deck Creation', 'Financial Modeling'],
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'gdsc',
    name: 'GDSC IIITDM',
    icon: <img src="./images/gdsc.png" className="club-icon" />,
    description: '“Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
    technologies: ['Android Development', 'Flutter', 'Firebase', 'GCP', 'ML'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'ipd',
    name: 'IPD club',
    icon: <img src="./images/ipd.png" className="club-icon" />,
    description: 'Welcome to the world of innovation and sustainability, where design meets technology, society, and the environment in perfect harmony. Introducing the Integrated Product Design club, or IPD for short, where creative minds converge to shape the future through their passion for design that transcends boundaries. At IPD, we believe in the power of synergy, bringing together diverse perspectives and skillsets. With a deep appreciation for the interconnectedness of design, technology, society, and the environment, we invite you to embark on a journey of creativity, purpose, and positive impact with us.',
    technologies: ['SolidWorks', 'AutoCAD', 'Fusion 360', '3D Printing', 'PLM'],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'optica',
    name: 'Optica IIITDM Students Chapter',
    icon: <img src="./images/optica.png" className="club-icon" />,
    description: 'OPTICA (formerly known as OSA) mission is to promote the generation, application, and archiving of knowledge in optics and photonics and to disseminate this knowledge worldwide.',
    technologies: ['OSS', 'Laser Systems', 'Photonics', 'Spectroscopy'],
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 'auv',
    name: 'AUV Society',
    icon: <img src="./images/auv.png" className="club-icon" />,
    description: 'A group of undergraduate engineering students collaborating in an interdisciplinary society dedicated to designing and building underwater systems and vehicles for participation in diverse underwater robotics competitions. With a profound understanding of mechanical, electronics, and software engineering, we exploit our theoretical knowledge to create underwater vehicles capable of exploring the expansive ocean depths.',
    technologies: ['ROS', 'Gazebo Simulation', 'Computer Vision', 'SLAM'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'cs',
    name: 'CS CLub',
    icon: <img src="./images/cs.png" className="club-icon" />,
    description: 'Here at the CS Club, we act as a gateway for students to enter the Computer Science Community and Industry. We strive to educate, train, and guide students as they build towards a profession in the CS Industry. We are not just a club, we are an independent body where students learn together, help each other sharpen their skills and create their future in the industry. We help students passionate in the field of Computer Science by providing lectures and activities on the newest branches of Computer Science, training them in the exciting sport of competitive programming, hackathons, CTFs. Introducing students to the Computer Science Industry by hosting Industrial Talks and Research Projects.',
    technologies: ['DSA', 'CP', 'Web Development', 'ML', 'Vision Control'],
    color: 'from-lime-400 to-lime-600'
  },
  {
    id: 'robo',
    name: 'Robotis Club',
    icon: <img src="./images/roboticsc.png" className="club-icon" />,
    description: 'Robotics plays a major role in making our day to day life easier. It unifies various branches of engineering and also symbolises the importance of one branch in the other. This promotes hands-on and cooperative learning and also engages students in problem-solving and higher-order thinking. People taking part in the sessions with dedication get exposure to many other areas apart from their syllabus.The organization is centered around a platform for members and non-member students with a passion for robotics to come together and develop projects in the domain of robotics and to also act as a channel for various students to come together to participate in multiple robotics-based competitions. “Inspire, Introduce, Initiate” is the mantra of the club.',
    technologies: ['Arduino', 'Raspberry Pi', 'CV', 'ROS', 'Embedded Systems'],
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'sae',
    name: 'SAE Collegiate club of IIITDM Kancheepuram',
    icon: <img src="./images/sae.png" className="club-icon" />,
    description: 'The purpose of this organisation is to provide its members opportunities to gain broader insight into the engineering profession by sponsoring meetings that will bring practising engineers to the campus, arranging field trips to research and engineering establishments, sponsoring student projects of engineering interest, and participating in SAEINDIA Section activities to hold up the values instilled by the institution.',
    technologies: ['CAD', 'Automotive Design', 'Vehicle Dynamics', 'FEA'],
    color: 'from-stone-400 to-stone-600'
  },
  {
    id: 'asme',
    name: 'ASME IIITDM Stdents Section',
    icon: <img src="./images/asme.png" className="club-icon" />,
    description: "The American Society of Mechanical Engineers (ASME) international association strives to promote the art, science and practice of multidisciplinary engineering and allied sciences around the globe. Established under the banner of IIITDM Kancheepuram, our mission is to foster a vibrant and creative learning environment where students can explore their interests and collaborate on exciting projects. With a commitment to both professional and personal growth, we organize workshops, seminars, and hands-on activities that empower students to develop essential skills and gain practical experience. Whether you're interested in robotics, sustainable design, or cutting-edge technologies, our diverse range of events and projects ensures that there's something for everyone. The exposure and experience gained goes far beyond your textbooks.",
    technologies: ['Mechanical Design', 'FEA', 'Thermodynamics', 'CAD', '3D Printing'],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'ieee',
    name: 'IEEE Students Branch',
    icon: <img src="./images/ieee.png" className="club-icon" />,
    description: "IIITDM Kancheepuram, inaugurated its IEEE Student Branch on 27th October 2016 in the presence of Mr. H. R. Mohan (then Vice Chair of IEEE Madras Section Student Activities, IEEE Madras Section Chair, IEEE PCS, Madras) as the Chief Guest, and Mr.P.Sakthivel (then Treasurer and Secretary of IEEE Madras Section) and Mr.S. Koteeswaran (then Member of Executive Committee) as the Guests of Honour. Prof. M.D Selvaraj is the founder Student Branch Counselor of IEEE SB and Dr. Chitti Babu is the present Student Branch Counselor of IEEE SB.IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. Through the student branch in our college we aim to provide you with opportunities to expand your technical skills, network with industry professionals, and make a positive impact on our community. Join us in shaping the future of technology, together.",
    technologies: ['Circuit Design', 'IoT', 'Wireless Communication', 'Robotics'],
    color: 'from-rose-400 to-rose-600'
  },
  {
    id: 'tad',
    name: 'TAD Aerodesign Club',
    icon: <img src="./images/tad.png" className="club-icon" />,
    description: 'TAD Club (Talpade Aero Design Club) at IIITDM Kancheepuram is a new and dynamic student organisation that is dedicated to the world of aero design. Our club brings together passionate engineering minds with a shared vision - to design, innovate, and contribute to the field of aeronautics. We aim to design and construct high-performance RC planes with an eye for precision and innovation. These planes are developed to excel in various national-level aeromodeling contests. Our club brings together like-minded individuals who are passionate about designing cutting-edge RC planes and aero design vehicles.',
    technologies: ['Aerodynamics', 'UAV', 'Flight Simulation', 'CAD', 'FEA'],
    color: 'from-teal-400 to-teal-600'
  },
];

const Wings = () => {
  const [activeWing, setActiveWing] = useState(wings[0].id);

  return (
    <section id="wings\" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Technical Clubs"
          subtitle="Explore our diverse technical domains where innovation meets expertise"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {wings.map((wing) => (
            <button
              key={wing.id}
              className={`py-3 px-4 rounded-lg transition-all duration-300 text-center group ${activeWing === wing.id
                ? `bg-gradient-to-r ${wing.color} text-white shadow-md`
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              onClick={() => setActiveWing(wing.id)}
            >
              <div className="flex flex-col items-center">
                <div className={`mb-2 ${activeWing === wing.id ? 'text-white' : ''}`}>
                  {wing.icon}
                </div>
                <span className="text-sm font-medium">{wing.name}</span>
              </div>
            </button>
          ))}
        </div>

        {wings.map((wing) => (
          <div
            key={wing.id}
            className={`transition-opacity duration-300 ${activeWing === wing.id ? 'block opacity-100' : 'hidden opacity-0'
              }`}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${wing.color}`}></div>
              <div className="p-6 md:p-8">
                <div className="md:flex md:space-x-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      {wing.icon}
                      <span className="ml-3">{wing.name}</span>
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {wing.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {wing.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-gradient-to-r ${wing.color} bg-opacity-10 text-gray-800`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button href="#" variant="outline" className="mt-2">
                      Explore Projects
                    </Button>
                  </div>

                  <div className="mt-8 md:mt-0 md:w-1/3">
                    <div className="bg-gray-100 rounded-lg p-5">
                      <h4 className="text-lg font-semibold mb-3">Club Activities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Workshops & Training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Project Development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Technical Competitions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Guest Lectures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Open Source Contributions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wings;