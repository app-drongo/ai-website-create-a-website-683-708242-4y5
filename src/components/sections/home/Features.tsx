import {

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Features() {
  const router = useRouter();

  const features = [
    {
      icon: Zap,
      title: 'Eco-Friendly Hosting',
      description: '100% renewable energy powered servers with carbon-neutral operations.',
      badge: 'Green Tech',
    },
    {
      icon: Shield,
      title: 'Sustainable Security',
      description: 'Energy-efficient encryption and eco-certified data centers.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Energy Monitoring',
      description: "Real-time tracking of your application's carbon footprint.",
      badge: 'Analytics',
    },
    {
      icon: Globe,
      title: 'Green CDN',
      description: 'Sustainable content delivery network using renewable resources.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Impact Analytics',
      description: 'Track and optimize your environmental impact metrics.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'Eco Branding',
      description: 'Showcase your commitment to sustainability with green badges.',
      badge: 'Branding',
    },
    {
      icon: Code2,
      title: 'Green Development',
      description: 'Energy-efficient coding practices and sustainable development tools.',
      badge: 'Developer',
    },
    {
      icon: Headphones,
      title: 'Sustainable Support',
      description: 'Remote-first support team reducing carbon emissions.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Green Data',
      description: 'Environmentally conscious data storage and processing.',
      badge: 'Privacy',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Sustainable Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Power Your Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              The Green Way
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eco-friendly features designed to help your business thrive while minimizing
            environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to make your business more sustainable?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/pricing')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => router.push('/demo')}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
