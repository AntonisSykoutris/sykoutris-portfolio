import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/General/SmoothScroll';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  openGraph: {
    title: 'Sykoutris Antonis Portfolio',
    description:
      "Welcome to the portfolio of Sykoutris Antonis, a versatile full-stack developer with a keen eye for front-end design and innovation. Explore my projects, showcasing expertise in creating dynamic, user-friendly web applications that seamlessly blend aesthetics with functionality. Discover the fusion of technology and creativity in every project. Let's build something remarkable together!",
    siteName: 'Sykoutris Antonis Portfolio',
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
      <title>Sykoutris Antonis Portfolio</title>
      <meta
        name='description'
        content={
          "Welcome to the portfolio of Sykoutris Antonis, a versatile full-stack developer with a keen eye for front-end design and innovation. Explore my projects, showcasing expertise in creating dynamic, user-friendly web applications that seamlessly blend aesthetics with functionality. Discover the fusion of technology and creativity in every project. Let's build something remarkable together!"
        }
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=5.0'
      />
      <body>
        <SmoothScroll>
          <Navbar />
          <main className='mx-auto flex w-[95svw] flex-col items-center md:w-[90svw] xl:w-[60svw]'>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
