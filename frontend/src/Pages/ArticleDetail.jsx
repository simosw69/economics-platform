import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Share2, Printer, List } from "lucide-react";

export default function ArticleDetail({ article, user }) {
    if (!article) return <div>Caricamento...</div>;

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: article.title,
                    text: "Leggi questa lezione su EconLearn!",
                    url: window.location.href,
                })
                .catch((error) => console.log("Error sharing:", error));
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copiato negli appunti!");
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar user={user} />

            <div className="flex-1 container mx-auto px-0 md:px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row">
                    {/* Sidebar Navigation */}
                    <div className="w-full lg:w-64 bg-slate-50 dark:bg-slate-900/50 border-r lg:min-h-[calc(100vh-65px)] lg:sticky lg:top-[65px] hidden lg:block p-4">
                        <h4 className="font-bold text-sm uppercase text-muted-foreground mb-4 px-2">
                            Indice Corso
                        </h4>
                        <nav className="space-y-1">
                            {/* In a real app, this list would be dynamic from props */}
                            <a
                                href="#"
                                className="block px-3 py-2 text-sm font-medium bg-primary/10 text-primary rounded-md"
                            >
                                {article.title}
                            </a>
                            <a
                                href="/articles"
                                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                            >
                                Torna all'indice
                            </a>
                            {/* Placeholders to simulate course structure */}
                            <div className="pt-4 pb-2 px-2 text-xs font-semibold text-muted-foreground/70">
                                Prossime Lezioni
                            </div>
                            <div className="px-3 py-2 text-sm text-muted-foreground/50 cursor-not-allowed">
                                Domanda e Offerta
                            </div>
                            <div className="px-3 py-2 text-sm text-muted-foreground/50 cursor-not-allowed">
                                Elasticità
                            </div>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 p-6 md:p-10 lg:p-12 max-w-4xl mx-auto">
                        {/* Mobile Breadcrumb/Back */}
                        <div className="lg:hidden mb-6">
                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="pl-0 text-muted-foreground"
                            >
                                <a href="/articles">
                                    <ArrowLeft className="mr-2 w-4 h-4" />{" "}
                                    Indice Lezioni
                                </a>
                            </Button>
                        </div>

                        <div className="mb-8 border-b pb-8">
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900 dark:text-slate-100">
                                {article.title}
                            </h1>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div>Pubblicato il {article.created_at}</div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleShare}
                                    >
                                        <Share2 className="w-4 h-4 mr-2" />{" "}
                                        Condividi
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => window.print()}
                                    >
                                        <Printer className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:underline">
                            <div className="whitespace-pre-wrap leading-relaxed">
                                {article.content}
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        <div className="mt-16 flex justify-between items-center py-8 border-t">
                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2"
                                asChild
                            >
                                <a href="/articles">
                                    <ArrowLeft className="w-4 h-4" /> Precedente
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                className="gap-2 bg-green-600 hover:bg-green-700 text-white"
                                disabled
                            >
                                Successivo <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </main>

                    {/* Right Sidebar (Ad Space style / Extra info) - Optional, mimicking W3Schools layout */}
                    <div className="hidden xl:block w-64 p-6 border-l">
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6">
                            <h5 className="font-bold mb-2 text-sm">
                                Quiz Rapido
                            </h5>
                            <p className="text-xs text-muted-foreground mb-4">
                                Metti alla prova la tua comprensione di questo
                                argomento.
                            </p>
                            <Button
                                size="sm"
                                className="w-full"
                                variant="secondary"
                            >
                                Inizia Quiz
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
