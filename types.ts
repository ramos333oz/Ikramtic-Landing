import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
}

export enum SimulationType {
  AIR = 'AIR',
  GROUND = 'GROUND',
  UNMANNED = 'UNMANNED'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}