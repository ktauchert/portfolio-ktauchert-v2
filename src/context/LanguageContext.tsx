import React from "react";

type Props = {
  children: React.ReactNode;
};

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageContext = React.createContext<
  LanguageContextType | undefined
>(undefined);

const LanguageContextProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "de" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
export const useLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
};
