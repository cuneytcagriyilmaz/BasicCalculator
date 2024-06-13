import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperationClick = (operation) => {
    dispatch(changeOperation(operation));
    dispatch(clearDisplay());
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Basic Calculator PoC</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton
                value={'M+'}
                onClick={() => handleOperationClick('M+')}
              />
              <CalcButton
                value={'MR'}
                onClick={() => handleOperationClick('MR')}
              />
              <CalcButton
                value={'MC'}
                onClick={() => handleOperationClick('MC')}
              />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick(1)} />
              <CalcButton value={2} onClick={() => handleNumberClick(2)} />
              <CalcButton value={3} onClick={() => handleNumberClick(3)} />
            </div>
            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)} />
              <CalcButton value={5} onClick={() => handleNumberClick(5)} />
              <CalcButton value={6} onClick={() => handleNumberClick(6)} />
            </div>
            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)} />
              <CalcButton value={8} onClick={() => handleNumberClick(8)} />
              <CalcButton value={9} onClick={() => handleNumberClick(9)} />
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={() => handleOperationClick('+')}
              />
              <CalcButton value={0} onClick={() => handleNumberClick(0)} />
              <CalcButton
                value={'-'}
                onClick={() => handleOperationClick('-')}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={() => handleOperationClick('*')}
              />
              <CalcButton
                value={'/'}
                onClick={() => handleOperationClick('/')}
              />
              <CalcButton value={'CE'} onClick={handleClearDisplay} />
            </div>
            <div className="row eq_button">
              <CalcButton value={'='} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
