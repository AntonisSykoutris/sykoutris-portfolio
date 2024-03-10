import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/General/SmoothScroll';

export const metadata: Metadata = {
  openGraph: {
    title: 'Sykoutris Wines - Finest Wines from Greece',
    description:
      'Embark on a virtual wine-tasting adventure with Sykoutris Wines! 🍷 Explore my collection on my Next.js powered website, featuring stunning animations and user-friendly design. Experience the fusion of innovation and tradition with every sip. Cheers to a new era of wine appreciation!',
    siteName: 'Sykoutris Wines',
    url: 'https://sykoutris-wines.vercel.app',
    images: [
      {
        url: 'https://sykoutris-wines.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <meta
        name='viewport'
        content='user-scalable=no, width=device-width, initial-scale=1.0'
      />
      <body>
        <SmoothScroll>
          <main className='flex flex-col items-center'>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
