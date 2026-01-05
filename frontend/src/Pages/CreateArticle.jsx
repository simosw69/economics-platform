import { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function CreateArticle({ user }) {
    const [title, setTitle] = useState("");
    const [section, setSection] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sections = [
        "Microeconomia",
        "Macroeconomia",
        "Finanza",
        "Economia Globale",
    ];
    // const { toast } = useToast(); // Assuming standard shadcn/ui toast usage if configured

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, section, content }),
            });

            const data = await response.json();

            if (response.ok) {
                // toast({
                //    title: "Successo",
                //    description: "Lezione creata con successo!",
                //});
                alert("Lezione creata con successo!"); // Fallback if toast not active
                setTitle("");
                setSection("");
                setContent("");
                // Redirect can be handled here or just clear form
                window.location.href = "/articles";
            } else {
                alert(data.message || "Qualcosa è andato storto");
            }
        } catch (error) {
            console.error("Error creating article:", error);
            alert("Errore nella creazione della lezione");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar user={user} />
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto border-border/60 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                            Scrivi una Nuova Lezione
                        </CardTitle>
                        <CardDescription>
                            Condividi la tua conoscenza con la community di
                            EconLearn
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="title"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Titolo della Lezione
                                </label>
                                <Input
                                    id="title"
                                    placeholder="Es. Introduzione alla Microeconomia"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="text-lg py-6"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="section"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Sezione
                                </label>
                                <select
                                    id="section"
                                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Seleziona una sezione
                                    </option>
                                    {sections.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="content"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Contenuto della Lezione
                                </label>
                                <Textarea
                                    id="content"
                                    placeholder="Scrivi qui il contenuto della lezione..."
                                    className="min-h-[400px] font-mono text-base leading-relaxed"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-4 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => window.history.back()}
                                    disabled={isSubmitting}
                                >
                                    Annulla
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8"
                                >
                                    {isSubmitting
                                        ? "Pubblicazione..."
                                        : "Pubblica Lezione"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
