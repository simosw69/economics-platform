import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ChevronRight } from "lucide-react";

export default function Articles({ articles, user }) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar user={user} />

            <div className="flex-1 container mx-auto px-4 py-12 md:py-16 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b pb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">
                            Indice delle Lezioni
                        </h1>
                        <p className="text-muted-foreground">
                            Esplora tutti gli articoli e le guide disponibili
                            sulla piattaforma.
                        </p>
                    </div>
                    {/* Optional: Filter/Sort controls could go here */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Area (Left) - Optional for future or categories */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 space-y-4">
                            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                                Argomenti
                            </h3>
                            {/* Placeholder categories */}
                            <nav className="flex flex-col space-y-1">
                                <Button
                                    variant="ghost"
                                    className="justify-start font-medium text-primary bg-primary/10"
                                >
                                    Tutti
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="justify-start text-muted-foreground hover:text-foreground"
                                >
                                    Microeconomia
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="justify-start text-muted-foreground hover:text-foreground"
                                >
                                    Macroeconomia
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="justify-start text-muted-foreground hover:text-foreground"
                                >
                                    Finanza
                                </Button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content (Right) */}
                    <div className="lg:col-span-3">
                        {articles.length > 0 ? (
                            <div className="space-y-4">
                                {articles.map((article) => (
                                    <div
                                        key={article.id}
                                        className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all"
                                    >
                                        <div className="flex-1 pr-4">
                                            <div className="flex items-center text-xs text-muted-foreground mb-2">
                                                <FileText className="w-3 h-3 mr-1" />
                                                Lezione • {article.created_at}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                <a
                                                    href={`/articles/${article.slug}`}
                                                    className="focus:outline-none"
                                                >
                                                    <span
                                                        className="absolute inset-0"
                                                        aria-hidden="true"
                                                    />
                                                    {article.title}
                                                </a>
                                            </h3>
                                            <p className="text-muted-foreground line-clamp-2 text-sm">
                                                {article.content}
                                            </p>
                                        </div>
                                        <div className="mt-4 sm:mt-0">
                                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed">
                                <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4 opacity-50" />
                                <h3 className="text-lg font-medium mb-2">
                                    Nessuna lezione trovata
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Non ci sono ancora articoli pubblicati.
                                </p>
                                <Button asChild>
                                    <a href="/articles/create">
                                        Scrivi la prima lezione
                                    </a>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
