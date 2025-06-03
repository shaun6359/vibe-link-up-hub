
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Heart, Calendar, Users, Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const phrases = [
    "what's the motive?",
    "what's poppin?",
    "link or nah?"
  ];

  useEffect(() => {
    const animationLoop = () => {
      const timer1 = setTimeout(() => setAnimationPhase(1), 1500);
      const timer2 = setTimeout(() => setAnimationPhase(2), 3500);
      const timer3 = setTimeout(() => setAnimationPhase(0), 5500); // Reset to start the loop again

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    };

    // Start the initial animation
    const cleanup1 = animationLoop();

    // Set up the infinite loop
    const interval = setInterval(() => {
      animationLoop();
    }, 6000); // Total cycle time

    return () => {
      cleanup1();
      clearInterval(interval);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-black font-inter" style={{ color: '#e4e2dd' }}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/fbbfafe1-6b0a-4a1d-99a7-ec6b58de5b7b.png" 
                alt="What's Poppin Balloons" 
                className="w-20 h-20 cursor-pointer hover:scale-105 transition-transform"
                onClick={scrollToTop}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="hover:text-white transition-colors font-medium"
                style={{ color: '#e4e2dd' }}
              >
                home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors font-medium"
                style={{ color: '#e4e2dd' }}
              >
                about
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-colors font-medium"
                style={{ color: '#e4e2dd' }}
              >
                contact
              </button>
              <Button 
                onClick={() => scrollToSection('hero')}
                className="bg-brand-red hover:bg-brand-red/90 font-bold px-6"
                style={{ color: '#e4e2dd' }}
              >
                join waitlist
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-white transition-colors"
                style={{ color: '#e4e2dd' }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left px-3 py-2 hover:text-white transition-colors font-medium"
                  style={{ color: '#e4e2dd' }}
                >
                  home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 hover:text-white transition-colors font-medium"
                  style={{ color: '#e4e2dd' }}
                >
                  about
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 hover:text-white transition-colors font-medium"
                  style={{ color: '#e4e2dd' }}
                >
                  contact
                </button>
                <Button 
                  onClick={() => scrollToSection('hero')}
                  className="w-full mt-2 bg-brand-red hover:bg-brand-red/90 font-bold"
                  style={{ color: '#e4e2dd' }}
                >
                  join waitlist
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <img 
            src="/lovable-uploads/47a0c5b2-5564-4f4c-babd-e7a63d6741a6.png" 
            alt="What's Poppin Logo" 
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] mx-auto mb-8 animate-float"
          />

          {/* Animation phrases positioned below the logo */}
          <div className="relative h-16 mb-8 flex items-center justify-center">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ${
                  animationPhase === index
                    ? 'opacity-100 animate-fade-in-up'
                    : animationPhase > index
                    ? 'opacity-0 animate-fade-out-down'
                    : 'opacity-0'
                }`}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-purple">
                  {phrase}
                </p>
              </div>
            ))}
          </div>
          
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
                className="bg-white/10 border-white/20 text-lg py-6"
                style={{ color: '#e4e2dd' }}
                required
              />
              <Button 
                type="submit"
                className="bg-brand-red hover:bg-brand-red/90 font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                style={{ color: '#e4e2dd' }}
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
            
            <p className="text-2xl font-semibold" style={{ color: '#e4e2dd' }}>
              it's time to stop asking "what's poppin?" and start knowing. 🔥
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#e4e2dd' }}>discover events</h3>
              <p className="text-gray-400">swipe through curated events that match your vibe and interests</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-purple/50 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-brand-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#e4e2dd' }}>connect with people</h3>
              <p className="text-gray-400">meet like-minded people who are going to the same events</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#e4e2dd' }}>create memories</h3>
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
                className="bg-white/10 border-white/20 text-lg py-6"
                style={{ color: '#e4e2dd' }}
                required
              />
              <Input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-lg py-6"
                style={{ color: '#e4e2dd' }}
                required
              />
            </div>
            
            <Textarea
              placeholder="what's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/10 border-white/20 text-lg min-h-32 resize-none"
              style={{ color: '#e4e2dd' }}
              required
            />
            
            <Button 
              type="submit"
              className="w-full bg-brand-purple hover:bg-brand-purple/90 font-bold py-6 text-lg transition-all duration-300 hover:scale-105"
              style={{ color: '#e4e2dd' }}
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
              src="/lovable-uploads/fbbfafe1-6b0a-4a1d-99a7-ec6b58de5b7b.png" 
              alt="What's Poppin Logo" 
              className="w-12 h-12"
            />
            <span className="text-2xl font-black" style={{ color: '#e4e2dd' }}>what's poppin</span>
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
