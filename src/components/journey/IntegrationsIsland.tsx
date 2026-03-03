import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxLayer from "./ParallaxLayer";
import DiscordPresence from "@/components/integrations/DiscordPresence";
import type { IntegrationConfig } from "@/lib/types";

interface IntegrationsIslandProps {
  config: IntegrationConfig;
  /** Pre-rendered Astro component HTML slots */
  children?: React.ReactNode;
}

export default function IntegrationsIsland({
  config,
  children,
}: IntegrationsIslandProps) {
  return (
    <section
      id="integrations"
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      <ParallaxLayer speed={-0.1} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </ParallaxLayer>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Integrations
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Live data from the tools I use every day
          </p>
        </AnimatedSection>

        {/* Astro-rendered static integrations (GitHub stats, contributions, repos) */}
        <div className="space-y-8">
          {children && (
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">{children}</div>
            </AnimatedSection>
          )}

          {/* Client-side integrations */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DiscordPresence userId={config.discord?.userId} />
              <motion.a
                href={config.linkedin.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-400/20 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm text-gray-400">View LinkedIn Profile</span>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
