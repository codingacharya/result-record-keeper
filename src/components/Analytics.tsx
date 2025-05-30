
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useState } from 'react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('semester');

  const subjectPerformance = [
    { subject: 'Math', average: 85, students: 45 },
    { subject: 'Science', average: 82, students: 42 },
    { subject: 'English', average: 88, students: 48 },
    { subject: 'History', average: 79, students: 38 },
    { subject: 'Physics', average: 84, students: 40 },
  ];

  const gradeDistribution = [
    { grade: 'A+', count: 25, color: '#10b981' },
    { grade: 'A', count: 35, color: '#3b82f6' },
    { grade: 'B+', count: 42, color: '#8b5cf6' },
    { grade: 'B', count: 38, color: '#f59e0b' },
    { grade: 'C+', count: 20, color: '#ef4444' },
    { grade: 'C', count: 12, color: '#6b7280' },
  ];

  const monthlyTrends = [
    { month: 'Sep', math: 78, science: 82, english: 85 },
    { month: 'Oct', math: 82, science: 84, english: 87 },
    { month: 'Nov', math: 85, science: 83, english: 88 },
    { month: 'Dec', math: 83, science: 85, english: 89 },
    { month: 'Jan', math: 87, science: 88, english: 90 },
  ];

  const classComparison = [
    { class: '10A', average: 87, students: 32 },
    { class: '10B', average: 83, students: 30 },
    { class: '11A', average: 89, students: 28 },
    { class: '11B', average: 85, students: 31 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="semester">This Semester</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="average" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ grade, count }) => `${grade}: ${count}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="math" stroke="#ef4444" strokeWidth={2} name="Mathematics" />
              <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2} name="Science" />
              <Line type="monotone" dataKey="english" stroke="#3b82f6" strokeWidth={2} name="English" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Class Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="class" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="average" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Top Performer</h4>
                <p className="text-green-700">Grade 11A has the highest average score of 89%</p>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Most Improved</h4>
                <p className="text-blue-700">Mathematics scores improved by 9% this semester</p>
              </div>
              
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Needs Attention</h4>
                <p className="text-orange-700">History subject requires additional support</p>
              </div>
              
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Achievement</h4>
                <p className="text-purple-700">60% of students achieved A grades or higher</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
