import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const teamCategories = [
  {
    id: 'faculty',
    name: 'Faculty Heads',
    members: [
      {
        name: 'Dr. Sivaselvan B',
        role: 'Faculty Advisor',
        image: 'http://mis.iiitdm.ac.in/Profile/images/Profile/SIVASELVANB.jpeg'
      },
      {
        name: 'Dr. Siva Prasad',
        role: 'PIC- Co-curricular Affairs',
        image: 'http://mis.iiitdm.ac.in/Profile/images/Profile/avs.jpeg'
      },
      {
        name: 'Dr. Parvathy Das',
        role: 'PIC - Co-curricular Affairs',
        image: 'http://mis.iiitdm.ac.in/Profile/images/Profile/parvathydas.jpeg'
      }
    ]
  },
  {
    id: 'sac',
    name: 'SAC - Technical Affairs',
    members: [
      {
        name: 'G.Praneeth kumar',
        role: 'Technical Secretary',
        image: 'https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg'
      },
      {
        name: 'Sundar S',
        role: 'Joint Technical Secretary',
        image: 'https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg'
      }
    ]
  },
  {
    id: 'management',
    name: 'Management Team',
    members: Array(4).fill(null).map((_, i) => ({
      name: `Management Member ${i + 1}`,
      role: 'Coordinator',
      image: `https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg`
    }))
  },
  {
    id: 'innovation',
    name: 'Innovation Team',
    members: Array(4).fill(null).map((_, i) => ({
      name: `Innovation Member ${i + 1}`,
      role: 'Coordinator',
      image: `https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg`
    }))
  },
  {
    id: 'media',
    name: 'Media & Marketing Team',
    members: Array(4).fill(null).map((_, i) => ({
      name: `Media Member ${i + 1}`,
      role: 'Coordinator',
      image: `https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg`
    }))
  },
  {
    id: 'tech',
    name: 'Tech-Development Team',
    members: Array(4).fill(null).map((_, i) => ({
      name: `Tech Member ${i + 1}`,
      role: 'Coordinator',
      image: `https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg`
    }))
  },
  {
    id: 'social',
    name: 'Social Outreach Team',
    members: Array(4).fill(null).map((_, i) => ({
      name: `Outreach Member ${i + 1}`,
      role: 'Coordinator',
      image: `https://i.pinimg.com/736x/aa/d2/f5/aad2f539227c7045bc4af534990a6440.jpg`
    }))
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The talented individuals leading GeekHaven's technical initiatives"
          centered
        />

        {teamCategories.map((category) => (
          <div key={category.id} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{category.name}</h3>
            <div className={`grid gap-8 ${category.id === 'faculty' || category.id === 'sac'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}>
              {category.members.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow ${category.id === 'faculty' || category.id === 'sac'
                    ? 'lg:col-span-1'
                    : ''
                    }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                        <a
                          href="#"
                          className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@example.com`}
                          className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-blue-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;