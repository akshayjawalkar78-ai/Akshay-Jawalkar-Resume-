import { motion } from 'framer-motion';
import Section from './Section';
import { HeartPulse, Hospital, Home, Atom, Clock } from 'lucide-react';

const volunteersData = [
  {
    role: 'Clinical Volunteer',
    organization: 'Brooks Rehabilitation',
    date: 'Jun – Jul 2025',
    hours: '44.67 hours',
    icon: <HeartPulse className="text-accent-teal" size={22} />,
    bulletColor: 'bg-accent-teal',
    achievements: [
      'Delivered direct patient support in a clinical rehabilitation environment, assisting healthcare staff with patient care, administrative tasks, and daily operational workflows.',
      'Developed hands-on exposure to rehabilitation medicine, interdisciplinary care teams, and the patient interaction standards required in a clinical setting.'
    ]
  },
  {
    role: 'Hospital Volunteer',
    organization: "Ascension St. Vincent's Foundation Jacksonville",
    date: 'Jun – Jul 2025',
    hours: '31.14 hours',
    icon: <Hospital className="text-accent-blue" size={22} />,
    bulletColor: 'bg-accent-blue',
    achievements: [
      'Supported healthcare professionals across multiple hospital departments with patient transport, organizational tasks, and administrative assistance in a high-volume clinical environment.',
      'Strengthened cross-functional communication and teamwork skills while gaining direct exposure to hospital operations and patient care standards.'
    ]
  },
  {
    role: 'Community Volunteer',
    organization: 'St. Francis Family Housing',
    date: 'Jul – Dec 2025',
    hours: '69 hours',
    icon: <Home className="text-accent-teal" size={22} />,
    bulletColor: 'bg-accent-teal',
    achievements: [
      'Dedicated 69 hours over six months to a nonprofit serving families experiencing housing insecurity, supporting resident programs and daily operations.',
      'Collaborated with staff and fellow volunteers to deliver community services, reflecting a sustained commitment to social responsibility.'
    ]
  },
  {
    role: 'Museum Volunteer',
    organization: 'Museum of Science & History (MOSH)',
    date: 'Jul 2025',
    hours: '5 hours',
    icon: <Atom className="text-accent-blue" size={22} />,
    bulletColor: 'bg-accent-blue',
    achievements: [
      'Supported museum staff with visitor engagement and event operations, contributing to STEM outreach and public education efforts in the Jacksonville community.'
    ]
  }
];

const Volunteer = () => {
  return (
    <Section id="volunteer" className="relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
          VOLUNTEER EXPERIENCE
        </h2>
        <div className="h-[2px] w-24 bg-accent-blue mb-6"></div>
        <p className="text-gray-400 max-w-2xl text-lg">
          Service hours and community engagement in clinical environments and nonprofit sectors.
        </p>
      </motion.div>

      <div className="relative pl-8 sm:pl-12 max-w-4xl">
        {/* Left Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent-blue via-white/10 to-transparent"></div>

        <div className="space-y-12">
          {volunteersData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-8 sm:-left-12 top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-space-900 border border-white/20 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:border-accent-blue transition-colors duration-300">
                {item.icon}
              </div>

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass-panel p-6 sm:p-8 glass-panel-hover"
              >
                {/* Meta details header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-accent-teal transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-md sm:text-lg text-gray-400 font-light mt-0.5">
                      {item.organization}
                    </h4>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs">
                    <span className="font-mono text-accent-teal tracking-wider uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full sm:bg-transparent sm:border-0 sm:p-0">
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      <Clock size={12} className="text-accent-blue" />
                      {item.hours}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 mt-6">
                  {item.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="text-sm text-gray-300 leading-relaxed flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${item.bulletColor}`}></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Volunteer;
