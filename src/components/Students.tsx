
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, BookOpen, FileText } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');

  const students = [
    { id: 1, name: 'Alice Johnson', grade: '10A', email: 'alice@school.edu', phone: '555-0101', average: 92, status: 'active' },
    { id: 2, name: 'Bob Smith', grade: '10B', email: 'bob@school.edu', phone: '555-0102', average: 85, status: 'active' },
    { id: 3, name: 'Carol Davis', grade: '11A', email: 'carol@school.edu', phone: '555-0103', average: 88, status: 'active' },
    { id: 4, name: 'David Wilson', grade: '11B', email: 'david@school.edu', phone: '555-0104', average: 79, status: 'inactive' },
    { id: 5, name: 'Emma Brown', grade: '10A', email: 'emma@school.edu', phone: '555-0105', average: 95, status: 'active' },
    { id: 6, name: 'Frank Miller', grade: '10B', email: 'frank@school.edu', phone: '555-0106', average: 82, status: 'active' },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === 'all' || student.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge variant="secondary">Inactive</Badge>
    );
  };

  const getGradeBadge = (average: number) => {
    if (average >= 90) return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    if (average >= 80) return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
    if (average >= 70) return <Badge className="bg-yellow-100 text-yellow-800">Fair</Badge>;
    return <Badge className="bg-red-100 text-red-800">Needs Improvement</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Students Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">Add New Student</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter student name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="grade">Grade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10A">Grade 10A</SelectItem>
                    <SelectItem value="10B">Grade 10B</SelectItem>
                    <SelectItem value="11A">Grade 11A</SelectItem>
                    <SelectItem value="11B">Grade 11B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Add Student</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sm:max-w-sm"
            />
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="sm:max-w-[180px]">
                <SelectValue placeholder="Filter by grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="10A">Grade 10A</SelectItem>
                <SelectItem value="10B">Grade 10B</SelectItem>
                <SelectItem value="11A">Grade 11A</SelectItem>
                <SelectItem value="11B">Grade 11B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.grade}</p>
                      </div>
                    </div>
                    {getStatusBadge(student.status)}
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">{student.email}</p>
                    <p className="text-sm text-gray-600">{student.phone}</p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Average</p>
                      <p className="text-lg font-bold text-gray-900">{student.average}%</p>
                    </div>
                    {getGradeBadge(student.average)}
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <BookOpen className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <FileText className="h-4 w-4 mr-1" />
                      Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Students;
