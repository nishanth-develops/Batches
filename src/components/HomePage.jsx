import React from 'react';
function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-6xl mx-auto mt-4 bg-white rounded-lg shadow">

        <section className="bg-lavender-50 p-4">
          <h1 className="text-6xl font-bold text-center">
            <span className="text-gray-900">WELCOME TO </span>
            <span className="text-indigo-500">BATCHES</span>
          </h1>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full h-64 bg-lavender-100 rounded-full opacity-25 absolute"></div>
          </div>
        </section>
        <section className="flex bg-gray-100 p-8">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Celebrate Your Journey, Connect with Your Peers
            </h1>
          </div>
          <div className="w-1/2 px-6">
            <p className="text-lg mb-6 text-right">
              Welcome to our digital hall of fame, where you can explore the achievements and stories of fellow graduates. This platform connects you with your peers, showcasing their journeys and current endeavors.
            </p>
            <div className="flex justify-end space-x-4">
              <button className="bg-black text-white px-6 py-3">Start Now</button>
              <button className="bg-white border border-gray-300 px-6 py-3">View More</button>
            </div>
          </div>
        </section>

        <section className="py-16 px-8">
          <h2 className="text-4xl font-bold text-center mb-16">DISCOVER YOUR SENIORS</h2>
          
          <div className="flex justify-between gap-6">
            <div className="w-1/3">
              <div className="h-48 bg-amber-50 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Find Alumni by Year, Branch, and Section with Ease</h3>
              <button className="bg-black text-white px-6 py-2 mt-4">Start Now</button>
            </div>
            
            <div className="w-1/3">
              <div className="h-48 bg-amber-50 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Navigate Through Categories to Discover Your Peers' Achievements</h3>
              <button className="bg-black text-white px-6 py-2 mt-4">Start Now</button>
            </div>
            
            <div className="w-1/3">
              <div className="h-48 bg-amber-50 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Engage with Alumni: Connect and Share Experiences</h3>
              <button className="bg-black text-white px-6 py-2 mt-4">Start Now</button>
            </div>
          </div>
        </section>
        <section className="py-16 px-8 bg-white">
          <div className="flex">
            <div className="w-1/3">
              <h2 className="text-4xl font-bold mb-4">Student Experiences</h2>
              <p className="mb-6">
                Batches is an outstanding platform that allows students to connect and engage with the college community like never before. It's truly a game-changer!
              </p>
            </div>
            
            <div className="w-2/3 grid grid-cols-2 gap-8 pl-12">
              <div className="mb-8">
                <div className="flex justify-end mb-2">
                  <span className="text-6xl text-gray-300">"</span>
                </div>
                <p className="mb-4">
                  I found the branch-wise divisions and section details very informative. It helped me connect with students from different backgrounds effortlessly.
                </p>
                <p className="text-purple-600">Discover More</p>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-end mb-2">
                  <span className="text-6xl text-gray-300">"</span>
                </div>
                <p className="mb-4">
                  Batches has revolutionized how students interact with each other online. The platform is intuitive and user-friendly, making the experience enjoyable.
                </p>
                <p className="text-purple-600">Connect Now</p>
              </div>
              
              <div>
                <div className="flex justify-end mb-2">
                  <span className="text-6xl text-gray-300">"</span>
                </div>
                <p className="mb-4">
                  The ability to view class-wide student cards adds a unique touch to the platform. It's a great way to visually connect with peers.
                </p>
              </div>
              
              <div>
                <div className="flex justify-end mb-2">
                  <span className="text-6xl text-gray-300">"</span>
                </div>
                <p className="mb-4">
                  The branch-wise divisions with detailed sections provide a comprehensive overview of the college's structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-16">Key Offerings</h2>
          
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
                Explore the branch divisions to understand the college's academic structure better and connect with students from various disciplines and improve your network.
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

        <section className="py-16 px-8 bg-white">
          <div className="flex">
            <div className="w-1/3">
              <h2 className="text-4xl font-bold mb-4">Stay Updated with Batches</h2>
              <p className="mb-6">
                Get the latest news and updates about Batches and the college community. Stay informed about upcoming events, achievements, and important announcements.
              </p>
              <button className="border border-black rounded-full px-6 py-2 mt-4">Read More</button>
            </div>
            
            <div className="w-2/3 grid grid-cols-2 gap-8 pl-12">
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