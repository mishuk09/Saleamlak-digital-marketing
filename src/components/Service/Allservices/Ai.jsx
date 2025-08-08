import BlogSection from '../../../pages/BlogSection/BlogSection';
import Headline from '../../Headline';
import ServiceBtn from '../../ServiceBtn';
import Carousel from "react-multi-carousel";
import HomePage from '../../HomePage';
import aishort from './img/aishort.png';  // Placeholder for AI-related visual

import aihome from './img/aihome.png';  // Placeholder for AI-related visual

// Importing necessary icons (Lucide icons)
import { FileText, PlayCircle, BarChart, Users, Search, Zap, Bot, Globe } from 'lucide-react';

const Ai = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const aiServices = [
        {
            id: 1,
            img: <Bot size={80} className="text-purple-500" />,
            title: "Customer Support Bots",
            details: "GPT-powered chat agents for websites and apps."
        },
        {
            id: 2,
            img: <Users size={80} className="text-blue-500" />,
            title: "Sales & Lead Generation Agents",
            details: "AI agents that qualify leads and book calls."
        },
        {
            id: 3,
            img: <PlayCircle size={80} className="text-teal-500" />,
            title: "Content Creation Agents",
            details: "Generate scripts, emails, and LinkedIn posts with AI."
        },
        {
            id: 4,
            img: <FileText size={80} className="text-orange-500" />,
            title: "Workflow Automation",
            details: "Automate marketing campaigns and CRM updates."
        },
        {
            id: 5,
            img: <BarChart size={80} className="text-yellow-500" />,
            title: "Internal Task Assistants",
            details: "Automate reports, email summaries, and repetitive tasks."
        },
        {
            id: 6,
            img: <Search size={80} className="text-green-500" />,
            title: "Custom Agent Building",
            details: "Tailored AI solutions for your specific tasks."
        }
    ];

    const techItem = [
        {
            id: 1,
            img: <Bot size={50} className="text-purple-500" />,
            title: "GPT-4",
            description: "Advanced AI language model for NLP tasks.",
        },
        {
            id: 2,
            img: <Zap size={50} className="text-yellow-500" />,
            title: "n8n",
            description: "Open-source workflow automation tool.",
        },
        {
            id: 3,
            img: <Search size={50} className="text-green-500" />,
            title: "LangChain",
            description: "Framework for building LLM-powered applications.",
        },
        {
            id: 4,
            img: <BarChart size={50} className="text-teal-500" />,
            title: "Pinecone",
            description: "Vector database for machine learning models.",
        },
        {
            id: 5,
            img: <Globe size={50} className="text-blue-700" />,
            title: "Zapier",
            description: "Automates tasks between apps and services.",
        },
        {
            id: 6,
            img: <Users size={50} className="text-blue-600" />,
            title: "Slack",
            description: "Team communication and collaboration platform.",
        },
        {
            id: 7,
            img: <PlayCircle size={50} className="text-orange-500" />,
            title: "Google Sheets",
            description: "Collaborative spreadsheet tool for integrations.",
        }
    ];


    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <HomePage
                    ch1='AI Agent Services'
                    head1='Automate Your Business with Smart AI Agents'
                    btnname="Request a Free AI Consultation"
                    btnhref='/contact'
                    description='Unlock the power of automation with AI agents built by Market Servo. From customer support bots to task automation, we develop intelligent systems that scale your growth.'
                    image={aihome}
                />
            </div>

            <div className='mt-20'>
                <Headline headline="Our AI Agent Capabilities" ch1="Our" ch2="AI" ch3="Capabilities" seeMore={false} />
            </div>

            <div className='bg-blue-50'>
                <div className="my-10 max-w-7xl mx-auto px-4 py-4">
                    <Carousel
                        responsive={responsive}
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        className="py-6"
                    >
                        {aiServices.map((unit) => (
                            <div key={unit.id} className="group h-70 p-6 mx-3 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow hover:scale-105">
                                <div className="w-32 h-32 mx-auto flex items-center justify-center relative">
                                    {unit.img}
                                </div>
                                <div className="text-slate-900 flex flex-col justify-between h-auto mt-4 text-center">
                                    <p className="text-lg font-semibold text-gray-800">{unit.title}</p>
                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{unit.details}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-lg bg-purple-200 mt-24 p-6 md:h-[300px]">
                <div className="flex flex-col justify-center md:w-1/2 space-y-4">
                    <h1 className="font-bold text-3xl font-nunito">Need an AI Agent to Boost Your Business?</h1>
                    <p className="text-justify font-nunito mt-3">
                        Automate your operations, supercharge productivity, and scale your digital presence with AI agents powered by GPT, LangChain, and more.
                    </p>
                    <p className="md:w-1/3 mt-2">
                        <ServiceBtn name="Request a Free AI Consultation" href="/contact" />
                    </p>
                </div>
                <div className="w-[50%] hidden sm:w-[100%] xs:w-[100%] xs:mt-3 sm:mt-0 md:w-[50%] md:flex items-center text-center justify-end pe-20">
                    <img className="p-2 xs:w-[300px] sm:w-[300px] h-full" src={aishort} alt="AI Agent Services" />
                </div>
            </div>

            <div className='mt-[100px] max-w-7xl mx-auto'>
                <Headline headline="Tech Stack & Tools We Use" ch1="Tech" ch2="We" ch3="Use" seeMore={false} />
                <div className="grid grid-cols-2 lg:grid-cols-7 bg-white p-5 gap-4 lg:gap-6 mt-6 justify-center">
                    {techItem.map((tutorial) => (
                        <div
                            key={tutorial.id}
                            className="shadow-md rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105 bg-gray-50 relative group"
                        >
                            <div className="w-[80px] h-[80px] mx-auto flex items-center justify-center overflow-hidden">
                                {tutorial.img}
                            </div>
                            <p className="text-gray-800 mt-3 font-semibold text-sm">{tutorial.title}</p>

                            {/* Professional Tooltip with Arrow */}
                            <div className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 mb-2 p-4 bg-blue-600 text-white text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45"></div>
                                {tutorial.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <BlogSection />
        </div>
    );
};

export default Ai;
