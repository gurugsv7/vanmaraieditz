import React from 'react';
import { Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Play className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">EditMaster</span>
            </div>
            <p className="text-primary-500 mb-4">
              Professional video editing services that bring your vision to life.
              Creating compelling visual stories since 2016.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-500 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-500 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-500 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-500 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-500">
            © {new Date().getFullYear()} EditMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;