
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { User, FileText, BookOpen, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Students', value: '1,245', icon: User, change: '+12%', color: 'text-blue-600' },
    { title: 'Total Subjects', value: '24', icon: BookOpen, change: '+3%', color: 'text-green-600' },
    { title: 'Exams Conducted', value: '89', icon: FileText, change: '+18%', color: 'text-purple-600' },
    { title: 'Average Grade', value: '85.3%', icon: Calendar, change: '+2.1%', color: 'text-orange-600' },
  ];

  const performanceData = [
    { month: 'Jan', average: 78 },
    { month: 'Feb', average: 82 },
    { month: 'Mar', average: 85 },
    { month: 'Apr', average: 83 },
    { month: 'May', average: 87 },
    { month: 'Jun', average: 85 },
  ];

  const subjectData = [
    { subject: 'Mathematics', average: 85 },
    { subject: 'Science', average: 82 },
    { subject: 'English', average: 88 },
    { subject: 'History', average: 79 },
    { subject: 'Physics', average: 84 },
  ];

  const recentResults = [
    { student: 'Alice Johnson', subject: 'Mathematics', grade: 'A+', score: 95 },
    { student: 'Bob Smith', subject: 'Science', grade: 'A', score: 88 },
    { student: 'Carol Davis', subject: 'English', grade: 'A-', score: 85 },
    { student: 'David Wilson', subject: 'History', grade: 'B+', score: 82 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.color} font-medium`}>{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="average" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="average" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{result.student}</p>
                    <p className="text-sm text-gray-600">{result.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-green-600">{result.grade}</p>
                    <p className="text-sm text-gray-600">{result.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Class Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Grade 10A</span>
                  <span className="text-sm text-gray-600">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Grade 10B</span>
                  <span className="text-sm text-gray-600">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Grade 11A</span>
                  <span className="text-sm text-gray-600">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Grade 11B</span>
                  <span className="text-sm text-gray-600">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
