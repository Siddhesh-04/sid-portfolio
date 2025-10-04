
const About = () => {

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
                About{' '}
                <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
  I am a final-year Robotics and Automation Engineering student with a strong interest in applying AI, and automation to real-world problems. My journey began with a Diploma in Computer Engineering, which gave me a solid technical foundation and sparked my curiosity for building intelligent systems.
</p>
<p>
  Through academic work and personal projects, I have developed skills in Python, machine learning, and computer vision. As I start my professional journey, I am eager to apply this knowledge, take on real-world challenges, and continue growing through collaboration and learning.

</p>

            </div>

        
          </div>

          {/* Right: Doodle Artwork */}
          <div className="relative mt-50 lg:mt-0">
            <div className="relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 shadow-lg ">
              {/* Person image with static and animated circuit border, plus floating neon elements */}
              <div
                className="relative z-10 flex items-center justify-center min-h-[220px] sm:min-h-[260px]"
                style={{ marginTop: 'var(--img-container-mt, 28px)' }}
              >
                <div
                  className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center"
                  style={{
                    width: 'var(--img-container-size, 14rem)',
                    height: 'var(--img-container-size, 16rem)'
                  }}
                >
                  
                
                  <div
                    style={{
                      background: 'linear-gradient(35deg, #18181b 40%, #8a5cf6ac 100%)',
                      display: 'block',
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}
                    className="relative z-20 drop-shadow-lg ml-0 "
                  >
                    <img
                      src="/assets/about/sid-img1.png"
                      alt="Sid"
                      className="w-auto"
                      style={{ height: 'var(--img-h, 100%)', maxHeight: '100%' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full animate-pulse neon-glow"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-neon-coral to-neon-yellow rounded-full animate-pulse neon-glow-coral" style={{ animationDelay: '3s' }}></div>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;