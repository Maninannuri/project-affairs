import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create a new applicant entry with timestamp
      const applicantData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Save to a JSON file (in a real application, this would typically be handled by a backend)
      const blob = new Blob([JSON.stringify(applicantData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `applicant-${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('Thank you for your interest! Your application has been saved.');
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Error saving application:', error);
      alert('There was an error saving your application. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Join Tech"
          subtitle="Interested in becoming a part of our technical community? Reach out to us!"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white text-slate-900 rounded-xl shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Send className="h-5 w-5 text-blue-600 mr-2" />
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Harshitha"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="harshi@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="auv">AUV Society</option>
                    <option value="cs">CS CLub</option>
                    <option value="eoic">EPiC Club</option>
                    <option value="gdsc">GDSC IIITDM</option>
                    <option value="ipd">IPD club</option>
                    <option value="mars">MaRS</option>
                    <option value="optica">Optica IIITDM Students Chapter</option>
                    <option value="robotics">Robotics Club</option>
                    <option value="sae">SAE Collegiate club of IIITDM Kancheepuram</option>
                    <option value="asme">ASME IIITDM Stdents Section</option>
                    <option value="ieee">IEEE Students Branch</option>
                    <option value="tad">TAD Aerodesign Club</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your interests and experience..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-gray-400">
                      Technical affairs, IIIT Kancheepuram<br />
                      Kandigai, Nellikuppam, Tamil Nadu,600127.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a href="mailto:technical.affairs@iiitdm.ac.in" className="text-gray-400 hover:text-white transition-colors">
                      technical.affairs@iiitdm.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Recruitment Process</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                  <span>Submit your application via the form</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                  <span>Technical assessment based on your area of interest</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                  <span>Personal interview with club coordinators</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                  <span>Selection and onboarding</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;