import { Facebook, Instagram, Code, Mail, Settings, Layers, MapPin, User, Lock, Copyright, PhoneCall, Linkedin, X, Youtube } from 'lucide-react';
import mainlogo from './mainlogo.png';

const Footer = () => {
    return (
        <div id='footer' className='w-full mt-20'>
            <div className='bg-slate-950  pt-10   px-4  h-auto  '>
                <div className="max-w-7xl border-b border-gray-500 mx-auto px-4 md:px-8 pb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left text-slate-300 gap-10">

                        {/* Branding Section */}
                        <div className="flex-1 flex flex-col items-center  md:items-center">
                            <h2 className="text-white font-bold text-4xl">Market servo</h2>
                            <p className="font-nunito text-sm text-slate-300 mt-2 text-justify md:text-left">
                                Your gateway to digital success! Elevate your brand with our cutting-edge strategies, driving meaningful growth.
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="flex-1 hidden md:flex flex-col items-center md:items-start justify-center">
                            <p className="font-bold text-blue-500 pb-2">All About</p>
                            <a href="/about" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <User className="inline-block mr-2" size={20} /> About
                            </a>
                            <a href="/contact" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <PhoneCall className="inline-block mr-2" size={20} /> Contact
                            </a>
                            <a href="/web" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Code className="inline-block mr-2" size={20} /> Web
                            </a>
                            <a href="/seo" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Layers className="inline-block mr-2" size={20} /> SEO
                            </a>
                            <a href="/social" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Settings className="inline-block mr-2" size={20} /> Social Media
                            </a>
                            <a href="/privacy" className="font-nunito text-sm mt-2 hover:text-blue-500">
                                <Lock className="inline-block mr-2" size={20} />Privacy & Policy
                            </a>
                        </div>

                        {/* Contact Section */}
                        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
                            <p className="font-bold text-blue-500 pb-2">Official Contact Info</p>
                            <p className="font-nunito text-sm mt-2">
                                <MapPin className="inline-block mr-2" size={20} /> Rajkot, Gujarat, India
                            </p>
                            <p className="font-nunito text-sm mt-2">
                                <Mail className="inline-block mr-2" size={20} /> info@marketservo.com
                            </p>
                            <div className="mt-3 space-x-4">
                                <a href="https://www.facebook.com/marketservo" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="inline-block hover:text-blue-500" size={24} />
                                </a>
                                <a href="https://www.instagram.com/marketservo?igsh=YTk5cTRlbG00a3U2" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="inline-block hover:text-blue-500" size={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/108662115/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="inline-block hover:text-blue-500" size={24} />
                                </a>
                                <a href="https://x.com/marketservo" target="_blank" rel="noopener noreferrer">
                                    <X className="inline-block hover:text-blue-500" size={24} />
                                </a>
                                <a href="https://www.youtube.com/@Marketservo" target="_blank" rel="noopener noreferrer">
                                    <Youtube className="inline-block hover:text-blue-500" size={24} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <p className='text-gray-300 flex py-4  items-center justify-center'> <Copyright size={18} className='me-2' />Market Servo – Digital Marketing & AI Automation Agency
                </p>


            </div>
        </div>
    );
};

export default Footer;