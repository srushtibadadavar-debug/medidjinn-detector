import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Zap, Brain, Upload, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Medical Image Authentication</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Detect Medical{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Deepfakes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Advanced AI detection system for identifying manipulated medical images. 
              Protect healthcare integrity with state-of-the-art deep learning models.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/upload">
                <Button size="lg" className="gap-2 shadow-medical">
                  <Upload className="h-5 w-5" />
                  Upload Image
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="gap-2">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-medical transition-all bg-gradient-card">
              <div className="p-3 rounded-xl bg-primary/10 w-fit">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">YOLOv5su Model</h3>
              <p className="text-muted-foreground">
                Industry-leading 99.7% accuracy with our optimized deep learning architecture 
                specifically trained on medical imaging datasets.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-medical transition-all bg-gradient-card">
              <div className="p-3 rounded-xl bg-accent/10 w-fit">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Real-time Analysis</h3>
              <p className="text-muted-foreground">
                Get instant results with processing times under 500ms. 
                Fast detection without compromising accuracy or reliability.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-medical transition-all bg-gradient-card">
              <div className="p-3 rounded-xl bg-success/10 w-fit">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold">Medical Grade</h3>
              <p className="text-muted-foreground">
                Trusted by healthcare professionals. Supports DICOM, X-ray, CT, MRI, 
                and various medical imaging formats.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.7%</div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">~300ms</div>
              <div className="text-muted-foreground">Avg Processing Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">6+</div>
              <div className="text-muted-foreground">Image Formats</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-warning">3</div>
              <div className="text-muted-foreground">AI Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to authenticate medical images
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="text-xl font-bold">Upload Image</h3>
              <p className="text-muted-foreground">
                Upload your medical image in any supported format (DICOM, PNG, JPEG, etc.)
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-2xl font-bold text-accent">
                2
              </div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI models analyze the image for signs of manipulation
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center text-2xl font-bold text-success">
                3
              </div>
              <h3 className="text-xl font-bold">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed analysis with confidence scores and visual indicators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container max-w-4xl mx-auto text-center space-y-6 text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Secure Medical Imaging?
          </h2>
          <p className="text-xl opacity-90">
            Start detecting manipulated medical images with our AI-powered platform
          </p>
          <Link to="/upload">
            <Button size="lg" variant="secondary" className="gap-2">
              <Upload className="h-5 w-5" />
              Start Detection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
