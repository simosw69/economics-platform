import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Search, Book, TrendingUp, BarChart2, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home({ user }) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar user={user} />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Impara l'Economia
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        La piattaforma libera per lo studio delle scienze
                        economiche. Semplice, accessibile, e completa.
                    </p>

                    <div className="max-w-xl mx-auto relative mb-12">
                        <Input
                            type="search"
                            placeholder="Cerca un argomento..."
                            className="h-14 pl-6 pr-12 rounded-full text-lg bg-white text-slate-900 border-none focus-visible:ring-2 focus-visible:ring-primary"
                        />
                        <Button
                            size="icon"
                            className="absolute right-2 top-2 h-10 w-10 rounded-full"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full font-bold"
                            asChild
                        >
                            <a href="/articles">Inizia a Studiare</a>
                        </Button>
                        {user && (
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold"
                                asChild
                            >
                                <a href="/articles/create">Scrivi Lezione</a>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Topics Grid */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Argomenti Principali
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Topic 1 */}
                        <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-all group cursor-pointer text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Book className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Microeconomia
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Domanda, offerta e mercati.
                            </p>
                            <Button
                                variant="link"
                                className="text-blue-600 dark:text-blue-400"
                            >
                                Vai al corso &rarr;
                            </Button>
                        </div>

                        {/* Topic 2 */}
                        <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-all group cursor-pointer text-center">
                            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Macroeconomia
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                PIL, inflazione e crescita.
                            </p>
                            <Button
                                variant="link"
                                className="text-green-600 dark:text-green-400"
                            >
                                Vai al corso &rarr;
                            </Button>
                        </div>

                        {/* Topic 3 */}
                        <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-all group cursor-pointer text-center">
                            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <BarChart2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Finanza</h3>
                            <p className="text-muted-foreground mb-4">
                                Mercati finanziari e investimenti.
                            </p>
                            <Button
                                variant="link"
                                className="text-purple-600 dark:text-purple-400"
                            >
                                Vai al corso &rarr;
                            </Button>
                        </div>

                        {/* Topic 4 */}
                        <div className="bg-background p-8 rounded-xl shadow-sm border hover:shadow-md transition-all group cursor-pointer text-center">
                            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Economia Globale
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Commercio internazionale e sviluppo.
                            </p>
                            <Button
                                variant="link"
                                className="text-orange-600 dark:text-orange-400"
                            >
                                Vai al corso &rarr;
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footerish Section */}
            <section className="py-20 bg-background text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">
                        Inizia il tuo percorso oggi
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Unisciti a migliaia di studenti che stanno imparando
                        l'economia in modo semplice e gratuito.
                    </p>
                    <Button size="lg" className="px-8" asChild>
                        <a href="/register">Crea un Account Gratuito</a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
