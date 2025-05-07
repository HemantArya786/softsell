"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Maximize the Value of Your Unused Software Licenses
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-500 dark:text-slate-400 md:text-xl">
              Turn your dormant software licenses into cash. Fast, secure, and
              hassle-free.
            </p>
          </motion.div>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Sell My Licenses
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-900 text-slate-900 hover:bg-slate-100 dark:border-white dark:text-white dark:hover:bg-slate-800"
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
