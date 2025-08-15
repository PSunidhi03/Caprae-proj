import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  Search, 
  Download, 
  Eye, 
  Trash2,
  Filter,
  FolderOpen
} from "lucide-react";
import { useState } from "react";

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Financial", "Legal", "Business Plans", "Due Diligence", "Contracts"];

  const documents = [
    {
      id: 1,
      name: "Financial Statements 2023",
      type: "PDF",
      size: "2.4 MB",
      category: "Financial",
      uploadDate: "2024-01-15",
      status: "Verified",
      shared: true
    },
    {
      id: 2,
      name: "Business Plan Executive Summary",
      type: "PDF",
      size: "1.8 MB",
      category: "Business Plans",
      uploadDate: "2024-01-14",
      status: "Pending Review",
      shared: false
    },
    {
      id: 3,
      name: "Non-Disclosure Agreement Template",
      type: "DOCX",
      size: "156 KB",
      category: "Legal",
      uploadDate: "2024-01-12",
      status: "Template",
      shared: false
    },
    {
      id: 4,
      name: "Tax Returns 2022-2023",
      type: "PDF",
      size: "3.2 MB",
      category: "Financial",
      uploadDate: "2024-01-10",
      status: "Confidential",
      shared: true
    },
    {
      id: 5,
      name: "Market Analysis Report",
      type: "PDF",
      size: "4.1 MB",
      category: "Due Diligence",
      uploadDate: "2024-01-08",
      status: "Verified",
      shared: false
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Verified":
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
      case "Pending Review":
        return <Badge className="bg-warning text-warning-foreground">{status}</Badge>;
      case "Confidential":
        return <Badge className="bg-destructive text-destructive-foreground">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Documents</h1>
          <p className="text-muted-foreground">
            Manage your business documents and share them securely with potential buyers.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{documents.length}</div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shared Documents</CardTitle>
              <FolderOpen className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {documents.filter(doc => doc.shared).length}
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified</CardTitle>
              <Badge className="h-4 w-4 bg-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {documents.filter(doc => doc.status === "Verified").length}
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <Upload className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12.1 MB</div>
              <p className="text-xs text-muted-foreground">of 100 MB limit</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "btn-primary" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button className="btn-primary">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <Card className="card-interactive">
          <CardHeader>
            <CardTitle>Document Library</CardTitle>
            <CardDescription>
              Showing {filteredDocuments.length} documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDocuments.map((document) => (
                <div key={document.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{document.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{document.type}</span>
                        <span>{document.size}</span>
                        <span>Uploaded {document.uploadDate}</span>
                        <Badge variant="outline">{document.category}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {getStatusBadge(document.status)}
                    {document.shared && (
                      <Badge variant="secondary">Shared</Badge>
                    )}
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No documents found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or upload your first document.
            </p>
            <Button className="btn-primary">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Documents;