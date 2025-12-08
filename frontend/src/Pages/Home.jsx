import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";

export default function Home({ title, subtitle, features, user }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar user={user} />
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                    {subtitle}
                </p>
                <div className="flex gap-4">
                    <Button size="lg">Get Started</Button>
                    <Button variant="outline" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Features Section */}
            {features && features.length > 0 && (
                <div className="py-16 px-6 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        What You'll Learn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardHeader>
                                    <div className="text-4xl mb-2">
                                        {feature.icon}
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
