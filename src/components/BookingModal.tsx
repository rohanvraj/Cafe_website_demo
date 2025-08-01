import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  treatment: '',
  branch: '',
  message: ''
});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c122865a-cfeb-4186-8229-c29b1a1ad584"); // ← replace this later

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.currentTarget.reset();
      setTimeout(onClose, 2000); // Close modal after success
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
                <p className="text-gray-600">Schedule your consultation today</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
  type="text"
  name="name"
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
  placeholder="Enter your full name"
/>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date *
              </label>
              <DatePicker
  selected={formData.date ? new Date(formData.date) : null}
  onChange={(date: Date | null) => {
    setFormData({ ...formData, date: date?.toISOString().split('T')[0] || '' });
  }}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
  placeholderText="Select date"
  minDate={new Date()}
  dateFormat="yyyy-MM-dd"
  required
  closeOnScroll={true}
/>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Preferred Time
              </label>
              <select
                name="time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Treatment Interest
              </label>
              <select
                name="treatment"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select treatment</option>
                <option value="acne">Acne Treatment</option>
                <option value="pigmentation">Pigmentation</option>
                <option value="hairfall">Hair Fall Treatment</option>
                <option value="laser">Laser Treatment</option>
                <option value="prp">PRP Therapy</option>
                <option value="chemical-peels">Chemical Peels</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Branch
            </label>
            <select
              name="branch"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select branch</option>
              <option value="downtown">Downtown Mumbai</option>
              <option value="andheri">Andheri West</option>
              <option value="bandra">Bandra East</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Additional Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
              placeholder="Any specific concerns or questions..."
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Submit Request</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;