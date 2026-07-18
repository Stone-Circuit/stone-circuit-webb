import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ShellLayout from "@/components/navigation/ShellLayout";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00baa3",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stonecircuit.in"),
  title: {
    default: "Stone Circuit | Building Intelligent Business Software",
    template: "%s | Stone Circuit",
  },
  description: "Stone Circuit builds intelligent software that helps businesses operate more efficiently. Creator of Operant OS, an AI-powered Business Operating System.",
  applicationName: "Stone Circuit",
  generator: "Next.js",
  authors: [{ name: "Stone Circuit" }],
  creator: "Stone Circuit",
  publisher: "Stone Circuit",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Stone Circuit",
    "Operant OS",
    "AI Business Operating System",
    "Business Software",
    "Artificial Intelligence",
    "Accounting Software",
    "Automation",
    "Startup",
    "Technology",
    "India",
    "Business Intelligence"
  ],
  icons: {
    icon: "/icon",
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  appleWebApp: {
    capable: true,
    title: "Stone Circuit",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    url: "https://stonecircuit.in",
    siteName: "Stone Circuit",
    title: "Stone Circuit | Building Intelligent Business Software",
    description: "Stone Circuit builds intelligent software that helps businesses operate more efficiently.",
    images: [
      {
        url: "/apple-icon",
        width: 180,
        height: 180,
        alt: "Stone Circuit Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone Circuit",
    description: "Building intelligent business software.",
    images: ["/apple-icon"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stone Circuit",
    "url": "https://stonecircuit.in",
    "logo": "https://stonecircuit.in/icon",
    "description": "Stone Circuit builds reliable software designed to bring order and predictability to complex business operations.",
    "sameAs": [
      "https://github.com/stone-circuit",
      "https://x.com/stone_circuit",
      "https://linkedin.com/company/stone-circuit"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Operant OS",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": "An AI-powered Business Operating System designed to simplify accounting, inventory, reporting, and everyday business operations.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "description": "Enterprise pricing available on request"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Stone Circuit",
      "url": "https://stonecircuit.in"
    }
  };

  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to load saved theme immediately and block page flash */}
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('stone-theme');
                  var activeTheme = 'dark';
                  if (savedTheme) {
                    if (savedTheme === 'system') {
                      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                      activeTheme = prefersDark ? 'dark' : 'light';
                    } else {
                      activeTheme = savedTheme;
                    }
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(activeTheme);
                } catch (e) {}
              })()
            `,
          }}
        />
        {/* JSON-LD Structured Data Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <ShellLayout>{children}</ShellLayout>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-5K8X8CJYD5" />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xo814h9wgh");
            `
          }}
        />
      </body>
    </html>
  );
}
