import React, { useState } from 'react';
import { Camera, Save, User, Mail, Phone, School, Home, AtSign } from "lucide-react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

const UserProfile = () => {
  // ... (previous state and handlers remain the same)
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    faculty: "Computer Science",
    hometown: "San Francisco",
    profilePic: "/api/placeholder/150/150"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo(prev => ({
          ...prev,
          profilePic: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
    className="min-h-screen bg-cover bg-cover pt-20"
    style={{ backgroundImage: "url('/user.jpg')" }}
  >
      < Dashboard />
      <Sidebar />
       
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
       
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg p-6">
      
          <h1 className="text-3xl font-bold text-center">Profile Settings</h1>
          
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-blue-300 to-purple-400 ring-4 ring-white shadow-xl">
                  <img 
                    src={userInfo.profilePic} 
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <label className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <Camera className="w-6 h-6 text-white" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            {/* Personal Info Section */}
            <div className="bg-gradient-to-r from-purple-100 to-red-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 text-red-700">
                <User className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Personal Info</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Account Section */}
            <div className="bg-gradient-to-r from-green-100 to-blue-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 text-emerald-700">
                <AtSign className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Account Info</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={userInfo.username}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Faculty
                  </label>
                  <input
                    type="text"
                    name="faculty"
                    value={userInfo.faculty}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-violet-100 to-blue-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 text-blue-700">
                <Mail className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Contact Details</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 text-orange-700">
                <Home className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Hometown
                </label>
                <input
                  type="text"
                  name="hometown"
                  value={userInfo.hometown}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              {!isEditing ? (
                <button 
                  type="button" 
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button 
                    type="button" 
                    onClick={() => setIsEditing(false)}
                    className="border-2 border-gray-300 hover:border-gray-400 px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;