import React, { useState } from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('My Account');
  
  // Dummy user data
  const userData = {
    username: 'goparajunishanth',
    role: 'Admin',
    followers: 0,
    following: 0,
    profileImage: '/api/placeholder/120/120',
    title: 'Software Developer',
    email: 'goparajunishanth@example.com',
    phone: '+1 555-123-4567',
    location: 'San Francisco, CA',
    jobExperience: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        position: 'Senior Developer',
        duration: 'Jan 2022 - Present',
        description: 'Leading front-end development team and implementing React-based solutions.'
      },
      {
        id: 2,
        company: 'Digital Innovations',
        position: 'Web Developer',
        duration: 'Mar 2019 - Dec 2021',
        description: 'Worked on multiple client projects using JavaScript frameworks.'
      },
      {
        id: 3,
        company: 'StartUp Labs',
        position: 'Junior Developer',
        duration: 'Jun 2017 - Feb 2019',
        description: 'Assisted in developing web applications and maintaining codebase.'
      }
    ]
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'My Account':
        return (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Account</h2>
            <p className="text-gray-700 mb-8">View and edit your personal info below.</p>
            
            <div className="border-t border-gray-300 pt-8 mb-6">
              <h3 className="text-xl font-semibold mb-2">Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={userData.email} 
                    className="w-full p-2 border border-gray-300 rounded" 
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    value={userData.phone} 
                    className="w-full p-2 border border-gray-300 rounded" 
                    readOnly
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  value={userData.location} 
                  className="w-full p-2 border border-gray-300 rounded" 
                  readOnly
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded text-gray-700">Discard</button>
              <button className="px-4 py-2 bg-black text-white rounded">Update Info</button>
            </div>
          </div>
        );
      case 'Profile':
        return (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p className="text-gray-700 mb-8">Manage your public profile information.</p>
            
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-xl font-semibold mb-6">Display Info</h3>
              <p className="text-gray-600 mb-6">This information will be visible to all members of this site.</p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Display name *</label>
                <input 
                  type="text" 
                  value={userData.username} 
                  className="w-full p-2 border border-gray-300 rounded" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input 
                  type="text" 
                  value={userData.title} 
                  className="w-full p-2 border border-gray-300 rounded" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded h-32" 
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded text-gray-700">Discard</button>
              <button className="px-4 py-2 bg-black text-white rounded">Update Profile</button>
            </div>
          </div>
        );
      case 'Job Experience':
        return (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Job Experience</h2>
            <p className="text-gray-700 mb-8">Showcase your professional experience.</p>
            
            <div className="border-t border-gray-300 pt-8">
              {userData.jobExperience.map(job => (
                <div key={job.id} className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">{job.position}</h3>
                    <span className="text-gray-600">{job.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{job.company}</p>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                </div>
              ))}
              
              <button className="mt-4 flex items-center text-blue-600 font-medium">
                <span className="mr-2">+</span> Add New Experience
              </button>
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded text-gray-700">Discard</button>
              <button className="px-4 py-2 bg-black text-white rounded">Save Changes</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{userData.username}</h1>
          <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
            {userData.role}
          </span>
          <div className="flex ml-4 space-x-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <p className="text-gray-600">{userData.followers} Followers • {userData.following} Following</p>
        </div>
      </div>
      
      <div className="border-b border-gray-300">
        <nav className="flex space-x-8">
          {['My Account', 'Profile', 'Job Experience'].map(tab => (
            <button
              key={tab}
              className={`pb-4 px-1 ${
                activeTab === tab 
                  ? 'border-b-2 border-black font-medium' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="mt-4 flex items-start">
        <div className="flex-1">
          {renderTabContent()}
        </div>
        
        {activeTab === 'Profile' && (
          <div className="ml-6 mt-20">
            <div className="text-center">
              <p className="mb-2 font-medium">Profile image</p>
              <div className="relative inline-block">
                <img 
                  src="/api/placeholder/120/120" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300" 
                />
                <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;