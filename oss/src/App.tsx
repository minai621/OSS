import React from 'react';
import AppRouter from './routes/AppRouter';

const App: React.FC = ()=> {
  return(
      <div style={{width: '100%', minHeight: '100vh', justifyContent: 'center'}}>
        <AppRouter />
      </div>
  )
}

export default App;