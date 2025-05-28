import { Code2, Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and about */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-7 w-7" />
              <span className="text-xl font-bold">Technical Affairs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The technical society of IIIT Kancheepuram fostering technical culture and innovation among students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#wings" className="text-gray-400 hover:text-white transition-colors">Technical Clubs</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Join Technical Club</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">IIIT Kancheepuram, Kandigai, Nellikuppam, Tamil Nadu,600127.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:technical.affairs@iiitdm.ac.in" className="text-gray-400 hover:text-white transition-colors">
                  technical.affairs@iiitdm.ac.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Technical Affairs, IIIT Kancheepuram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;