import { Link } from 'react-router-dom';
import { TrendingUp, Mail, MessageCircle, Twitter, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  return (
    <footer className="relative bg-gradient-luxury text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      {/* Top Border Accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-gold-sm group-hover:shadow-gold-md transition-shadow">
                <TrendingUp className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">
                Trade<span className="text-gold-gradient">Sense</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass border-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-gold-sm transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              {t.footer.legal}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="group text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                >
                  {t.footer.terms}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                >
                  {t.footer.privacy}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              {t.footer.support}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@tradesense.ai"
                  className="group text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {t.footer.contact}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                >
                  {t.footer.faq}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TradeSense AI. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>Tous les systèmes opérationnels</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
