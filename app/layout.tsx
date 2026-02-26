import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* On s'assure que le body prend toute la largeur sans marges parasites */}
      <body className="bg-[#2C2420] text-[#FCF9F5] antialiased min-h-screen">
        <Navbar /> 
        {/* Changement de max-w-6xl à max-w-[1440px] pour l'effet premium */}
        <main className="w-full">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  )
}