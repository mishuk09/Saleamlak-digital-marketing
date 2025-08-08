import HomePage from '../../HomePage';
import bestseo from './img/ai.png';
import seo from './img/seo.png';
import ButtonFormet from '../../ContactPage/ButtonFormet';
import Headline from '../../Headline';
import keyword from './img/keyword.png';
import onpage from './img/onpage.png';
import offpage from './img/offpage.png';
import link from './img/link.png';
import ai from './img/ai.png';
import analysis from './img/analysis.png';
import backlink from './img/backlink.png';
import cms from './img/cms.png';
import data from './img/data.png';
import index from './img/index.png';
import localseo from './img/localseo.png';
import opt from './img/opt.png';
import voice from './img/voice.png';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import BlogSection from '../../../pages/BlogSection/BlogSection';
import ServiceBtn from '../../ServiceBtn';
import { CheckCircle } from 'lucide-react';



const Seo = () => {

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
    const webItems = [
        {
            id: 1,
            img: keyword,
            title: "Keyword Research",
            details: "Finding high-impact search terms to optimize content and improve visibility.",
        },
        {
            id: 2,
            img: onpage,
            title: "On-Page SEO",
            details: "Optimizing content, meta tags, and structure for better search rankings.",
        },
        {
            id: 3,
            img: offpage,
            title: "Off-Page SEO",
            details: "Building authority through backlinks, social media, and external engagement.",
        },
        {
            id: 4,
            img: link,
            title: "Link Building",
            details: "Acquiring quality backlinks to enhance credibility and search rankings.",
        },
        {
            id: 5,
            img: analysis,
            title: "Analytics",
            details: "Tracking and analyzing website performance for data-driven decisions.",
        },
        {
            id: 5,
            img: analysis,
            title: "Technical SEO",
            details: "Optimizing website structure, speed, and mobile-friendliness for better search performance.",

        },
    ];

    const techItem = [
        {
            id: 1,
            img: index,
            title: "Crawling and Indexing",
            description: "Screaming Frog, Google Search Console"
        },
        {
            id: 2,
            img: keyword,
            title: "Keyword Research Tools",
            description: "SEMrush, Ahrefs, Ubersuggest"
        },
        {
            id: 3,
            img: cms,
            title: "CMS",
            description: "WordPress, Webflow SEO"
        },
        {
            id: 4,
            img: data,
            title: "Structured Data Markup",
            description: "Schema.org and JSON-LD"
        },
        {
            id: 5,
            img: opt,
            title: "WPO",
            description: "Speed optimization via Lighthouse, GTmetrix"
        },
        {
            id: 6,
            img: backlink,
            title: "Backlink Analysis Tools",
            description: "Moz, Ahrefs"
        },
        {
            id: 7,
            img: analysis,
            title: "Analytics Tools",
            description: "Google Analytics, Mixpanel"
        },
        {
            id: 8,
            img: localseo,
            title: "Local SEO Tools",
            description: "BrightLocal, Moz Local"
        },
        {
            id: 9,
            img: voice,
            title: "VSO",
            description: "Voice search optimization tools"
        }
    ];
    return (
        <div className=' '>
            <div className=''>
                <div className=' max-w-7xl mx-auto'>

                    <HomePage ch1='Seo Optimization' head1='Get SEO Services That Actually Drive Growth' btnname="Book Free SEO Audit" btnhref='/contact'
                        description='At Market Servo, we use data-backed strategies to boost your search rankings, drive targeted traffic, and increase qualified leads.
' image={seo}>
                    </HomePage>
                </div>

                <div className='mt-20'>
                    <Headline headline=" Our Seo Services" ch1="Our" ch2="Seo" ch3="Service" seeMore={false} />

                </div>

                <div className='bg-blue-50'>
                    <div className="my-10 max-w-7xl mx-auto  px-4 py-4   ">
                        <Carousel
                            responsive={responsive}
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            className="py-6"
                        >
                            {webItems.map((unit) => (

                                <div
                                    key={unit.id}
                                    className="group p-6 mx-3  bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow hover:scale-105"
                                >
                                    <img
                                        className="w-32 h-32 object-contain mx-auto  "
                                        src={unit.img}
                                        alt={unit.title}
                                    />
                                    <div className="text-slate-900 flex flex-col justify-between h-auto mt-4 text-center">
                                        <p className="text-lg font-semibold text-gray-800">{unit.title}</p>
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{unit.details}</p>
                                    </div>
                                </div>
                            ))}


                        </Carousel>
                    </div>
                </div>


            </div>

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-lg bg-sky-200 mt-24 p-6 md:h-[350px]'>
                <div className='flex flex-col justify-center md:w-1/2 space-y-4'>
                    <h1 className='font-bold text-3xl font-nunito'>
                        Why Choose Market Servo for SEO?
                    </h1>
                    <ul className='space-y-2'>
                        <li className='flex items-center'>
                            <CheckCircle className="text-green-500 w-5 h-5 mr-2" /> 300+ Campaigns Executed
                        </li>
                        <li className='flex items-center'>
                            <CheckCircle className="text-green-500 w-5 h-5 mr-2" /> AI-Powered Keyword Research
                        </li>
                        <li className='flex items-center'>
                            <CheckCircle className="text-green-500 w-5 h-5 mr-2" /> Core Web Vitals Focus
                        </li>
                        <li className='flex items-center'>
                            <CheckCircle className="text-green-500 w-5 h-5 mr-2" /> Full-Funnel SEO Strategy
                        </li>
                        <li className='flex items-center'>
                            <CheckCircle className="text-green-500 w-5 h-5 mr-2" /> Results You Can Measure
                        </li>
                    </ul>
                    <p className='md:w-1/3'>
                        <ServiceBtn name='Get a Free Call' href='/contact' />
                    </p>
                </div>
                <div className='flex justify-center items-center md:w-1/2'>
                    <img className='p-2 w-[300px] h-auto' src={bestseo} alt="SEO Services" />
                </div>
            </div>


            <div className='mt-[100px] max-w-7xl mx-auto  '>
                <Headline headline=" Technology we work on" ch1="Technology" ch2="We" ch3="Use" seeMore={false} />
                <div className="grid grid-cols-2  lg:grid-cols-7 bg-white p-5 gap-4 lg:gap-6 mt-6 justify-center  ">
                    {techItem.map((tutorial) => (
                        <div
                            key={tutorial.id}
                            className="shadow-md rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105 bg-gray-50"
                        >
                            <div className="w-[80px] h-[80px] mx-auto flex items-center justify-center overflow-hidden">
                                <img
                                    className="w-full h-full object-cover rounded-md"
                                    src={tutorial.img}
                                    alt={tutorial.title}
                                />
                            </div>
                            <p className="text-gray-800 mt-3 font-semibold text-sm">{tutorial.title}</p>
                        </div>
                    ))}
                </div>

            </div>
            <BlogSection />
        </div>
    )
};

export default Seo;