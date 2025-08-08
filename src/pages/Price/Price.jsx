import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import onecoin from '../../assets/onecoin.png'
import mulcoin from '../../assets/mulcoin.png'

const Price = () => {
    const [billingCycle, setBillingCycle] = useState("annually");

    const plans = [
        {
            name: "Starter",
            price: 499,
            popular: false,
            description: "Best for: Getting online visibility",
            features: [
                "✅ Website audit + minor fixes",
                "✅ Local SEO setup (Google My Business)",
                "✅ 12 social media posts/month",
                "✅ 1 paid campaign setup (Google or Meta)",
                "✅ Basic analytics report (monthly)"
            ]
        },
        {
            name: "Growth",
            price: 999,
            popular: true,
            description: "Best for: Growing traction and reach",
            features: [
                "✅ Full on-page SEO + keyword strategy",
                "✅ Google + Meta ads (2 platforms, 2 campaigns)",
                "✅ Monthly blog content (3 posts)",
                "✅ Social media management (12 posts/month)",
                "✅ Custom landing page",
                "✅ Conversion tracking setup",
                "✅ Monthly performance call",
                "✅ Email marketing setup (Klaviyo / Mailchimp)"
            ]
        },
        {
            name: "Scale",
            price: 1999,
            popular: false,
            description: "Best for: Serious scale and lead generation",
            features: [
                "✅ All Growth features",
                "✅ Multi-channel ads (Google, Meta, LinkedIn)",
                "✅ CRO + funnel optimization",
                "✅ Technical SEO (site speed, schema, Core Web Vitals)",
                "✅ A/B testing & analytics dashboards",
                "✅ Custom email flows (abandoned cart, welcome series)",
                "✅ Web dev changes & support",
                "✅ Bi-weekly reporting + Slack support"
            ]
        },
        {
            name: "Enterprise / Custom Plan",
            price: "Custom",
            popular: false,
            description: "Custom solution for your business",
            features: [
                "✅ Multi-page, multi-lingual site + custom CMS + advanced UI Website Building",
                "✅ Full local + international SEO with schema + backlink outreach",
                "✅ Omnichannel ads (Google, Meta, LinkedIn, YouTube, Pinterest)",
                "✅ 10+ campaigns/month + 5 automated flows",
                "✅ WhatsApp + Email + CRM + Lead qualification bots",
                "✅ Video production, AI blog creation, copywriting",
                "✅ Funnel mapping, heatmaps, conversion rate optimization",
                "✅ Weekly strategy calls, reporting dashboards, Slack channel"
            ]
        },
    ];

    return (
        <div className="flex relative pt-10 flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white p-6">
            <img src={onecoin} className="absolute top-10 left-4 md:left-20 w-10 md:w-20 " alt="" />
            <img src={mulcoin} className="absolute bottom-10 right-10 w-24 " alt="" />
            <p className="text-gray-600 font-medium text-center md:text-start text-lg">
                Explore <span className="text-blue-500 text-sm rounded-full py-1 px-2 bg-gray-300">Our</span> Price
            </p>
            <h2 className="text-4xl mt-4 text-center md:text-start md:text-5xl font-bold text-gray-800">
                Pricing plan for your Business
            </h2>

            <div className="flex items-center space-x-2 mt-4 mb-8">
                <span className="text-blue-600 ">Monthly</span>
                <label className="relative inline-flex cursor-pointer items-center">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={billingCycle === "annually"}
                        onChange={() =>
                            setBillingCycle(billingCycle === "annually" ? "monthly" : "annually")
                        }
                    />
                    <div className="peer-checked:bg-blue-600 w-14 h-7 bg-gray-300 rounded-full p-1 flex items-center">
                        <div className="h-5 w-5 bg-white rounded-full transform transition-transform peer-checked:translate-x-7"></div>
                    </div>
                </label>
                <span className="text-gray-600">Annually - Save 20%</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 w-full max-w-7xl">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center border ${plan.popular ? "border-blue-600" : "border-gray-200"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-tr-2xl rounded-bl-2xl">
                                Popular
                            </div>
                        )}
                        <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                        <p className="text-4xl font-bold mb-2">
                            {plan.price === "Custom" ? "Contact for pricing" : `$${billingCycle === "annually" ? plan.price : plan.price * 12 * 0.8}`}
                            <span className="text-sm font-normal"> per user/month</span>
                        </p>
                        <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                        <ul className="text-gray-600 space-y-2 text-sm mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>

                        <a
                            href={plan.popular}
                            className={`pe-2 w-40 ps-4 cursor-pointer mt-6 py-1 ${plan.popular
                                ? "bg-blue-600 text-white hover:bg-black"
                                : "bg-black text-white hover:bg-blue-500"
                                } text-white hover:text-white transition-all duration-300 ease-in-out rounded-full font-medium flex items-center space-x-2`}
                        >
                            <span>Get Started</span>
                            <span className="rounded-full px-2 py-2 price-btn bg-white text-blue-500">
                                <ArrowUpRight size={20} />
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
