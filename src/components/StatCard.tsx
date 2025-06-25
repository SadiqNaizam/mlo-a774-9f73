import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  change: string;
  changeType: 'increase' | 'decrease';
  period: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeType,
  period,
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const isIncrease = changeType === 'increase';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">
          <CountUp
            start={0}
            end={value}
            duration={2}
            separator=","
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          <span className={cn("flex items-center gap-1", isIncrease ? 'text-green-600' : 'text-red-600')}>
            {isIncrease ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            {change}
          </span>
          {period}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;