import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from 'pages/layouts/MainLayouts';
import { css, Global } from '@emotion/react';
import { BASE_COLOR } from 'utilities/constants';

function App() {
  return (
    <>
      <Global
            styles={css`
                body {
                    background: ${BASE_COLOR.SOFT_RED};  /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, ${BASE_COLOR.DARK_RED}, ${BASE_COLOR.SOFT_RED});  /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, ${BASE_COLOR.DARK_RED}, ${BASE_COLOR.SOFT_RED}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                }
            `}
        />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<MainLayouts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
