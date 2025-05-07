"use client";

import { Upload, DollarSign, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="w-full py-12 md:py-24 bg-white dark:bg-slate-950"
      id="how-it-works"
    >
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500 dark:text-slate-400 md:text-xl">
              Our simple three-step process makes selling your unused software
              licenses easy
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 pt-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={item}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Upload className="h-8 w-8 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold">Upload License</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Submit your license details through our secure portal for review
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={item}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <DollarSign className="h-8 w-8 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold">Get Valuation</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Receive a competitive market valuation within 24 hours
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={item}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <CheckCircle className="h-8 w-8 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold">Get Paid</h3>
              <p className="text-slate-500 dark:text-slate-400">
                Accept our offer and receive payment through your preferred
                method
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
