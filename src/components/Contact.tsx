import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Bot } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Oops! Robot needs your name ✍️';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'I need your email to send a reply back! 📧';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'That email format looks a bit glitchy... 🤔';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'What did you want to tell me? 💭';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Tell me more! At least 10 characters please 😊';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSuccess(false);
    try {
      // Replace 'yourFormIdHere' with your actual Formspree form ID
      const formspreeUrl = 'https://formspree.io/f/mwpndnnw';
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSuccess(true);
      } else {
        setErrors({ form: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setErrors({ form: 'Something went wrong. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/siddheshsuthar',
      color: 'hover:text-blue-400',
      doodle: '💼'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Siddhesh-04?tab=repositories',
      color: 'hover:text-gray-300',
      doodle: '🐱'
    },
    // {
    //   name: 'Twitter',
    //   icon: <Twitter className="w-5 h-5" />,
    //   url: '',
    //   color: 'hover:text-blue-300',
    //   doodle: '🐦'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
            Let's{' '}
            <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Have an idea or opportunity? Let's build something intelligent together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 doodle-font">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-neon-teal to-neon-purple rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200 neon-glow flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Email Me</h4>
                    <a href="mailto:contact.siddhesh04@gmail.com">
                      <p className="text-gray-300 text-sm sm:text-base break-all hover:text-blue-400">contact.siddhesh04@gmail.com</p>
                    </a>
                    <span className="text-xs text-gray-400">I usually reply within 24 hours ⚡</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-neon-coral to-neon-yellow rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200 neon-glow-coral flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Location</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Gandhinagar, Gujarat, India</p>
                    <span className="text-xs text-gray-400">Open to remote opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 doodle-font">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`group relative w-12 h-12 bg-dark-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center text-gray-300 ${social.color} border border-neon-teal/20 energy-ripple`}
                    aria-label={social.name}
                  >
                    {social.icon}
                    
                    {/* Doodle hover effect */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-neon-teal/30">
                      {social.name} {social.doodle}
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-dark-700 rounded-2xl shadow-xl p-4 sm:p-8 border border-neon-teal/20 mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center justify-center sm:justify-start doodle-font">
                  <span>Send me a message</span>
                  <Bot className="w-5 h-5 text-neon-teal ml-2 animate-robot-float" />
                </h3>
              </div>
              {errors.form && (
                <p className="mb-2 text-sm text-red-400 text-center">{errors.form}</p>
              )}
              {success && (
                <p className="mb-2 text-sm text-green-400 text-center">Message sent! I'll get back to you soon ✨</p>
              )}
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors duration-200 focus:outline-none bg-transparent text-white placeholder-gray-500 ${
                    errors.name
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-600 focus:border-neon-teal'
                  }`}
                  placeholder="Name"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors duration-200 focus:outline-none bg-transparent text-white placeholder-gray-500 ${
                    errors.email
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-600 focus:border-neon-teal'
                  }`}
                  placeholder="name@example.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors duration-200 focus:outline-none resize-none bg-transparent text-white placeholder-gray-500 ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-600 focus:border-neon-teal'
                  }`}
                  placeholder="Tell me about your project or just say hi! 👋"
                  required
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-neon-teal to-neon-purple text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 neon-glow energy-ripple text-sm sm:text-base ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </section>
  );
  
};

export default Contact;