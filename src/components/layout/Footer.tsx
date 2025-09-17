import Link from 'next/link';

import {

import { Button } from '@/components/ui/button';
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Carbon Tracking', href: '/carbon-tracking' },
        { name: 'ESG Reporting', href: '/esg-reporting' },
        { name: 'Sustainability Goals', href: '/goals' },
        { name: 'Green Analytics', href: '/analytics' },
        { name: 'Impact Assessment', href: '/impact' },
        { name: 'API Access', href: '/api' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About GreenSuite', href: '/about' },
        { name: 'Sustainability Blog', href: '/blog' },
        { name: 'Green Careers', href: '/careers' },
        { name: 'Press Room', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Support Center', href: '/support' },
        { name: 'Green Community', href: '/community' },
        { name: 'ESG Guides', href: '/guides' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Success Stories', href: '/stories' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/greensuite' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/greensuite' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/greensuite' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/greensuite' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/greensuite' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">G</span>
                </div>
                <span className="font-bold text-xl">GreenSuite</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering businesses to achieve their sustainability goals through innovative ESG
                tracking and reporting solutions. Join thousands of companies making a positive
                environmental impact.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@greensuite.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) GREEN-123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">100 Sustainability Drive, Suite 200</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get ESG Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter work email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="bg-primary text-primary-foreground">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Stay informed about sustainability trends and product updates.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 GreenSuite. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Committed to <Heart className="size-3 text-primary fill-current" /> sustainability
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-primary group-hover:text-primary/80 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/20">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
