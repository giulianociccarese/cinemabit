import CookieConsent from '@/components/CookieConsent';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.cinemabit.com'),
  title: {
    default: 'CinemaBit, Il cinema dei buoni sentimenti',
    template: '%s — CinemaBit'
  },
  description: 'Film, serie e cartoni dai buoni sentimenti per la famiglia, che emozionano e fanno crescere. Scopri dove vederli e la loro frequenza.',
  openGraph: {
    title: 'CinemaBit — Il cinema dei buoni sentimenti',
    description: 'Belle storie che fanno crescere. Le trovi tutte qui.',
    url: 'https://www.cinemabit.com',
    siteName: 'CinemaBit',
    locale: 'it_IT',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}<CookieConsent /></body>
    </html>
  );
}
