import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import StatCard from '@/components/StatCard';
import { DollarSign, Users, Activity } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 sm:flex-row">
      <LeftSidebar />
      <div className="flex flex-1 flex-col sm:pl-14">
        <Header />
        <main className="flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Dashboard Overview
            </h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <StatCard
                title="Monthly Recurring Revenue"
                value={48320}
                icon={<DollarSign className="h-5 w-5" />}
                change="3.2%"
                changeType="increase"
                period="vs last month"
                prefix="£"
              />
              <StatCard
                title="Active Users"
                value={1245}
                icon={<Users className="h-5 w-5" />}
                change="122"
                changeType="increase"
                period="this week"
              />
              <StatCard
                title="Churn Rate"
                value={1.8}
                icon={<Activity className="h-5 w-5" />}
                change="0.2%"
                changeType="decrease"
                period="vs last month"
                suffix="%"
                decimals={1}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;