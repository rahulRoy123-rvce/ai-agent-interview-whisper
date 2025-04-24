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

const Index = () => {
  return (
    <DotBackground>
      <div className="w-full">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 py-4 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 overflow-visible">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center space-x-2">
                <img src={src2} alt="GoBot Logo" className="h-12 w-auto object-contain" />
              </a>
              
              <div className="hidden md:flex items-center space-x-10">
                <a 
                  href="#features" 
                  className="text-deepPurple hover:text-skyBlue font-semibold text-lg relative group transition-all duration-300"
                >
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-skyBlue group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-deepPurple hover:text-skyBlue font-semibold text-lg relative group transition-all duration-300"
                >
                  How It Works
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-skyBlue group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#pricing" 
                  className="text-deepPurple hover:text-skyBlue font-semibold text-lg relative group transition-all duration-300"
                >
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-skyBlue group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#contact" 
                  className="text-deepPurple hover:text-skyBlue font-semibold text-lg relative group transition-all duration-300"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-skyBlue group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="hidden md:block px-5 py-2 text-gray-700 hover:text-skyBlue transition-colors">Sign In</button>
                <button className="px-5 py-2 bg-gradient-to-r from-skyBlue to-boldPurple text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-sm">Get Started</button>
                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>

        <main className="relative w-full">
          {/* All your sections */}
          {/* Section 1: User Interviews */}
          <section id="user-interviews" className="py-20">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedText 
                text="User Interviews, Not Surveys" 
                className="text-4xl md:text-6xl font-bold text-gray-800 flex flex-wrap justify-center gap-2"
              />
              <FadeIn delay={0.4}>
                <p className="text-gray-600 mt-6 text-xl">
                  Ditch boring forms. GoBot is your AI-powered interviewer that chats with your users over WhatsApp, email, or web capturing feedback that feels human.
                </p>
              </FadeIn>
            </div>
          </section>

          
          
          {/* Section 1: Container Scroll Animation */}
          <section id="how-it-works">
            
              <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto px-4">
                {/* How It Works Section */}
                <section id="how-it-works-detail" className="py-10 relative">
                  <div className="absolute inset-0 bg-white/50 -z-10"></div>
                  <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                      <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">How It Works?</h2>
                      </FadeIn>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <FadeIn delay={0.2} direction="up">
                          <div className="bg-gradient-to-br from-skyBlue to-boldPurple p-8 rounded-xl border border-gray-200 shadow-md h-full flex flex-col">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">1</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Start the Chat</h3>
                            <p className="text-white/90 text-lg">No forms. Just a friendly message via WhatsApp or email.</p>
                          </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.3} direction="up">
                          <div className="bg-gradient-to-br from-softYellow to-skyBlue p-8 rounded-xl border border-gray-200 shadow-md h-full flex flex-col">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">2</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Natural Conversation</h3>
                            <p className="text-white/90 text-lg">GoBot listens, nudges, and asks follow-ups like a real researcher.</p>
                          </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.4} direction="up">
                          <div className="bg-gradient-to-br from-mutedViolet to-mintGreen p-8 rounded-xl border border-gray-200 shadow-md h-full flex flex-col">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">3</div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Rich Insights Delivered</h3>
                            <p className="text-white/90 text-lg">You get structured feedback, key themes, and voice-based emotional context.</p>
                          </div>
                        </FadeIn>
                      </div>
                      
                      <FadeIn delay={0.5}>
                        <div className="relative p-10 rounded-xl border border-gray-200 shadow-xl overflow-hidden">
                          {/* Background image */}
                          <img 
                            src={img1} 
                            alt="Background" 
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          
                          <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-8">Features:</h3>
                            <ul className="space-y-6">
                              <li className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-skyBlue shrink-0"></div>
                                <span className="text-xl font-semibold text-white">Text and Voice Notes</span>
                              </li>
                              <li className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-mutedViolet shrink-0"></div>
                                <span className="text-xl font-semibold text-white">Works on WhatsApp, Email, Instagram DMs</span>
                              </li>
                              <li className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-mintGreen shrink-0"></div>
                                <span className="text-xl font-semibold text-white">No login or dashboard for users</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </section>
              </div>
            
          </section>

          {/* Why GoBot Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: 'rgb(62, 47, 80)' }}>Why GoBot?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {/* Card 1: Feels Human */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2" 
                    style={{ 
                      background: 'linear-gradient(to bottom right, rgb(108, 196, 213), rgb(123, 91, 164))'
                    }}>
                    <h3 className="text-xl font-bold text-white mb-4">Feels Human</h3>
                    <p className="text-white/90">Conversations that sound real—so users actually respond.</p>
                  </div>
                </div>

                {/* Card 2: Multi-Modal Feedback */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2"
                    style={{ 
                      background: 'linear-gradient(to bottom right, rgb(245, 200, 122), rgb(108, 196, 213))'
                    }}>
                    <h3 className="text-xl font-bold text-white mb-4">Multi-Modal Feedback</h3>
                    <p className="text-white/90">Capture both words and emotion with voice notes.</p>
                  </div>
                </div>

                {/* Card 3: Insights, Not Spreadsheets */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2"
                    style={{ 
                      background: 'linear-gradient(to bottom right, rgb(123, 91, 164), rgb(245, 200, 122))'
                    }}>
                    <h3 className="text-xl font-bold text-white mb-4">Insights, Not Spreadsheets</h3>
                    <p className="text-white/90">Themes, summaries, quotes—automatically delivered.</p>
                  </div>
                </div>

                {/* Card 4: Frictionless Experience */}
                <div className="group">
                  <div className="h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2"
                    style={{ 
                      background: 'linear-gradient(to bottom right, rgb(108, 196, 213), rgb(123, 91, 164))'
                    }}>
                    <h3 className="text-xl font-bold text-white mb-4">Frictionless Experience</h3>
                    <p className="text-white/90">No forms. No dashboards. Just chats.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          

         

          {/* Target Users Carousel Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-deepPurple">Use GoBot to</h2>
                <p className="text-xl text-gray-600 text-center mb-16">GoBot is built for Entrepreneurs, Brands & Individuals</p>
              </FadeIn>

              <div className="max-w-[1400px] mx-auto">
                <Carousel
                  slides={[
                    {
                      title: "For Entrepreneurs & Startups",
                      description: "Validate and test your ideas quickly",
                      icon: "",
                      bgClass: "bg-gradient-to-br from-skyBlue to-boldPurple",
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
                      bgClass: "bg-gradient-to-br from-softYellow to-skyBlue",
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
                      bgClass: "bg-gradient-to-br from-mutedViolet to-mintGreen",
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
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <FadeIn delay={0.1}>
                 
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Let's change how feedback works.<br />
                    No more forms. No more dashboards. Just real conversations.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-gradient-to-r from-skyBlue to-boldPurple text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md">
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
