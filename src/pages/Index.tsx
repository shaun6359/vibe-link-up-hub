
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Heart, Calendar, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const phrases = [
    "what's the motive?",
    "what's poppin?",
    "link or nah?"
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 1000);
    const timer2 = setTimeout(() => setAnimationPhase(2), 3000);
    const timer3 = setTimeout(() => setAnimationPhase(3), 5000);
    const timer4 = setTimeout(() => setShowContent(true), 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Welcome to the vibe! 🎉",
      description: "You're on the waitlist! We'll hit you up when we're ready to pop off.",
    });
    setEmail('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    toast({
      title: "Message sent! 💫",
      description: "We'll get back to you soon. Thanks for reaching out!",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center overflow-hidden">
        <div className="text-center">
          {phrases.map((phrase, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                animationPhase === index
                  ? 'opacity-100 animate-fade-in-up'
                  : animationPhase > index
                  ? 'opacity-0 animate-fade-out-down'
                  : 'opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-inter font-black text-white tracking-tight">
                {phrase}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-white font-inter">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <img 
            src="/lovable-uploads/47a0c5b2-5564-4f4c-babd-e7a63d6741a6.png" 
            alt="What's Poppin Logo" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 animate-float"
          />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-brand-red to-brand-purple bg-clip-text text-transparent">
            what's poppin
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-medium">
            tinder for events. swipe your way to the best vibes in town.
          </p>
          
          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="drop your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6"
                required
              />
              <Button 
                type="submit"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                join waitlist
              </Button>
            </div>
          </form>
          
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>find events</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>meet people</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>vibe together</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <div className="w-1 h-8 bg-gradient-to-b from-brand-red to-transparent rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-brand-red">
            about us
          </h2>
          
          <div className="text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed">
            <p>
              yo, tired of scrolling through boring event pages and wondering if that party is actually gonna be lit? 
              we feel you. 🤝
            </p>
            
            <p>
              <span className="text-brand-purple font-semibold">what's poppin</span> is literally tinder but for events. 
              swipe right on the vibes you want, swipe left on the cringe. find your people, discover sick events, 
              and never miss out on the energy again.
            </p>
            
            <p className="text-2xl font-semibold text-white">
              it's time to stop asking "what's poppin?" and start knowing. 🔥
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">discover events</h3>
              <p className="text-gray-400">swipe through curated events that match your vibe and interests</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-purple/50 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-brand-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">connect with people</h3>
              <p className="text-gray-400">meet like-minded people who are going to the same events</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">create memories</h3>
              <p className="text-gray-400">turn random nights into unforgettable experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-center text-brand-purple">
            hit us up
          </h2>
          
          <p className="text-center text-gray-300 mb-12 text-lg">
            got questions? ideas? just wanna chat about the vision? we're all ears! 👂
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6"
                required
              />
              <Input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6"
                required
              />
            </div>
            
            <Textarea
              placeholder="what's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg min-h-32 resize-none"
              required
            />
            
            <Button 
              type="submit"
              className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-bold py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              send message
            </Button>
          </form>
          
          <div className="flex justify-center gap-8 mt-12 text-gray-400">
            <div className="flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>hello@whatspoppin.app</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/47a0c5b2-5564-4f4c-babd-e7a63d6741a6.png" 
              alt="What's Poppin Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-black">what's poppin</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            the future of finding your vibe. coming soon to ios and android.
          </p>
          
          <p className="text-sm text-gray-600">
            © 2024 what's poppin. all vibes reserved. ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
