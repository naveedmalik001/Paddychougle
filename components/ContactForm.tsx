"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-charcoal relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-widest font-bold text-sm">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">Let&apos;s Create Together</h2>
                </div>

                <div className="bg-white/5 p-8 md:p-12 rounded-lg border border-white/5">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted uppercase tracking-wider">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted uppercase tracking-wider">Email</label>
                                <input
                                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                                    className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted uppercase tracking-wider">Subject</label>
                            <select
                                {...register("subject", { required: "Subject is required" })}
                                className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                            >
                                <option value="">Select a topic...</option>
                                <option value="Booking">Booking Inquiry</option>
                                <option value="Collaboration">Brand Collaboration</option>
                                <option value="Press">Press / Media</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.subject && <span className="text-red-400 text-xs">{errors.subject.message}</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted uppercase tracking-wider">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={6}
                                className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-5 bg-gold text-charcoal font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? <Loader2 className="animate-spin" /> : "Send Message"}
                            </button>
                        </div>

                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded mt-4"
                                >
                                    <CheckCircle size={20} />
                                    <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded mt-4"
                                >
                                    <AlertCircle size={20} />
                                    <span>Something went wrong. Please try again.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </section>
    );
}
