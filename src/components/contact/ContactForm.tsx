"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string>("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setApiError("");

    if (!accessKey) {
      console.warn("Web3Forms access key is missing. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment variables.");
      setStatus("error");
      setApiError("Web3Forms Access Key is missing. Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment variables.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Stone Circuit Website"
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setApiError(result.message || "API submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setApiError("A network error occurred. Please check your internet connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-bg-panel border border-emerald-500/20 rounded-xl p-8 max-w-lg mx-auto space-y-6 text-center animate-in fade-in duration-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-600 inline-block">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-text-primary">
            Message Sent Successfully
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Thank you for contacting Stone Circuit. We&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <Button
          onClick={() => {
            setStatus("idle");
          }}
          variant="outline"
          className="w-full font-semibold cursor-pointer"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-bg-panel border border-border-muted rounded-xl p-6 sm:p-8 shadow-md relative" noValidate>
      {!accessKey && (
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-xl p-4 text-xs font-mono flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Development Warning:</span> NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not configured in your environment variables. Form submissions will fail.
          </div>
        </div>
      )}

      {status === "error" && apiError && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl p-4 text-xs font-mono flex items-start gap-2.5 animate-in fade-in duration-150">
          <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Submission Error:</span>
            <p className="leading-relaxed">{apiError}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name input */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-text-secondary">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            className={cn(errors.name && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={status === "submitting"}
          />
          {errors.name && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        {/* Email Address input */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-text-secondary">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            className={cn(errors.email && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={status === "submitting"}
          />
          {errors.email && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Subject Input */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-semibold text-text-secondary">
            Subject <span className="text-red-500">*</span>
          </label>
          <Input
            id="subject"
            className={cn(errors.subject && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            disabled={status === "submitting"}
          />
          {errors.subject && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-text-secondary">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            rows={4}
            className={cn(errors.message && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="Your message (minimum 20 characters)..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={status === "submitting"}
          />
          {errors.message && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        variant="turquoise"
        className="w-full font-semibold flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send className="w-4 h-4 shrink-0" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
