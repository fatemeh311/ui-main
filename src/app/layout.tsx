
import './globals.css';
import {Figtree} from 'next/font/google';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import { Header } from './_components/header';
import { Footer } from './_components/footer';
import QueryProvider from '@/providers/react-query-roviders';
import { Notifications } from './_components/notification/notifications';

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree'
})

const yekanbakh = localFont({
  src: [
    {
      path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2',
      weight: '900',
      style: 'normal'
    },
  ],
  variable: '--font-yekanbakh'
})

export default function RootLayout({
  children,authPage = false
}: {
  children: React.ReactNode,
  authPage : boolean

}) {
  return (
    <html dir='rtl' className={`${figtree.variable} ${yekanbakh.variable}`}>
      <body className='min-h-screen grid grid-rows-[80px_1fr_auto] bg-F2F3F5 text-base-75'>
      <NextTopLoader showSpinner={false} color="var(--color-primary)"/>
      <Notifications/>
       <QueryProvider>
       <Header/>
         <main>{children}</main>
           <Footer />
          </QueryProvider>
          </body>
    </html>
  )
}
