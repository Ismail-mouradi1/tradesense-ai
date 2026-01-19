import { Trophy, Medal, TrendingUp, Crown, Flame, Target, Award } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const mockLeaderboard = [
  { rank: 1, name: 'Mehdi Alaoui', profit: 32.7, trades: 156, winRate: 78, country: '🇲🇦', streak: 12 },
  { rank: 2, name: 'Sophia Laurent', profit: 28.4, trades: 124, winRate: 75, country: '🇫🇷', streak: 8 },
  { rank: 3, name: 'Khalid Benjelloun', profit: 25.9, trades: 142, winRate: 71, country: '🇲🇦', streak: 15 },
  { rank: 4, name: 'Emma Van Der Berg', profit: 23.1, trades: 98, winRate: 73, country: '🇳🇱', streak: 6 },
  { rank: 5, name: 'Rachid El Fassi', profit: 21.5, trades: 167, winRate: 67, country: '🇲🇦', streak: 9 },
  { rank: 6, name: 'Lucas Martin', profit: 19.8, trades: 89, winRate: 72, country: '🇫🇷', streak: 5 },
  { rank: 7, name: 'Zineb Chraibi', profit: 18.2, trades: 113, winRate: 69, country: '🇲🇦', streak: 7 },
  { rank: 8, name: 'Thomas Mueller', profit: 16.7, trades: 78, winRate: 74, country: '🇩🇪', streak: 4 },
  { rank: 9, name: 'Amine Tazi', profit: 15.3, trades: 132, winRate: 64, country: '🇲🇦', streak: 11 },
  { rank: 10, name: 'Clara Dubois', profit: 14.1, trades: 67, winRate: 76, country: '🇫🇷', streak: 3 },
  { rank: 11, name: 'Yassine Berrada', profit: 12.8, trades: 145, winRate: 62, country: '🇲🇦', streak: 8 },
  { rank: 12, name: 'Isabella Romano', profit: 11.5, trades: 54, winRate: 79, country: '🇮🇹', streak: 2 },
  { rank: 13, name: 'Hamza Kettani', profit: 10.9, trades: 98, winRate: 66, country: '🇲🇦', streak: 6 },
  { rank: 14, name: 'Marie Lefevre', profit: 9.7, trades: 72, winRate: 71, country: '🇫🇷', streak: 4 },
  { rank: 15, name: 'Adam Bennis', profit: 8.4, trades: 86, winRate: 68, country: '🇲🇦', streak: 5 },
];

export default function Leaderboard() {
  const { t } = useLanguage();

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-primary" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-700" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold">{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-primary/15 to-primary/5 border-primary/40';
      case 2:
        return 'bg-gradient-to-r from-gray-400/10 to-gray-400/5 border-gray-400/30';
      case 3:
        return 'bg-gradient-to-r from-amber-700/10 to-amber-700/5 border-amber-700/30';
      default:
        return 'bg-card/50 border-border/50';
    }
  };

  const topThree = mockLeaderboard.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Classement Mensuel</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.leaderboard.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.leaderboard.subtitle}
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gold-gradient">15</div>
            <div className="text-sm text-muted-foreground">Traders Actifs</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gold-gradient">+18.4%</div>
            <div className="text-sm text-muted-foreground">Profit Moyen</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gold-gradient">1,621</div>
            <div className="text-sm text-muted-foreground">Total Trades</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gold-gradient">70.3%</div>
            <div className="text-sm text-muted-foreground">Win Rate Moyen</div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Second Place */}
          <div className="md:mt-8 order-2 md:order-1">
            <Card className={`${getRankStyle(2)} border glass hover:shadow-gold-sm transition-all duration-300`}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-400/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">{topThree[1].country}</span>
                </div>
                <div className="text-3xl mb-2">🥈</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{topThree[1].name}</h3>
                <p className="text-3xl font-bold text-profit mb-2">+{topThree[1].profit}%</p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span>{topThree[1].trades} trades</span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    {topThree[1].streak}j
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* First Place */}
          <div className="order-1 md:order-2">
            <Card className={`${getRankStyle(1)} border-2 glass-strong shadow-gold-md hover:shadow-gold-lg transition-all duration-300`}>
              <CardContent className="pt-8 pb-8 text-center relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-50" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 ring-4 ring-primary/30">
                    <span className="text-4xl">{topThree[0].country}</span>
                  </div>
                  <div className="text-4xl mb-2">🏆</div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{topThree[0].name}</h3>
                  <p className="text-4xl font-bold text-gold-gradient mb-2">+{topThree[0].profit}%</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span>{topThree[0].trades} trades</span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      {topThree[0].streak}j streak
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Place */}
          <div className="md:mt-8 order-3">
            <Card className={`${getRankStyle(3)} border glass hover:shadow-gold-sm transition-all duration-300`}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-700/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">{topThree[2].country}</span>
                </div>
                <div className="text-3xl mb-2">🥉</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{topThree[2].name}</h3>
                <p className="text-3xl font-bold text-profit mb-2">+{topThree[2].profit}%</p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span>{topThree[2].trades} trades</span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    {topThree[2].streak}j
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <Card className="max-w-4xl mx-auto glass">
          <CardHeader className="border-b border-primary/10">
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Classement Complet
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">{t.leaderboard.rank}</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">{t.leaderboard.trader}</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">{t.leaderboard.profit}</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">{t.leaderboard.trades}</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">{t.leaderboard.winRate}</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Streak</th>
                  </tr>
                </thead>
                <tbody>
                  {mockLeaderboard.map((trader) => (
                    <tr
                      key={trader.rank}
                      className={`border-b border-border/30 hover:bg-primary/5 transition-colors ${trader.rank <= 3 ? getRankStyle(trader.rank) : ''}`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {getRankBadge(trader.rank)}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-lg">
                            {trader.country}
                          </div>
                          <span className="font-medium text-foreground">{trader.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-bold text-profit flex items-center justify-end gap-1">
                          <TrendingUp className="w-4 h-4" />
                          +{trader.profit}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-muted-foreground">{trader.trades}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`font-medium ${trader.winRate >= 70 ? 'text-profit' : 'text-foreground'}`}>
                          {trader.winRate}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="flex items-center justify-end gap-1 text-muted-foreground">
                          <Flame className={`w-4 h-4 ${trader.streak >= 10 ? 'text-orange-500' : 'text-muted-foreground'}`} />
                          {trader.streak}j
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border-primary/20">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Rejoignez le classement et devenez le prochain champion !
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
