import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar({ user }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        E
                    </div>
                    <span className="text-xl font-bold text-foreground">
                        EconLearn
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="/courses"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Corsi
                    </a>
                    <a
                        href="/articles"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Lezioni
                    </a>
                    <a
                        href="/about"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Chi Siamo
                    </a>
                </div>

                {/* Auth Buttons / Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" asChild>
                        <a href="/articles/create">Scrivi Lezione</a>
                    </Button>
                    {user ? (
                        <>
                            <span className="text-sm font-medium text-muted-foreground">
                                Ciao, {user.username}
                            </span>
                            <Button variant="outline" asChild>
                                <a href="/logout">Esci</a>
                            </Button>
                        </>
                    ) : (
                        <div className="text-sm font-medium text-muted-foreground">
                            Modalità Ospite
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="8" x2="20" y2="8" />
                                <line x1="4" y1="16" x2="20" y2="16" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border/40 bg-background">
                    <div className="container mx-auto px-4 py-4 space-y-3">
                        <a
                            href="/"
                            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                            Home
                        </a>
                        <a
                            href="/courses"
                            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                            Corsi
                        </a>
                        <a
                            href="/articles"
                            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                            Lezioni
                        </a>
                        <a
                            href="/about"
                            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                            Chi Siamo
                        </a>
                        <div className="pt-4 border-t border-border/40 flex flex-col gap-2">
                            <a
                                href="/articles/create"
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                            >
                                Scrivi Lezione
                            </a>
                            {user ? (
                                <>
                                    <div className="text-sm font-medium text-muted-foreground py-2">
                                        Ciao, {user.username}
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        asChild
                                    >
                                        <a href="/logout">Esci</a>
                                    </Button>
                                </>
                            ) : (
                                <div className="text-sm font-medium text-muted-foreground py-2 text-center">
                                    Modalità Ospite
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
