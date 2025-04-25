import React from 'react';
import '../Styles/Styles.css'

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 text-black">
   
      <section className="flex flex-row p-8 items-center">
        <div className="w-2/5">
          <h1 className="text-7xl font-bold mb-4">Our Vision</h1>
        </div>
        <div className="w-3/5">
          <h2 className="text-2xl font-semibold mb-2">Empowering Education Through Batches</h2>
          <p className="mb-6">
            Batches is a 'Hall of Fame' inspired platform dedicated to organizing
            college information in batches. Each batch is structured with internal
            divisions based on branches and further segmented into sections. Here,
            students' data, including personal details, is showcased. Viewing all
            students as a class provides a comprehensive look. Similarly, under
            branches, four divisions of sections are displayed. Our ultimate goal is
            to create a robust information base to foster better connections and
            build a strong community.
          </p>
        </div>
      </section>

 
      <section className="flex flex-row p-8 items-center mb-2">
        <div className="w-2/5">
          <h1 className="text-7xl font-bold mb-2">Our Journey</h1>
          <h2 className="text-xl font-medium">Building the Future</h2>
        </div>
        <div className="w-3/5">
          <p className="mb-6">
            Since our inception, Batches has been committed to structuring college
            data efficiently. Our journey involves creating a platform that showcases
            students' information in a user-friendly manner. Join us in shaping the
            future of educational information.
          </p>
          <button className="border border-black rounded-full px-6 py-2 mt-4">
            Explore
          </button>
        </div>
      </section>
      <section className="p-8">
        <h1 className="text-5xl font-bold text-center mb-8">Meet the Team Behind Batches</h1>
        <p className="text-center mb-8">
          Our dedicated team at Batches works tirelessly to ensure a
          seamless experience for users. Get to know the individuals who
          drive our mission forward.
        </p>
        
     
        <div className="flex justify-center gap-8 mb-8">
          <div className="w-64 card">
            <div className="bg-gray-200 w-full h-64 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold text-center">Sri Hasnika</h3>
          </div>
          <div className="w-64 card">
            <div className="bg-gray-200 w-full h-64 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold text-center">Mahesh</h3>
          </div>
          <div className="w-64 card">
            <div className="bg-gray-200 w-full h-64 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold text-center">Abdul</h3>
          </div>
          <div className="w-64 card">
            <div className="bg-gray-200 w-full h-64 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold text-center">Mani Shankar</h3>
          </div>
        </div>
  
      </section>

      <div className="border-t border-gray-200 w-full my-8"></div>

      <section className="p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full border border-black p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Empowering Communities</h1>
        <p className="max-w-3xl mx-auto mb-8">
          Batches strives to have a positive impact on the community by connecting students and alumni. 
          Join us in our mission to create a network that fosters collaboration and knowledge-sharing. 
          Click below to get involved.
        </p>
        <button className="border border-black rounded-full px-6 py-2 mt-4">
          Get Involved
        </button>
      </section>
    </div>
  );
}