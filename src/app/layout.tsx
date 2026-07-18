import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ShellLayout from "@/components/navigation/ShellLayout";
import "@/styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1515" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Stone Circuit | Business Workflow Software",
    template: "%s | Stone Circuit",
  },
  description: "Stone Circuit builds reliable software designed to bring order and predictability to complex business operations. Creators of Operant OS.",
  keywords: [
    "Stone Circuit",
    "Operant OS",
    "Business Software",
    "Workflow Automation",
    "Process Orchestration"
  ],
  authors: [{ name: "Stone Circuit Team" }],
  metadataBase: new URL("https://stonecircuit.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stone Circuit | Business Workflow Software",
    description: "Stone Circuit builds reliable software designed to bring order and predictability to complex business operations. Creators of Operant OS.",
    url: "https://stonecircuit.in",
    siteName: "Stone Circuit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone Circuit | Business Workflow Software",
    description: "Stone Circuit builds reliable software designed to bring order and predictability to complex business operations.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('stone-theme');
                  var activeTheme = 'dark'; // Default
                  if (savedTheme) {
                    if (savedTheme === 'system') {
                      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                      activeTheme = prefersDark ? 'dark' : 'light';
                    } else {
                      activeTheme = savedTheme;
                    }
                  }
                  document.documentElement.classList.add(activeTheme);
                } catch (e) {}
              })()
            `,
          }}
        />
        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <ShellLayout>{children}</ShellLayout>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-5K8X8CJYD5" />
        {`
        <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xo814h9wgh");
</script>`}
      </body>
    </html>
  );
}
