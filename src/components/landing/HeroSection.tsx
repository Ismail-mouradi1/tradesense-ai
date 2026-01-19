import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Users, DollarSign, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '12,500+', label: t.hero.stats.traders },
    { icon: TrendingUp, value: '2,340+', label: t.hero.stats.funded },
    { icon: DollarSign, value: '$4.2M+', label: t.hero.stats.payout },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Luxury Glow Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Elegant Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(43 74% 49%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(43 74% 49%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-primary/20 mb-8 animate-fade-in group hover:border-primary/40 transition-colors cursor-default">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          </div>

          {/* Title with Gold Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            {t.hero.title}{' '}
            <span className="relative inline-block">
              <span className="text-gold-gradient">{t.hero.titleHighlight}</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path
                  d="M2 10C50 2 150 2 298 10"
                  stroke="url(#gold-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(43 74% 49%)" />
                    <stop offset="50%" stopColor="hsl(38 92% 55%)" />
                    <stop offset="100%" stopColor="hsl(43 74% 49%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/register">
              <Button size="xl" variant="premium" className="group text-lg px-10 shadow-gold-md hover:shadow-gold-lg">
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="glass"
              size="xl"
              className="text-lg px-10 hover:shadow-gold-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Stats with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative glass rounded-2xl p-6 hover:shadow-gold-md transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gold-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Side Decorative Lines */}
      <div className="absolute left-0 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-0 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
