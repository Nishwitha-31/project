import React from "react";

const HackathonRegistrationForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black p-8 text-purple-200">
      {/* Form Header */}
      <div className="w-full max-w-md bg-black bg-opacity-60 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-1 text-pink-500">Hackathon Registration Form</h1>
        <p className="text-center text-sm text-purple-400 mb-4">Description: Should be fill by Team Leader</p>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex space-x-2">
            <input type="text" placeholder="First Name" className="flex-1 p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />
            <input type="text" placeholder="Last Name" className="flex-1 p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />
          </div>

          {/* Email */}
          <input type="email" placeholder="Email Address" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Phone */}
          <input type="text" placeholder="000-000-0000" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Address */}
          <input type="text" placeholder="Address" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* State and Pin Code */}
          <div className="flex space-x-2">
            <input type="text" placeholder="State" className="flex-1 p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />
            <input type="text" placeholder="Pin Code" className="flex-1 p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />
          </div>

          {/* Institution/Company */}
          <input type="text" placeholder="Institution/Company" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Role/Position */}
          <input type="text" placeholder="Role/Position" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Skills/Expertise */}
          <input type="text" placeholder="Skills/Expertise" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Team Name */}
          <input type="text" placeholder="Team Name" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Number of Team Members */}
          <input type="number" placeholder="Number of Team Members" className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none" />

          {/* Participated Before */}
          <div>
            <p className="mb-2">Have you participated in a hackathon before?</p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-1">
                <input type="radio" name="hackathon" className="accent-pink-500" /> <span>Yes</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="hackathon" className="accent-pink-500" /> <span>No</span>
              </label>
            </div>
          </div>

          {/* Project Ideas */}
          <textarea
            placeholder="Briefly describe any project ideas or areas of interest for the hackathon (Example: Web development, Blockchain, AI, etc...)"
            className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none"
            rows={3}
          ></textarea>

          {/* Additional Comments */}
          <textarea
            placeholder="Additional Comments"
            className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none"
            rows={2}
          ></textarea>

          {/* Consent and Agreement */}
          <div className="text-xs text-purple-400">
            <h2 className="text-sm font-semibold mb-1">Consent and Agreement</h2>
            <p>
              I have read and agree to abide by the hackathon's code of conduct. I consent to the use of any photos/videos taken during the event for promotional use.
            </p>
            <p className="mt-1">
              I understand the potential risks associated with participating and release the organizers from any liability.
            </p>
          </div>

          {/* Payment Section */}
          <div className="bg-gray-800 bg-opacity-40 p-4 rounded">
            <p className="mb-2">Fee: ₹399</p>
            <p className="mb-2">Select payment method:</p>
            <div className="space-y-2">
              <select className="w-full p-2 rounded bg-transparent border border-purple-500 focus:outline-none">
                <option>UPI</option>
                <option>Visa</option>
                <option>MasterCard</option>
                <option>Netbanking</option>
                <option>Wallets</option>
              </select>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full p-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-bold mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default HackathonRegistrationForm;
