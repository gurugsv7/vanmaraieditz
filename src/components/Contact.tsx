import React, { useState } from 'react';
import { Mail, Linkedin, Youtube, Send, CheckCircle, Sparkles, Globe, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, isSubmitting: true });
    
    // Simulate form submission with futuristic delay pattern
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormState({
      isSubmitting: false,
      isSubmitted: true,
      error: null
    });
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (formState.isSubmitted) {
    return (
      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-700 opacity-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse bg-primary-500 rounded-full blur-xl opacity-20" />
              <CheckCircle className="w-20 h-20 text-primary-700 mb-4 relative z-10 animate-bounce" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900 mb-2">Transmission Successful!</h2>
            <p className="text-primary-700 mb-6">Your message has been received. Expect a response shortly.</p>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900 blur-lg opacity-25 group-hover:opacity-50 transition-opacity" />
              <button
                onClick={() => setFormState({ isSubmitting: false, isSubmitted: false, error: null })}
                className="relative bg-white/90 backdrop-blur-sm text-primary-900 px-8 py-3 rounded-full 
                         hover:bg-white transition-all duration-300 transform hover:scale-105
                         border border-primary-200 shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  New Message
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-primary-900">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-700 opacity-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-700 rounded-full animate-pulse" />
              Connect with Us
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full animate-pulse delay-75" />
            </h2>
          </div>
          <p className="text-lg text-primary-700">
            Let's create something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-primary-900 mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 animate-spin-slow" />
              Global Reach
            </h3>
            <div className="space-y-6">
              {[
                { icon: Mail, text: 'vanmaraisasikumar07@gmail.com', delay: '0' },
                { icon: Linkedin, text: 'www.linkedin.com/in/vanmaraieditz', delay: '100' }
              ].map(({ icon: Icon, text, delay }) => (
                <div
                  key={text}
                  className="group relative"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-4 flex items-center 
                                transform transition-all duration-300 hover:translate-x-2
                                border border-primary-100 hover:border-primary-500 shadow-sm hover:shadow-lg">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-100 rounded-full transform rotate-6 group-hover:rotate-45 transition-transform" />
                      <Icon className="h-6 w-6 text-primary-700 relative z-10 m-2" />
                    </div>
                    <span className="text-primary-700 ml-4 group-hover:text-primary-900 transition-colors">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl -rotate-1" />
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl rotate-1" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-primary-100 shadow-xl space-y-6">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' }
              ].map(({ name, label, type }) => (
                <div key={name} className="relative group">
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm
                             border-2 border-primary-100 focus:border-primary-700 outline-none
                             transition-all duration-300
                             hover:shadow-lg focus:shadow-xl"
                    placeholder=" "
                  />
                  <label
                    htmlFor={name}
                    className="absolute left-4 top-3 text-primary-700 transition-all duration-300
                              peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                              peer-focus:-top-7 peer-focus:text-sm peer-focus:text-primary-900
                              -top-7 text-sm"
                  >
                    {label}
                  </label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="w-4 h-4 text-primary-500" />
                  </div>
                </div>
              ))}

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="peer w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm
                           border-2 border-primary-100 focus:border-primary-700 outline-none
                           transition-all duration-300 resize-none
                           hover:shadow-lg focus:shadow-xl"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-primary-700 transition-all duration-300
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                            peer-focus:-top-7 peer-focus:text-sm peer-focus:text-primary-900
                            -top-7 text-sm"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-900 to-primary-700 opacity-90
                              group-hover:bg-gradient-to-r group-hover:from-primary-900 group-hover:via-primary-700 group-hover:to-primary-900
                              transition-all duration-500 animate-gradient-x" />
                <div className="relative px-8 py-4 flex items-center justify-center gap-3 text-white">
                  {formState.isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:animate-pulse" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;