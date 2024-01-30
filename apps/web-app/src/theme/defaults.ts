import { GlobalThemeType } from './_types';

export const lightTheme: GlobalThemeType = {
  mode: 'light',
  data: {
    color: 'grey',  
    backgroundColor: 'rgb(190,190,190)',
    backgroundImage:
      'linear-gradient(130deg, rgba(190,190,190,1) 0%, rgba(247,247,247,1) 19%, rgba(255,255,255,1) 100%);',
    fontSize: 14,
  },
};

export const darkTheme: GlobalThemeType = {
  mode: 'dark',
  data: {
    color: 'white',
    backgroundColor: '#2E3532',
    fontSize: 14,
  },
};
