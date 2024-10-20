import React, { useState } from 'react';
import { User, Mail, Lock, Camera, Globe, Heart } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  biography: string;
  story: string;
  interests: string[];
  profilePicture: File | null;
}

const ProfileCreation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    biography: '',
    story: '',
    interests: [],
    profilePicture: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevData => ({ ...prevData, profilePicture: e.target.files![0] }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prevData => ({
      ...prevData,
      interests: prevData.interests.includes(interest)
        ? prevData.interests.filter(i => i !== interest)
        : [...prevData.interests, interest]
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <User className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Your Story</h2>
            <div className="relative">
              <textarea
                name="biography"
                value={formData.biography}
                onChange={handleInputChange}
                placeholder="Tell us a bit about yourself..."
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary h-32"
                required
              />
            </div>
            <div className="relative">
              <textarea
                name="story"
                value={formData.story}
                onChange={handleInputChange}
                placeholder="Share your dreams and aspirations..."
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary h-48"
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Interests & Profile Picture</h2>
            <div className="flex flex-wrap gap-2">
              {['Education', 'Technology', 'Environment', 'Arts', 'Science', 'Social Impact'].map(interest => (
                <button
                  key={interest}
                  onClick={() => handleInterestChange(interest)}
                  className={`py-2 px-4 rounded-full transition duration-300 ${
                    formData.interests.includes(interest)
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  {formData.profilePicture ? (
                    <img
                      src={URL.createObjectURL(formData.profilePicture)}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Camera className="h-full w-full text-gray-300" />
                  )}
                </span>
                <label
                  htmlFor="file-upload"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    // Redirect or show success message
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Create Your Profile</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        {renderStep()}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Create Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileCreation;