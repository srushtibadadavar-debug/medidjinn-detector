import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon, FileImage, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/bmp', 'image/tiff'];
const MAX_SIZE = 32 * 1024 * 1024; // 32MB

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFile = useCallback((selectedFile: File) => {
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload PNG, JPEG, BMP, or TIFF images only",
        variant: "destructive",
      });
      return;
    }

    if (selectedFile.size > MAX_SIZE) {
      toast({
        title: "File too large",
        description: "Maximum file size is 32MB",
        variant: "destructive",
      });
      return;
    }

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(selectedFile);
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  }, [handleFile]);

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = {
      prediction: Math.random() > 0.5 ? 'REAL' : 'FAKE',
      confidence: (0.85 + Math.random() * 0.14).toFixed(3),
      imageSize: `${preview ? '1024' : '800'}x${preview ? '768' : '600'}`,
      processingTime: (0.1 + Math.random() * 0.4).toFixed(3),
      modelUsed: 'YOLOv5su',
      timestamp: new Date().toISOString(),
    };

    setIsAnalyzing(false);
    navigate('/results', { state: { result, preview, filename: file.name } });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Upload Medical Image</h1>
          <p className="text-muted-foreground">
            Upload a medical image for deepfake detection analysis
          </p>
        </div>

        <Card className="p-8 space-y-6">
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              className={`
                border-2 border-dashed rounded-xl p-12 text-center transition-all
                ${isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}
              `}
            >
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <UploadIcon className="h-10 w-10 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Drop your image here</h3>
                  <p className="text-muted-foreground">
                    or click to browse files
                  </p>
                </div>

                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.bmp,.tiff,.dcm"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) handleFile(selectedFile);
                  }}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button asChild>
                    <span className="cursor-pointer">Choose File</span>
                  </Button>
                </label>

                <div className="pt-4 text-sm text-muted-foreground">
                  Supported: PNG, JPEG, BMP, TIFF, DICOM • Max size: 32MB
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden bg-muted">
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-h-[500px] object-contain"
                  />
                )}
                <Button
                  size="icon"
                  variant="destructive"
                  className="absolute top-4 right-4"
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <FileImage className="h-8 w-8 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <Button
                className="w-full gap-2"
                size="lg"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze Image
                  </>
                )}
              </Button>
            </div>
          )}
        </Card>

        <Card className="p-6 bg-accent/5 border-accent/20">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <FileImage className="h-5 w-5 text-accent" />
            Supported Formats
          </h3>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div>✓ PNG - Portable Network Graphics</div>
            <div>✓ JPEG/JPG - Joint Photographic Experts Group</div>
            <div>✓ BMP - Bitmap Image File</div>
            <div>✓ TIFF - Tagged Image File Format</div>
            <div>✓ DICOM - Digital Imaging Standard</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
