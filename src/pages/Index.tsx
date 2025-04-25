import React, { useState } from "react";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { ContainerScroll, ContainerScrollText, ContainerScrollImage } from "@/components/ui/container-scroll";
import { HeroSection } from "@/components/ui/hero-section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Footer } from "@/components/ui/footer";
import { AnimatedText, FadeIn } from "@/components/ui/motion";
import { MobileMenu } from "@/components/mobile-menu";
import src2 from "../../public/logo_gobot.png"
import img1 from "../../public/img1.png"
import { Carousel } from "@/components/ui/carousel";
import { DotBackground } from "@/components/ui/dot-background";
import {
  IconMicrophone,
  IconBrandWhatsapp,
  IconLock,
  IconCloud,
  IconUsers,
  IconHeadset,
  IconArrowBack,
  IconHeart,
  IconMessageCircle,
  IconApps,
  IconUserCircle
} from "@tabler/icons-react";

const Index = () => {
  return (
    <DotBackground>
      <div className="w-full">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 py-3 bg-white/50 backdrop-blur-sm">
          <div className="max-w-[1600px] mx-auto px-2">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center -ml-2">
                <img src={src2} alt="GoBot Logo" className="h-20 w-auto object-contain" />
              </a>
              
              <div className="hidden md:flex items-center space-x-8 ml-auto">
                <a 
                  href="#features" 
                  className="text-[#3D2E4F] hover:text-[#6CC3D5] font-medium text-lg px-2 py-1 relative group transition-all duration-300"
                >
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6CC3D5] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-[#3D2E4F] hover:text-[#6CC3D5] font-medium text-lg px-2 py-1 relative group transition-all duration-300"
                >
                  How It Works
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6CC3D5] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#pricing" 
                  className="text-[#3D2E4F] hover:text-[#6CC3D5] font-medium text-lg px-2 py-1 relative group transition-all duration-300"
                >
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6CC3D5] group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#contact" 
                  className="text-[#3D2E4F] hover:text-[#6CC3D5] font-medium text-lg px-2 py-1 relative group transition-all duration-300"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6CC3D5] group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              
              <div className="flex items-center space-x-6">
                <button className="hidden md:block px-6 py-2 text-[#A28DDA] hover:text-[#6CC3D5] transition-colors font-medium text-lg">Sign In</button>
                <button className="px-6 py-2.5 bg-[#6CC3D5] text-white font-medium text-lg rounded-lg hover:opacity-90 transition-all shadow-sm">Get Started</button>
                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>

        <main className="relative w-full">
          {/* All your sections */}
          {/* Section 1: User Interviews */}
          <section id="user-interviews" className="py-12">
            <div className="max-w-[1200px] mx-auto px-2 text-center">
              <AnimatedText 
                text="User Interviews, Not Surveys" 
                className="text-4xl md:text-6xl font-bold text-[#3D2E4F] flex flex-wrap justify-center gap-2"
              />
              <FadeIn delay={0.4}>
                <p className="text-[#A28DDA] mt-4 text-xl max-w-[800px] mx-auto">
                  Ditch boring forms. GoBot is your AI-powered interviewer that chats with your users over WhatsApp, email, or web capturing feedback that feels human.
                </p>
              </FadeIn>
            </div>
          </section>

          
          
          {/* Section 1: Container Scroll Animation */}
          <section id="how-it-works">
            
              <div className="relative flex flex-col items-center w-full max-w-[1600px] mx-auto px-2">
                {/* How It Works Section */}
                <section id="how-it-works-detail" className="py-8 relative w-full">
                  <div className="absolute inset-0 bg-white/50 -z-10"></div>
                  <div className="max-w-[1600px] mx-auto px-2">
                    <div className="max-w-[1600px] mx-auto">
                      <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-[#3D2E4F]">How It Works?</h2>
                      </FadeIn>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <FadeIn delay={0.2} direction="up">
                          <div className="bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3] p-8 rounded-xl border border-gray-200 shadow-md h-full flex flex-col">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">1</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Start the Chat</h3>
                            <p className="text-white/90 text-lg">No forms. Just a friendly message via WhatsApp or email.</p>
                          </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.3} direction="up">
                          <div className="bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3] p-8 rounded-xl border border-gray-200 shadow-md h-full flex flex-col">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">2</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Natural Conversation</h3>
                            <p className="text-white/90 text-lg">GoBot listens, nudges, and asks follow-ups like a real researcher.</p>
                          </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.4} direction="up">
                          <div className="bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3] p-8 rounded-xl border border-gray-200 shadow-md h-full flex flex-col">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">3</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Rich Insights Delivered</h3>
                            <p className="text-white/90 text-lg">You get structured feedback, key themes, and voice-based emotional context.</p>
                          </div>
                        </FadeIn>
                      </div>
                      
                      <FadeIn delay={0.5}>
                        <div className="py-16">
                          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#3D2E4F]">
                            Features
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 max-w-7xl mx-auto">
                            {[
                              {
                                title: "Text and Voice Notes",
                                description: "Record feedback in any format - text messages or voice recordings for natural conversations.",
                                icon: <IconMessageCircle className="w-8 h-8" />,
                              },
                              {
                                title: "Multi-Platform Support",
                                description: "Works seamlessly across WhatsApp, Email, and Instagram DMs for maximum reach.",
                                icon: <IconApps className="w-8 h-8" />,
                              },
                              {
                                title: "No Login Required",
                                description: "Zero friction for users - no accounts, no dashboards, just simple conversations.",
                                icon: <IconUserCircle className="w-8 h-8" />,
                              },
                            ].map((feature, index) => (
                              <div
                                key={feature.title}
                                className={`flex flex-col lg:border-r dark:border-neutral-800 py-12 relative group ${
                                  index === 0 && "lg:border-l dark:border-neutral-800"
                                }`}
                              >
                                <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
                                <div className="mb-6 relative z-10 px-12 text-[#6CC3D5]">
                                  {feature.icon}
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-4 relative z-10 px-12">
                                  <div className="absolute left-0 inset-y-0 h-8 group-hover:h-10 w-1.5 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-[#6CC3D5] transition-all duration-200 origin-center" />
                                  <span className="group-hover:translate-x-2 transition duration-200 inline-block text-[#3D2E4F]">
                                    {feature.title}
                                  </span>
                                </div>
                                <p className="text-base md:text-lg text-[#A28DDA] max-w-xs relative z-10 px-12 leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </section>
              </div>
            
          </section>

          {/* Why GoBot Section */}
          <section className="py-12 relative">
            <div className="max-w-[1600px] mx-auto px-2">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#3D2E4F]">Why GoBot?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
                {/* Card 1: Feels Human */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]">
                    <h3 className="text-xl font-bold text-white mb-4">Feels Human</h3>
                    <p className="text-white/90">Conversations that sound real—so users actually respond.</p>
                  </div>
                </div>

                {/* Card 2: Multi-Modal Feedback */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]">
                    <h3 className="text-xl font-bold text-white mb-4">Multi-Modal Feedback</h3>
                    <p className="text-white/90">Capture both words and emotion with voice notes.</p>
                  </div>
                </div>

                {/* Card 3: Insights, Not Spreadsheets */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]">
                    <h3 className="text-xl font-bold text-white mb-4">Insights, Not Spreadsheets</h3>
                    <p className="text-white/90">Themes, summaries, quotes—automatically delivered.</p>
                  </div>
                </div>

                {/* Card 4: Frictionless Experience */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]">
                    <h3 className="text-xl font-bold text-white mb-4">Frictionless Experience</h3>
                    <p className="text-white/90">No forms. No dashboards. Just chats.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          

         

          {/* Target Users Carousel Section */}
          <section className="py-12 relative">
            <div className="max-w-[1600px] mx-auto px-2">
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-[#3D2E4F]">Use GoBot to</h2>
                <p className="text-xl text-[#A28DDA] text-center mb-8">GoBot is built for Entrepreneurs, Brands & Individuals</p>
              </FadeIn>

              <div className="max-w-[1600px] mx-auto">
                <Carousel
                  slides={[
                    {
                      title: "For Entrepreneurs & Startups",
                      description: "Validate and test your ideas quickly",
                      icon: "",
                      bgClass: "bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]",
                      items: [
                        "Validate your next big idea in minutes, not weeks.",
                        "Get honest feedback from potential users—on WhatsApp.",
                        "Your investor pitch got feedback. Shouldn't your product?",
                        "Use GoBot to test MVPs, new features, or landing pages with your early adopter community."
                      ]
                    },
                    {
                      title: "For D2C & Brand Owners",
                      description: "Get real customer insights",
                      icon: "",
                      bgClass: "bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]",
                      items: [
                        "Launch smarter, not louder.",
                        "Discover what customers really think—without a survey link.",
                        "From campaign feedback to product reviews—all inside a chat.",
                        "Perfect for campaign post-mortems, product sampling responses, or influencer-led market research."
                      ]
                    },
                    {
                      title: "For Individuals & Creators",
                      description: "Understand your audience better",
                      icon: "",
                      bgClass: "bg-gradient-to-br from-[#6CC3D5] to-[#7A5AA3]",
                      items: [
                        "Turn followers into insight engines.",
                        "Ask, listen, and grow—with zero spreadsheets.",
                        "Know what your audience wants next—just talk to them.",
                        "Use GoBot to test content ideas, run community polls, or understand what your audience loves most."
                      ]
                    }
                  ]}
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 relative">
            <div className="max-w-[1600px] mx-auto px-2">
              <div className="max-w-[800px] mx-auto text-center">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#3D2E4F] mb-6">
                    Let's change how feedback works.
                  </h2>
                  <p className="text-xl text-[#A28DDA] mb-8">
                    No more forms. No more dashboards. Just real conversations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-[#6CC3D5] text-white font-medium text-lg rounded-lg hover:opacity-90 transition-all shadow-md">
                      Try GoBot (Beta)
                    </button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </DotBackground>
  );
};

export default Index;
