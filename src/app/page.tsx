import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../lib/quizState';
import { CheckCircle, ShieldCheck, TrendingUp, HandCoins } from 'lucide-react';
import { cn } from '../lib/utils';
import { SurveyIcon, CryptoIcon, SweepstakesIcon, BonusIcon, LogoIcon } from '../components/Icons';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const navigate = useNavigate();
  const { results, email, resetQuiz } = useQuizStore();

  useEffect(() => {
    // If the user already has results from a previous session, redirect them to dashboard
    if (results && email) {
      navigate('/dashboard', { replace: true });
    }
  }, [results, email, navigate]);

  const handleStart = () => {
    resetQuiz();
    navigate('/quiz');
  };

  return (
    <div className="relative min-h-screen bg-transparent w-full flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative z-10">
        {/* Navbar/Logo */}
        <header className="w-full flex justify-between items-center pb-20 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-dark-surface border border-dark-border rounded-xl flex items-center justify-center premium-shadow text-accent-400">
              <LogoIcon className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white uppercase">Campus Cash World</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            onClick={handleStart}
            className="text-sm font-semibold tracking-wide hover:text-white transition-colors bg-dark-surface px-5 py-2.5 rounded-full border border-dark-border shadow-sm text-gray-300"
          >
            Take the Quiz
          </motion.button>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.0] mb-8">
              DISCOVER THE BEST <br className="hidden md:block"/> <span className="accent-gradient-text">EARNING OPTIONS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto tracking-tight">
              Answer a few quick questions and get matched with premium survey, trading, sweepstakes, or bonus offers in your country.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStart}
                className="w-full sm:w-auto px-10 py-4 bg-accent-400 hover:bg-accent-500 text-black rounded-[0.75rem] font-bold text-lg shadow-sm transition-all duration-200"
              >
                Start the Quiz
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                href="#how-it-works"
                className="w-full sm:w-auto px-10 py-4 bg-dark-surface border border-dark-border text-white rounded-[0.75rem] font-bold text-lg hover:bg-dark-border/50 transition-all"
              >
                See How It Works
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="mt-14 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400 font-bold tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span>Personalized matches</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-500" />
                <span>Geo-targeted</span>
              </div>
              <div className="flex items-center gap-2">
                <HandCoins className="w-5 h-5 text-accent-500" />
                <span>100% Free</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Category Cards Preview */}
        <section className="w-full mb-32 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold tracking-tighter mb-10 text-center uppercase"
          >
            What kind of offers can we find you?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Surveys" 
              desc="Easy daily tasks, beginner friendly" 
              icon={<SurveyIcon className="w-6 h-6" />}
              color="text-white"
              bg="bg-dark-border"
              delay={0.1}
              onClick={handleStart} 
            />
            <CategoryCard 
              title="Crypto & Forex" 
              desc="Higher earning potential platforms" 
              icon={<CryptoIcon className="w-6 h-6" />}
              color="text-white"
              bg="bg-dark-border"
              delay={0.2}
              onClick={handleStart} 
            />
            <CategoryCard 
              title="Sweepstakes" 
              desc="Win prizes, free entry opportunities" 
              icon={<SweepstakesIcon className="w-6 h-6" />}
              color="text-white"
              bg="bg-dark-border"
              delay={0.3}
              onClick={handleStart} 
            />
            <CategoryCard 
              title="Bonuses" 
              desc="Welcome rewards & special promos" 
              icon={<BonusIcon className="w-6 h-6" />}
              color="text-white"
              bg="bg-dark-border"
              delay={0.4}
              onClick={handleStart} 
            />
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="w-full max-w-5xl mx-auto glass-card rounded-[2rem] p-8 md:p-16 mb-24 relative overflow-hidden bg-dark-surface border border-dark-border">
          
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black tracking-tighter text-center mb-16 uppercase"
          >
            How it works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 relative mb-20">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-[35px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-dark-border to-transparent -z-10" />
            
            <Step number="1" title="Tell us your goals" desc="Quick initial questions to gauge your preferences and location." delay={0.1} />
            <Step number="2" title="Unlock recommendations" desc="Our algorithm ranks secure offers specifically tailored for you." delay={0.2} />
            <Step number="3" title="Select your match" desc="Start participating and unlock rewards at your own pace." delay={0.3} />
          </div>

          {/* FAQ Preview */}
          <div className="border-t border-dark-border/50 pt-16 mt-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-center mb-10 uppercase">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FAQCard 
                q="Is this completely free?" 
                a="Yes, taking the quiz and receiving your custom recommendations is 100% free." 
              />
              <FAQCard 
                q="How do recommendations work?" 
                a="We use a scoring algorithm to map your location, time, and goals to verified live offers." 
              />
              <FAQCard 
                q="Is this available in my country?" 
                a="We heavily filter results based on geo-location to ensure you only see actionable offers." 
              />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="w-full text-center pb-12 pt-8 text-gray-400 text-sm font-medium border-t border-dark-border">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <LogoIcon className="w-4 h-4 text-accent-500" />
            <span className="font-display font-bold tracking-widest uppercase">Campus Cash World</span>
          </div>
          <p className="mb-4">This is a free discovery and recommendation tool. We may receive compensation from partners.</p>
          <p>© 2026 Campus Cash World. Premium Dark Edition.</p>
        </footer>
      </div>
    </div>
  );
}

function CategoryCard({ title, desc, icon, color, bg, delay, onClick }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.6)" }}
      onClick={onClick}
      className="cursor-pointer group flex flex-col p-6 rounded-[1.25rem] bg-dark-surface border border-dark-border shadow-sm hover:border-accent-400 transition-all duration-300"
    >
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:text-accent-400 transition-all duration-300", bg, color)}>
        {icon}
      </div>
      <h3 className="text-2xl font-black font-display tracking-tight mb-2 text-white uppercase">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-1 font-medium leading-relaxed">{desc}</p>
      <div className="flex items-center text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-400">
        Explore <span className="ml-1 text-lg">→</span>
      </div>
    </motion.div>
  )
}

function Step({ number, title, desc, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-dark-bg rounded-xl flex items-center justify-center font-display font-bold text-2xl mb-6 relative z-10 border border-dark-border shadow-[0_0_15px_rgba(250,204,21,0.1)]">
        <span className="text-accent-500">
          {number}
        </span>
      </div>
      <h3 className="text-lg font-bold font-display tracking-tight mb-2 text-white">{title}</h3>
      <p className="text-gray-400 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function FAQCard({ q, a }: { q: string, a: string }) {
  return (
    <div className="bg-dark-surface border border-dark-border p-6 rounded-[1.25rem] hover:border-accent-400 transition-colors">
      <h4 className="font-bold text-white mb-3 tracking-tight">{q}</h4>
      <p className="text-gray-400 text-sm font-medium leading-relaxed">{a}</p>
    </div>
  )
}
