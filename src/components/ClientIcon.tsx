"use client";

import React from 'react';
import { Lightbulb, PiggyBank, Users } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

const ClientIcon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    case 'PiggyBank':
      return <PiggyBank className={className} />;
    case 'Users':
      return <Users className={className} />;
    default:
      return null;
  }
};

export default ClientIcon;
