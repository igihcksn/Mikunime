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
                    background: ${BASE_COLOR.WHITE};
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
