import Dashboard from './Dashboard/Dashboard';
import TaskSection from './TaskSection/TaskSection';
import TopLayout from './TopSection/TopLayout';

export default function RootLayout() {
  return (
    <>
      <TopLayout />
      <Dashboard />
      <TaskSection />
    </>
  );
}
