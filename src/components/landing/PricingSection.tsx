import { Check, Sparkles, Crown, Gem, Rocket, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 200,
    icon: Rocket,
    accountSize: 10000,
    features: [
      'Compte de 10 000 $',
      'Perte max journalière: 5%',
      'Perte max totale: 10%',
      'Objectif: 8%',
      '5 jours de trading minimum',
      '80% de partage des profits',
      'Support par email',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 500,
    icon: Star,
    accountSize: 50000,
    isPopular: true,
    features: [
      'Compte de 50 000 $',
      'Perte max journalière: 5%',
      'Perte max totale: 10%',
      'Objectif: 8%',
      '5 jours de trading minimum',
      '85% de partage des profits',
      'Support prioritaire',
      'Accès communauté VIP',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 1000,
    icon: Zap,
    accountSize: 100000,
    features: [
      'Compte de 100 000 $',
      'Perte max journalière: 5%',
      'Perte max totale: 10%',
      'Objectif: 8%',
      '5 jours de trading minimum',
      '90% de partage des profits',
      'Support dédié 24/7',
      'Accès communauté VIP',
      'Coaching personnalisé',
    ],
  },
];

export function PricingSection() {
  const { t } = useLanguage();

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount);
  };

  return (
    <section id="pricing" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6">
            <Gem className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tarification Transparente</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const isPopular = plan.isPopular;
            const PlanIcon = plan.icon;

            return (
              <div
                key={plan.id}
                className={`group relative rounded-2xl p-8 transition-all duration-500 ${
                  isPopular
                    ? 'glass-strong border-2 border-primary/40 shadow-gold-md scale-105 hover:shadow-gold-lg'
                    : 'glass hover:shadow-gold-sm hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-gold-sm">
                      <Crown className="w-4 h-4" />
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                {/* Glow Effect for Popular */}
                {isPopular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-40" />
                )}

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-tr-2xl rounded-bl-[120px] ${
                  isPopular ? 'bg-gradient-to-bl from-primary/20 to-transparent' : 'bg-gradient-to-bl from-primary/10 to-transparent'
                }`} />

                <div className="relative z-10">
                  {/* Plan Icon & Name */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                      isPopular ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <PlanIcon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{plan.name}</h3>
                    <div className="text-5xl font-bold mb-2">
                      <span className="text-gold-gradient">{plan.price}</span>
                      <span className="text-lg font-normal text-muted-foreground ml-2">DH</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Solde: <span className="text-primary font-semibold">{formatBalance(plan.accountSize)} $</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="divider-luxury my-6" />

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isPopular ? 'bg-primary/20' : 'bg-primary/10'
                        }`}>
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/checkout"
                    state={{
                      planId: plan.id,
                      plan: plan.name,
                      price: plan.price.toString(),
                      accountSize: plan.accountSize
                    }}
                  >
                    <Button
                      className={`w-full ${isPopular ? 'shadow-gold-sm hover:shadow-gold-md' : ''}`}
                      variant={isPopular ? 'premium' : 'outline'}
                      size="lg"
                    >
                      {isPopular && <Sparkles className="w-4 h-4 mr-2" />}
                      {t.pricing.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-primary/10">
            <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-success" />
            </div>
            <span className="text-sm text-muted-foreground">Garantie de satisfaction • Paiement sécurisé • Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
