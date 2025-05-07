"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section
      className="w-full py-12 md:py-24 bg-white dark:bg-slate-950"
      id="testimonial"
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
              Customer Testimonials
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500 dark:text-slate-400 md:text-xl">
              Hear what our satisfied customers have to say about their
              experience with SoftSell
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-left dark:border-slate-800">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 dark:text-slate-400">
                    "SoftSell made it incredibly easy to sell our excess
                    enterprise licenses after downsizing. The process was
                    smooth, and we received payment much faster than expected.
                    Highly recommended!"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Jennifer Davis</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        IT Director, Nexus Technologies
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-left dark:border-slate-800">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 dark:text-slate-400">
                    "As a small business owner, I was skeptical about selling
                    our unused software licenses. SoftSell's team guided me
                    through the entire process and secured a great value for our
                    assets. The experience exceeded my expectations."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Michael Rodriguez</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        CEO, Bright Solutions
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
