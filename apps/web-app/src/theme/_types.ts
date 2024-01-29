import { CSSProperties } from 'react';

export interface GlobalThemeType {
  mode: 'light' | 'dark';
  data: ThemeData;
}

export interface ThemeData extends CSSProperties {}
