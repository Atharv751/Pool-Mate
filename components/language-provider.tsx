"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    "find-ride": "Find a Ride",
    "join-driver": "Join as Driver",
    features: "Features",
    "women-only": "Women-Only Mode",
    "how-it-works": "How It Works",
    about: "About Us",
    contact: "Contact",
    login: "Log in",
    signup: "Sign up",
  },
  hi: {
    home: "होम",
    "find-ride": "राइड खोजें",
    "join-driver": "ड्राइवर बनें",
    features: "विशेषताएं",
    "women-only": "महिला-केवल मोड",
    "how-it-works": "यह कैसे काम करता है",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    login: "लॉग इन",
    signup: "साइन अप",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

