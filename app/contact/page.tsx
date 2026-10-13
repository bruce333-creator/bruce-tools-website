"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, MessageSquare, CheckCircle, Loader2, AlertCircle, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4987ae21-09bc-444a-8196-618f9b4fa79f",
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "EF Tools Contact"
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-28 pb-32 px-6">
      <div className="max-w-2xl mx-auto space-y-12">
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
            Contact
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Have a question, feedback, or a bug to report regarding one of the Maya plugins? Send a message directly.
          </p>
        </section>

        <div className="rounded-2xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="w-12 h-12 bg-white/[0.05] border border-white/10 text-accent rounded-full flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <h2 className="text-xl font-medium text-foreground">Message Sent</h2>
              <p className="text-xs text-text-secondary max-w-sm">
                Thank you. Your message has been transmitted and I will review it shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/[0.08] text-xs text-text-secondary hover:text-foreground transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              {status === "error" && (
                <div className="bg-red-950/30 border border-red-800/40 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2.5 text-xs">
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <span>Unable to send message right now. Please try again later.</span>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-xs text-text-secondary mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                    <Mail size={15} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-xs sm:text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@studio.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-text-secondary mb-1.5">
                  Subject / Plugin
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                    <MessageSquare size={15} />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-xs sm:text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="e.g. RenderMan Node Wrangler issue on Maya 2024"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-text-secondary mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Describe your question or reproduction steps..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-[#EDEDEC] text-[#141413] hover:bg-white text-xs font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
