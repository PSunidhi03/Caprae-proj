import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  CheckSquare, 
  Plus, 
  Search, 
  Calendar,
  Clock,
  AlertCircle,
  Filter
} from "lucide-react";
import { useState } from "react";

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Pending", "In Progress", "Completed", "Overdue"];

  const tasks = [
    {
      id: 1,
      title: "Review financial statements from Sarah Chen",
      description: "Analyze Q4 2023 financial documents and prepare summary",
      priority: "High",
      status: "Pending",
      dueDate: "2024-01-20",
      assignee: "You",
      category: "Due Diligence",
      completed: false
    },
    {
      id: 2,
      title: "Schedule valuation call with Michael Rodriguez",
      description: "Coordinate availability for business valuation discussion",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-01-18",
      assignee: "You",
      category: "Communication",
      completed: false
    },
    {
      id: 3,
      title: "Upload updated business plan",
      description: "Provide latest version of business plan to data room",
      priority: "High",
      status: "Completed",
      dueDate: "2024-01-15",
      assignee: "You",
      category: "Documentation",
      completed: true
    },
    {
      id: 4,
      title: "Sign NDA with Emily Park",
      description: "Review and execute non-disclosure agreement",
      priority: "Medium",
      status: "Pending",
      dueDate: "2024-01-22",
      assignee: "You",
      category: "Legal",
      completed: false
    },
    {
      id: 5,
      title: "Prepare market analysis presentation",
      description: "Create comprehensive market analysis for potential buyers",
      priority: "Low",
      status: "Overdue",
      dueDate: "2024-01-14",
      assignee: "You",
      category: "Documentation",
      completed: false
    }
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "All" || task.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge className="bg-destructive text-destructive-foreground">{priority}</Badge>;
      case "Medium":
        return <Badge className="bg-warning text-warning-foreground">{priority}</Badge>;
      case "Low":
        return <Badge className="bg-secondary text-secondary-foreground">{priority}</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
      case "In Progress":
        return <Badge className="bg-primary text-primary-foreground">{status}</Badge>;
      case "Overdue":
        return <Badge className="bg-destructive text-destructive-foreground">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Layout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Tasks</h1>
          <p className="text-muted-foreground">
            Manage your acquisition-related tasks and track progress on active deals.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
              <CheckSquare className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{tasks.length}</div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {tasks.filter(task => task.status === "Pending").length}
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckSquare className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {tasks.filter(task => task.status === "Completed").length}
              </div>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {tasks.filter(task => task.status === "Overdue").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex gap-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter}
                      variant={selectedFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(filter)}
                      className={selectedFilter === filter ? "btn-primary" : ""}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => {
            const daysUntilDue = getDaysUntilDue(task.dueDate);
            const isOverdue = daysUntilDue < 0;
            const isDueSoon = daysUntilDue <= 3 && daysUntilDue >= 0;

            return (
              <Card key={task.id} className="card-interactive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Checkbox 
                      checked={task.completed}
                      className="mt-1"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                            {task.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {task.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {getPriorityBadge(task.priority)}
                          {getStatusBadge(task.status)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due {task.dueDate}</span>
                            {isOverdue && (
                              <span className="text-destructive font-medium">
                                ({Math.abs(daysUntilDue)} days overdue)
                              </span>
                            )}
                            {isDueSoon && !isOverdue && (
                              <span className="text-warning font-medium">
                                ({daysUntilDue} days remaining)
                              </span>
                            )}
                          </div>
                          <Badge variant="outline">{task.category}</Badge>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <CheckSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No tasks found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or create your first task.
            </p>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tasks;