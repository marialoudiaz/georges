import React from 'react';
import '../app/globals.css';

export const metadata = {
  title: "Georges Aioli Catalan",
  description: "Aioli Catalan conçu au coeur du Conflent selon la recette authentique du Grand Georges",
  openGraph: {
    title: "Georges Aioli Catalan",
    description: "Aioli Catalan conçu au coeur du Conflent selon la recette authentique du Grand Georges",
    url: "https://www.georges-aioli.fr",
    siteName: "Georges Aioli Catalan",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
              <main>
                {children}
              </main>          
      </body>
    </html>
  )
}