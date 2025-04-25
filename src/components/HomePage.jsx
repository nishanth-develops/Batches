import React,{ useEffect, useRef, useState  } from 'react';
function HomePage() {
  const stackAreaRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(-1);
  
  // Student testimonial data
  const testimonials = [
    {
      id: 1,
      subtitle: "Student Connection",
      content: "I found the branch-wise divisions and section details very informative. It helped me connect with students from different backgrounds effortlessly.",
      color: "linear-gradient(90deg, #000000, #6A5ACD, #9370DB, #6A5ACD, #000000);",
      cta: "Discover More"
    },
    {
      id: 2,
      subtitle: "User Experience",
      content: "Batches has revolutionized how students interact with each other online. The platform is intuitive and user-friendly, making the experience enjoyable.",
      color: "linear-gradient(90deg, #000000, #6A5ACD, #9370DB, #6A5ACD, #000000);",
      cta: "Connect Now"
    },
    {
      id: 3,
      subtitle: "Visual Interface",
      content: "The ability to view class-wide student cards adds a unique touch to the platform. It's a great way to visually connect with peers.",
      color: "linear-gradient(90deg, #000000, #6A5ACD, #9370DB, #6A5ACD, #000000);",
      cta: null
    },
    {
      id: 4,
      subtitle: "Organization",
      content: "The branch-wise divisions with detailed sections provide a comprehensive overview of the college's structure.",
      color: "linear-gradient(90deg, #000000, #6A5ACD, #9370DB, #6A5ACD, #000000);",
      cta: null
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (stackAreaRef.current) {
        const distance = window.innerHeight * 0.5;
        const topVal = stackAreaRef.current.getBoundingClientRect().top;
        const index = Math.floor(-1 * (topVal / distance + 1));
        setScrollIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen font-sans">
      <main className="w-full bg-white shadow">

          <h1 className="text-14xl font-bold text-center gradient-text mb-2">
            <span className="text-gray-900">WELCOME TO </span>
            <span className="text-indigo-500">BATCHES</span>
          </h1>
          <section className="bg-gradient-to-b from-[#d9d7f1] to-[#f7f7f7] min-h-screen flex items-center px-24">
  <div className="flex w-full px-8">
    <div className="w-3/5">
      <h1 className="text-7xl font-bold mb-4 px-12 leading-tight">
        Celebrate Your Journey, Connect with Your Peers
      </h1>
    </div>
    <div className="w-2/5 px-6">
      <p className="text-lg mb-4">
        Welcome to our digital hall of fame, where you can explore the achievements and stories of fellow graduates. This platform connects you with your peers, showcasing their journeys and current endeavors.
      </p>
      <div className="flex space-x-4">
        <button className="bg-black text-white px-6 py-3">Start Now</button>
        <button className="bg-white border border-gray-300 px-6 py-3">View More</button>
      </div>
    </div>
  </div>
</section>

        <section className="py-16 px-8 card">
          <h2 className="text-4xl font-bold text-center mb-16">DISCOVER YOUR SENIORS</h2>
          
          <div className="flex justify-between gap-6 card">
            <div className="w-1/3">
              <div className="h-48 bg-amber-50 rounded-lg mb-4 card"></div>
              <h3 className="text-xl font-bold mb-2">Find Alumni by Year, Branch, and Section with Ease</h3>
              <button className="bg-black text-white px-6 py-2 mt-4">Start Now</button>
            </div>
            
            <div className="w-1/3">
              <div className="h-48 bg-amber-50 rounded-lg mb-4 card"></div>
              <h3 className="text-xl font-bold mb-2">Navigate Through Categories to Discover Your Peers' Achievements</h3>
              <button className="bg-black text-white px-6 py-2 mt-4">Start Now</button>
            </div>
            
            <div className="w-1/3">
              <div className="h-48 bg-amber-50 rounded-lg mb-4 card"></div>
              <h3 className="text-xl font-bold mb-2">Engage with Alumni: Connect and Share Experiences</h3>
              <button className="bg-black text-white px-6 py-2 mt-4">Start Now</button>
            </div>
          </div>
        </section>
        <section className="py-16 px-8 bg-white">
        <div className="stack-area w-full h-[300vh] relative bg-white flex" ref={stackAreaRef}>
      <div className="left h-screen w-1/2 sticky top-0 left-0 flex items-center justify-center flex-col">
        <div className="title w-[420px] text-[84px] font-bold leading-[88px] font-poppins">
          Student Experiences
        </div>
        <div className="sub-title w-[420px] font-poppins text-sm mt-8">
          Batches is an outstanding platform that allows students to connect and engage with the college community like never before. It's truly a game-changer!
          <br />
          <button className="mt-5 bg-black text-white px-8 py-4 rounded-full font-poppins text-sm border-none outline-none cursor-pointer">
            See More Details
          </button>
        </div>
      </div>
      <div className="right h-screen w-1/2 sticky top-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="w-[350px] h-[350px] rounded-3xl mb-3 absolute transition-all duration-500 ease-in-out"
            style={{
              background:"linear-gradient(90deg, #000000, #6A5ACD, #9370DB, #6A5ACD, #000000)",
              top: 'calc(50% - 175px)',
              left: 'calc(50% - 175px)',
              padding: '35px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              zIndex: testimonials.length - index,
              transform: index <= scrollIndex 
                ? 'translateY(-120vh) rotate(-48deg)' 
                : `rotate(${-10 * (index - Math.max(0, scrollIndex + 1))}deg)`
            }}
          >
            <div className="sub font-poppins text-xl font-bold text-white">
              {testimonial.subtitle}
            </div>
            <div>
              <div className="content font-poppins text-2xl font-bold leading-tight text-white mb-4">
                {testimonial.content}
              </div>
              {testimonial.cta && (
                <button className="text-white border border-white px-4 py-2 rounded-lg font-poppins text-sm hover:bg-white hover:bg-opacity-20 transition-all">
                  {testimonial.cta}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
        <section className="py-16 px-8 bg-white mx-8 mb-4 card-zoom">
          <h2 className="text-6xl font-bold text-center mb-16">Key Offerings</h2>
          
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Student Data</h3>
              <p className="mb-6 text-sm">
                Explore the branch divisions to understand the college's academic structure better and connect with students from various disciplines.
              </p>
              <button className="border border-black rounded-full px-6 py-2 text-sm">Discover Divisions</button>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Details</h3>
              <p className="mb-6 text-sm">
                View student data to learn more about the college's student body and their achievements, helping you connect with peers effectively.
              </p>
              <button className="border border-black rounded-full px-6 py-2 text-sm">Explore Data</button>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Build Community</h3>
              <p className="mb-6 text-sm">
                Personal details of students are available to foster a sense of community and enhance networking opportunities within the college.
              </p>
              <button className="border border-black rounded-full px-6 py-2 text-sm">View Details</button>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Know the Happenings</h3>
              <p className="mb-6 text-sm">
                Get to know where your alumni has been placed and what are they doing now. Discover various career paths and choose the best for you.
              </p>
              <button className="border border-black rounded-full px-6 py-2 text-sm">Experience Class View</button>
            </div>
          </div>
        </section>

        <section className="py-16 px-8 bg-white card-diagonal">
          <div className="flex">
            <div className="w-2/5">
              <h2 className="text-6xl font-bold mb-4">Stay Updated with Batches</h2>
              <p className="mb-6">
                Get the latest news and updates about Batches and the college community. Stay informed about upcoming events, achievements, and important announcements.
              </p>
              <button className="border border-black rounded-full px-6 py-2 mt-4">Read More</button>
            </div>
            
            <div className="w-3/5 grid grid-cols-2 gap-8 pl-12">
              <div className="mb-8">
                <div className="flex mb-3">
                  <span className="text-3xl">★</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Achievements</h3>
                <p className="mb-2 text-sm">
                  Share your feature information here to attract new clients. Provide a brief summary to help...
                </p>
                <p className="text-purple-600 text-sm">Show More</p>
              </div>
              
              <div className="mb-8">
                <div className="flex mb-3">
                  <span className="text-3xl">@</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Important Announcements</h3>
                <p className="mb-2 text-sm">
                  Share your feature information here to attract new clients. Provide a brief summary to help...
                </p>
                <p className="text-purple-600 text-sm">Show More</p>
              </div>
              
              <div>
                <div className="flex mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Updates</h3>
                <p className="mb-2 text-sm">
                  Share your feature information here to attract new clients. Provide a brief summary to help...
                </p>
                <p className="text-purple-600 text-sm">Show More</p>
              </div>
              
              <div>
                <div className="flex mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Engage with Us</h3>
                <p className="mb-2 text-sm">
                  Share your feature information here to attract new clients. Provide a brief summary to help...
                </p>
                <p className="text-purple-600 text-sm">Show More</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;