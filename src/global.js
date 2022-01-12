import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .div-principal {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  

h1 {
    color: ${({ theme }) => theme.text};
}



.p-desc-title {
  color: ${({ theme }) => theme.text};
}


.vertical-line {
  border-color: ${({ theme }) => theme.text};
}

#ball{
  background: ${({ theme }) => theme.text};
}


#p-white-ball {
    color: ${({ theme }) => theme.text};
}
`;