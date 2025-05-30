
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, BookOpen, Calendar } from 'lucide-react';

const Results = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const results = [
    { id: 1, student: 'Alice Johnson', subject: 'Mathematics', exam: 'Mid-term', score: 95, grade: 'A+', date: '2024-01-15' },
    { id: 2, student: 'Bob Smith', subject: 'Science', exam: 'Final', score: 88, grade: 'A', date: '2024-01-20' },
    { id: 3, student: 'Carol Davis', subject: 'English', exam: 'Quiz', score: 85, grade: 'A-', date: '2024-01-18' },
    { id: 4, student: 'David Wilson', subject: 'History', exam: 'Mid-term', score: 82, grade: 'B+', date: '2024-01-16' },
    { id: 5, student: 'Emma Brown', subject: 'Mathematics', exam: 'Final', score: 96, grade: 'A+', date: '2024-01-22' },
    { id: 6, student: 'Frank Miller', subject: 'Science', exam: 'Quiz', score: 78, grade: 'B', date: '2024-01-19' },
  ];

  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Physics'];

  const filteredResults = results.filter(result => {
    const matchesSearch = result.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || result.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const getGradeBadge = (grade: string) => {
    const gradeColors: { [key: string]: string } = {
      'A+': 'bg-green-100 text-green-800',
      'A': 'bg-green-100 text-green-800',
      'A-': 'bg-blue-100 text-blue-800',
      'B+': 'bg-blue-100 text-blue-800',
      'B': 'bg-yellow-100 text-yellow-800',
      'B-': 'bg-yellow-100 text-yellow-800',
      'C+': 'bg-orange-100 text-orange-800',
      'C': 'bg-red-100 text-red-800',
    };
    
    return <Badge className={gradeColors[grade] || 'bg-gray-100 text-gray-800'}>{grade}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Results Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">Add New Result</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Result</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="student">Student</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alice">Alice Johnson</SelectItem>
                    <SelectItem value="bob">Bob Smith</SelectItem>
                    <SelectItem value="carol">Carol Davis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(subject => (
                      <SelectItem key={subject} value={subject.toLowerCase()}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="exam">Exam Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quiz">Quiz</SelectItem>
                    <SelectItem value="midterm">Mid-term</SelectItem>
                    <SelectItem value="final">Final</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="score">Score</Label>
                <Input id="score" type="number" placeholder="Enter score (0-100)" />
              </div>
              <Button className="w-full">Add Result</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search by student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sm:max-w-sm"
            />
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="sm:max-w-[180px]">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map(subject => (
                  <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Exam Type</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">{result.student}</TableCell>
                  <TableCell>{result.subject}</TableCell>
                  <TableCell>{result.exam}</TableCell>
                  <TableCell className="font-bold">{result.score}%</TableCell>
                  <TableCell>{getGradeBadge(result.grade)}</TableCell>
                  <TableCell>{new Date(result.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Results</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.3%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exams This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
