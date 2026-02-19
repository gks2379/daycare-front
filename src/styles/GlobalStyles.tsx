import { css, Global } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = (
    <Global styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

    body {
      font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: ${theme.colors.text};
      background: ${theme.colors.bg};
      min-height: 100vh;
    }

    a { text-decoration: none; color: inherit; transition: color ${theme.transition.fast}; }

    button {
      cursor: pointer; border: none; outline: none;
      font-family: 'Noto Sans KR', sans-serif; font-size: 1rem;
      transition: all ${theme.transition.base};
    }

    img { max-width: 100%; display: block; }
    ul, ol { list-style: none; }

    input, textarea, select {
      font-family: 'Noto Sans KR', sans-serif; font-size: 1rem;
      outline: none; border: 1px solid ${theme.colors.border};
      border-radius: ${theme.radius.sm}; padding: 12px 16px;
      transition: border-color ${theme.transition.fast};
      width: 100%; background: ${theme.colors.bgCard};
    }

    input:focus, textarea:focus, select:focus {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(45,138,110,0.1);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `} />
);
