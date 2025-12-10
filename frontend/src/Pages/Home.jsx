import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
    BarChart,
    Target,
    Trophy,
    ArrowRight,
    Star,
    CheckCircle2,
    Globe,
    Shield,
} from "lucide-react";

// Helper to map backend icons/titles to Lucide icons
const getIcon = (title) => {
    switch (title) {
        case "Interactive Charts":
            return <BarChart className="w-10 h-10 text-primary" />;
        case "Practical Exercises":
            return <Target className="w-10 h-10 text-primary" />;
        case "Track Progress":
            return <Trophy className="w-10 h-10 text-primary" />;
        default:
            return <CheckCircle2 className="w-10 h-10 text-primary" />;
    }
};

export default function Home({ title, subtitle, features, user }) {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
            <Navbar user={user} />

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 lg:pt-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-30"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm bg-background/50 mb-6 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        New Platform Launch 2.0
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="xl"
                            className="h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Get Started Now{" "}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="xl"
                            className="h-12 px-8 text-lg backdrop-blur-sm bg-background/50"
                        >
                            View Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {features && features.length > 0 && (
                <section className="py-24 bg-slate-50 relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Why Choose EconLearn?
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to master economics, from
                                basic principles to advanced market analysis.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                                >
                                    <CardHeader>
                                        <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl">
                                            {getIcon(feature.title)}
                                        </div>
                                        <CardTitle className="text-xl mb-2">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Social Proof / Testimonials */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Trusted by Learners Worldwide
                        </h2>
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                        <p className="text-muted-foreground">
                            4.9/5 Average Rating
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Alex Johnson",
                                role: "Economics Student",
                                content:
                                    "The interactive charts made complex concepts so much easier to understand. Highly recommended!",
                            },
                            {
                                name: "Sarah Williams",
                                role: "Finance Professional",
                                content:
                                    "A fantastic resource for refreshing my knowledge. The real-world examples are spot on.",
                            },
                            {
                                name: "Michael Chen",
                                role: "High School Teacher",
                                content:
                                    "I use EconLearn in my classroom. The students love the gamified progress tracking.",
                            },
                        ].map((testimonial, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                            >
                                <p className="text-lg mb-6 italic text-muted-foreground">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <p className="font-bold text-foreground">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-primary">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                EconLearn
                            </h3>
                            <p className="max-w-xs text-slate-400 mb-6">
                                Empowering the next generation of economists
                                with accessible, interactive education.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    <Shield className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">
                                Platform
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p>
                            &copy; {new Date().getFullYear()} EconLearn. All
                            rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
