import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border-2 border-primary/20 h-12 px-3 text-foreground"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border-2 border-primary/20 rounded-lg shadow-lg z-50 min-w-32 text-foreground">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-3 hover:bg-primary/5 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 text-foreground"
            >
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}