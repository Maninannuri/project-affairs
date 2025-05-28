import { useState } from 'react';
import { Code, Github, Award, Rocket, Users, Calendar } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const stats = [
  { icon: <Users className="h-6 w-6 text-blue-600" />, value: '500+', label: 'Active Members' },
  { icon: <Calendar className="h-6 w-6 text-blue-600" />, value: '20+', label: 'Annual Events' },
  { icon: <Github className="h-6 w-6 text-blue-600" />, value: '100+', label: 'Projects' },
  { icon: <Award className="h-6 w-6 text-blue-600" />, value: '13+', label: 'Years of Excellence' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section id="about\" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About!"
          subtitle="A technical society nurturing innovation and excellence at IIIT Kancheepuram"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="./images/mainphoto.png"
                alt="Photo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-center">
              <Code className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-slate-600">Established</span>
              <span className="text-xl font-bold text-slate-900">2007</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <div className="flex space-x-1 border-b border-gray-200">
                <button
                  className={`py-2 px-4 font-medium text-sm ${activeTab === 'mission'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm ${activeTab === 'motto'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => setActiveTab('motto')}
                >
                  Our Motto
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm ${activeTab === 'values'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => setActiveTab('values')}
                >
                  Our Values
                </button>
              </div>

              <div className="mt-6">
                {activeTab === 'mission' && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Rocket className="h-5 w-5 text-blue-600 mr-2" />
                      Our Mission
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Technical Affairs aims to foster a vibrant technical culture at IIIT Kancheepuram by providing
                      students with opportunities to explore various domains of technology and innovation.
                      Our mission is to create a healthy community where people interact, explore, and increase their knowledge with added fun.
                    </p>
                    <p className="text-slate-600">
                      Our goal is to empower students with the skills and knowledge necessary to excel in
                      the rapidly evolving technological landscape and contribute meaningfully to the global
                      tech community.
                    </p>
                  </div>
                )}

                {activeTab === 'motto' && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      Our Motto
                    </h3>
                    <p className="text-slate-600 mb-4">
                      He who has a why can endure any how.
                    </p>
                    <p className="text-slate-600">
                      We aspire to be recognized nationally for our technical prowess, innovative projects,
                      and the quality of engineers we help shape.
                    </p>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      Our Values
                    </h3>
                    <ul className="text-slate-600 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Innovation:</strong> Encouraging creative thinking and novel approaches to problem-solving</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Collaboration:</strong> Fostering teamwork and knowledge sharing across technical domains</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Excellence:</strong> Striving for the highest standards in all our endeavors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Inclusivity:</strong> Creating a welcoming environment for all passionate about technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Continuous Learning:</strong> Embracing lifelong learning and adaptability</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;