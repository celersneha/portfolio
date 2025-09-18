"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  Coffee,
  MessageSquare,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "motion/react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:celersneha@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:celersneha@gmail.com",
      value: "celersneha@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+918770579552",
      value: "+91 87705 79552",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/celersneha",
      value: "github.com/celersneha",
    },
    {
      icon: BsTwitterX,
      label: "Twitter",
      href: "https://x.com/celersneha",
      value: "x.com/celersneha",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/celersneha",
      value: "linkedin.com/in/celersneha",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 relative z-0"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
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
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2 px-3 py-2 text-base cursor-pointer hover:bg-primary/10 transition"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Badge>
                </Link>
              ))}
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

                  <Button type="submit" size="lg" className="w-full group">
                    <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
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
                  <Coffee className="mr-2 w-4 h-4" />
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
                  href="https://drive.google.com/file/d/1OKOeDkdh_rIUOBBsw7w6xjzBY5GBvDGA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
