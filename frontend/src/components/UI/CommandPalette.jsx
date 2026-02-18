import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../../mockData';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Open with Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    {
      id: 'consultation',
      title: 'Umów konsultację',
      description: 'Rozpocznij proces zakupu samochodu',
      shortcut: '⌘K',
      action: () => {
        alert('Przekierowanie do kalendarza konsultacji - funkcja w przygotowaniu');
        setIsOpen(false);
      }
    },
    {
      id: 'pricing',
      title: 'Cennik',
      description: 'Zobacz pakiety i ceny usług',
      shortcut: '⌘P',
      action: () => {
        navigate('/cennik');
        setIsOpen(false);
      }
    },
    {
      id: 'main-service',
      title: 'Pomoc w zakupie pojazdów',
      description: 'Główna usługa - kompleksowe wsparcie',
      shortcut: '⌘S',
      action: () => {
        navigate('/pomoc-w-zakupie');
        setIsOpen(false);
      }
    },
    {
      id: 'contact',
      title: 'Kontakt',
      description: 'Skontaktuj się z nami',
      shortcut: '⌘C',
      action: () => {
        navigate('/kontakt');
        setIsOpen(false);
      }
    },
    {
      id: 'services',
      title: 'Wszystkie usługi',
      description: 'Przeglądaj katalog usług',
      action: () => {
        navigate('/uslugi');
        setIsOpen(false);
      }
    },
    {
      id: 'case-studies',
      title: 'Case studies',
      description: 'Zobacz przykłady realizacji',
      action: () => {
        navigate('/case-studies');
        setIsOpen(false);
      }
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4">
        <div className="glass p-4 animate-fade-in">
          {/* Search input */}
          <div className="flex items-center border-b border-glass-border pb-4 mb-4">
            <Search className="w-5 h-5 text-muted mr-3" />
            <input
              type="text"
              placeholder="Wpisz polecenie lub wyszukaj..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-text placeholder-muted outline-none"
              autoFocus
            />
            <kbd className="px-2 py-1 text-xs text-muted bg-card rounded border border-glass-border">
              ESC
            </kbd>
          </div>

          {/* Commands list */}
          <div className="space-y-1 max-h-80 overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-muted">
                Nie znaleziono poleceń dla "{query}"
              </div>
            ) : (
              filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface transition-colors group"
                >
                  <div className="text-left">
                    <div className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                      {cmd.title}
                    </div>
                    <div className="text-xs text-muted">
                      {cmd.description}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {cmd.shortcut && (
                      <kbd className="px-2 py-1 text-xs text-muted bg-card rounded border border-glass-border">
                        {cmd.shortcut}
                      </kbd>
                    )}
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-glass-border flex items-center justify-between text-xs text-muted">
            <span>Wybierz za pomocą ↑↓ i Enter</span>
            <span>⌘K aby otworzyć</span>
          </div>
        </div>
      </div>
    </div>
  );
};