import LayoutWrapper from './layoutwrapper';
import ConversionsCircle from './tryyyy';

const WhyChooseMimic: React.FC = () => {
  const benefits = [
    {
      title: 'Conversion Focused',
      description: 'Our designs not only look good, but also convert up to 200% more site visitors.',
      icon: '🎯'
    },
    {
      title: 'Easy Comms',
      description: 'Stay in touch through Slack, Telegram, or WhatsApp for easy collaboration.',
      icon: '💬'
    },
    {
      title: 'Premium Quality',
      description: 'Each project gets our teams full focus, ensuring pixel-perfect quality.',
      icon: '✨'
    }
  ];

  return (
    <LayoutWrapper>
      <div className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#20204c]">
            Why Businesses<br />Choose Mimic Design
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col items-center"
            >
              {index === 0 ? (
                <div className="mb-6">
                  <ConversionsCircle />
                </div>
              ) : (
                <div className="text-4xl mb-6">{benefit.icon}</div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-[#20204c] text-center">{benefit.title}</h3>
              <p className="text-[#707684] text-lg text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-4 gap-4">
              {/* Header */}
              <div className="col-span-1"></div>
              <div className="text-center font-bold text-xl text-[#20204c]">Mimic Design</div>
              <div className="text-center font-bold text-xl text-[#20204c]">Full-time</div>
              <div className="text-center font-bold text-xl text-[#20204c]">Other Agencies</div>

              {/* Cost Row */}
              <div className="font-bold text-lg text-[#20204c]">Cost</div>
              <div className="text-center text-[#707684]">$ <span className="text-green-500">✓</span></div>
              <div className="text-center text-[#707684]">$$$$ (High Overhead) <span className="text-red-500">✗</span></div>
              <div className="text-center text-[#707684]">$$$ <span className="text-red-500">✗</span></div>

              {/* Senior Designer Row */}
              <div className="font-bold text-lg text-[#20204c]">Senior-level Designer</div>
              <div className="text-center text-[#707684]">Guaranteed <span className="text-green-500">✓</span></div>
              <div className="text-center text-[#707684]">Hopefully <span className="text-red-500">✗</span></div>
              <div className="text-center text-[#707684]">Maybe <span className="text-red-500">✗</span></div>

              {/* Turnaround Time Row */}
              <div className="font-bold text-lg text-[#20204c]">Turnaround Time</div>
              <div className="text-center text-[#707684]">Within 1 week <span className="text-green-500">✓</span></div>
              <div className="text-center text-[#707684]">Weeks <span className="text-red-500">✗</span></div>
              <div className="text-center text-[#707684]">Months <span className="text-red-500">✗</span></div>

              {/* Start Time Row */}
              <div className="font-bold text-lg text-[#20204c]">Start Time</div>
              <div className="text-center text-[#707684]">Today <span className="text-green-500">✓</span></div>
              <div className="text-center text-[#707684]">Months to train <span className="text-red-500">✗</span></div>
              <div className="text-center text-[#707684]">Weeks (Contracts) <span className="text-red-500">✗</span></div>

              {/* Revisions Row */}
              <div className="font-bold text-lg text-[#20204c]">Revisions</div>
              <div className="text-center text-[#707684]">Unlimited <span className="text-green-500">✓</span></div>
              <div className="text-center text-[#707684]">Limited <span className="text-red-500">✗</span></div>
              <div className="text-center text-[#707684]">Limited per project <span className="text-red-500">✗</span></div>

              {/* Communication Row */}
              <div className="font-bold text-lg text-[#20204c]">Communication</div>
              <div className="text-center text-[#707684]">24/7 support <span className="text-green-500">✓</span></div>
              <div className="text-center text-[#707684]">Monday-Friday <span className="text-red-500">✗</span></div>
              <div className="text-center text-[#707684]">Back-forth emails <span className="text-red-500">✗</span></div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default WhyChooseMimic;