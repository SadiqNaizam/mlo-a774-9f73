import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';

interface ContentCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string; // e.g., /playlist/1, /artist/2
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, imageUrl, href, className }) => {
  console.log('ContentCard loaded for:', title);

  return (
    <Link to={href} className="group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
      <Card className={cn(
        "w-full h-full p-4 bg-[#181818] hover:bg-[#282828] transition-colors duration-300 border-none rounded-lg overflow-hidden cursor-pointer",
        className
      )}>
        <div className="mb-4 relative">
          <AspectRatio ratio={1 / 1}>
            <img
              src={imageUrl || 'https://via.placeholder.com/150'}
              alt={`Cover for ${title}`}
              className="object-cover w-full h-full rounded-md shadow-lg"
            />
          </AspectRatio>
        </div>
        <CardContent className="p-0 flex flex-col">
          <h3 className="font-bold text-white truncate text-base leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-1 truncate">
            {subtitle}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ContentCard;