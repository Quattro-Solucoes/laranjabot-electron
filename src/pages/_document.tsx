import { TooltipProvider } from "@/components/ui/tooltip";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
      <TooltipProvider>
        <Main />
        <NextScript />
      </TooltipProvider>
      </body>
    </Html>
  );
}