import React from 'react';

const HackathonRegistrationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center py-10 px-4">
      <form className="w-full max-w-4xl bg-black bg-opacity-40 p-8 rounded-2xl text-white shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-fuchsia-400">Hackathon Registration Form</h1>
        <p className="text-center text-sm text-pink-200 mb-6">Description: Should be filled by Team Leader</p>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Email Address</label>
            <input type="email" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Phone Number</label>
            <input type="tel" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">Address</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">City</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">State</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Pin Code</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Institution/Company</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Role/Position</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">Skills/Expertise</label>
            <textarea className="w-full p-2 rounded bg-black border border-cyan-500"></textarea>
          </div>
        </div>

        {/* Team & Project Info */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Team Name</label>
            <input type="text" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Number of Team Members</label>
            <input type="number" className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Have you participated in a hackathon before?</label>
            <div className="flex gap-4 mt-2">
              <label><input type="radio" name="hackathon" className="mr-2" /> Yes</label>
              <label><input type="radio" name="hackathon" className="mr-2" /> No</label>
            </div>
          </div>
          <div>
            <label className="block mb-1">Briefly describe any project ideas or interests</label>
            <textarea className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
          <div>
            <label className="block mb-1">Additional Comments</label>
            <textarea className="w-full p-2 rounded bg-black border border-cyan-500" />
          </div>
        </div>

        {/* Agreement */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-pink-300">Consent and Agreement</h3>
          <p className="text-sm mb-2">
            <strong>Code of Conduct:</strong> I have read and agree to abide by the hackathon’s code of conduct and rules.
          </p>
          <p className="text-sm mb-2">
            I acknowledge the use of any protected ideas taken during the event remains prohibited.
          </p>
          <p className="text-sm">
            I am aware of potential risks and agree to assume those risks associated with participating in the event.
          </p>
        </div>

        {/* Payment */}
        <div className="mt-8 border border-fuchsia-500 p-4 rounded-xl bg-black bg-opacity-60">
          <h3 className="text-lg font-semibold text-pink-300 mb-4">Payment</h3>
          <p className="mb-2">Fee: ₹399</p>
          <label className="block mb-1">Select Payment Method:</label>
          <div className="flex flex-wrap gap-4">
            <select className="p-2 rounded bg-black border border-cyan-500">
              <option>UPI</option>
              <option>Card</option>
              <option>Wallet</option>
            </select>
            <input type="text" placeholder="Enter UPI ID / Card Number" className="p-2 flex-1 rounded bg-black border border-cyan-500" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-fuchsia-600 text-white rounded-full hover:bg-fuchsia-700 transition">Register</button>
        </div>
      </form>
    </div>
  );
};

export default HackathonRegistrationForm;
