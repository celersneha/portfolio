"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCoffee,
} from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { sendMail } from "@/actions/email/sendMail";
import { toast } from "sonner";

const iconMap = {
  Mail: FiMail,
  Phone: FiPhone,
  Github: FiGithub,
  Linkedin: FiLinkedin,
  BsTwitterX,
};

export interface ContactLink {
  icon: keyof typeof iconMap;
  label: string;
  href: string;
  value: string;
}

interface ContactClientProps {
  contactInfo: ContactLink[];
}

export default function ContactClient({ contactInfo }: ContactClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface SendMailResponse {
    success: boolean;
    [key: string]: any;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res: SendMailResponse = await sendMail(formData);
    setLoading(false);
    if (res.success) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully!", {
        duration: 4000,
        position: "bottom-right",
      });
    } else {
      toast.error("Failed to send message. Try again.", {
        duration: 4000,
        position: "bottom-right",
      });
    }
  };

  interface HandleChangeEvent
    extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.section
      id="contact"
      className="relative z-0 py-8 sm:py-12"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's create something{" "}
              <span className="text-primary">amazing together</span>
            </h2>
            {/* Social/Contact Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {contactInfo.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-2 text-base cursor-pointer hover:bg-primary/10 transition bg-white"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Badge>
                  </Link>
                );
              })}
            </div>
            <div className="text-muted-foreground text-base font-medium">
              Let's connect on social links or drop me a message
            </div>
          </div>

          {/* Message Form */}
          <div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={loading}
                  >
                    <FiSend
                      className={`mr-2 w-4 h-4 ${loading ? "opacity-50" : ""}`}
                    />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-16" />

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with modern
              technologies and user-centered design.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4">
              <Button size="lg" asChild className="group" variant={"secondary"}>
                <Link href="mailto:celersneha@gmail.com?subject=Project Collaboration Invitation&body=Hey Sneha, let’s connect for an interesting project!">
                  <FiCoffee className="mr-2 w-4 h-4" />
                  Let's grab a coffee
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-bold"
              >
                <Link
                  href={process.env.NEXT_PUBLIC_PDF_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoDocumentTextOutline className="mr-2 w-4 h-4" />
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
