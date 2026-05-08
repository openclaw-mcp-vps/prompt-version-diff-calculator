import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Version Diff Calculator — Compare Prompt Performance",
  description: "A/B test different prompt versions, track cost and quality metrics, and optimize your AI workflows with detailed comparative analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13e0260c-8c25-46bb-a821-5c8cdfa35aac"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
