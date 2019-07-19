---
title: "Testing React Components with Jest"
date: "2019-05-14"
---


####Test the functionality of a component rather than the implementation

*If you wrote tests for all class based components then the team wants to refactor the app to use functional components using hooks. All implementation based tests will fail but the implementation based tests will pass.*

**Initial Repo: https://github.com/LambdaSchool/webtesting-ii-guided**

1. Run `yarn test` in terminal
2. Run `yarn add react-testing-library --dev`
   - *Documentation: https://testing-library.com/docs/react-testing-library/intro*
3. Write our first test in `app.test.js`

    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { render } from 'react-testing-library';

    import App from './App';

    describe('<App />', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
        it('renders fine', () => {
            render(<App />);
        });
    })
    ```

4. Import cleanup from react-testing-library in `app.test.js`

    ```
    import { cleanup, render } from 'react-testing-library';
    ```

5. Include `afterEach(cleanup);` in `app.test.js`

    ```
    import React from 'react';
    import { cleanup, render } from 'react-testing-library';
    import App from './App';
    afterEach(cleanup);
    ```

6. Write a test to check that <App /> renders Hello World! (case insensitive) in app.test.js

    ```
    describe('<App />', () => {
        it('renders Hello World', () => {
            const { getByText } = render(<App />);
            getByText(/Hello World!/i);
        });
    });
    ```

7. Update `App.js` to render Hello World!

    ```
    import React, { Component } from 'react';
    import './App.css';

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <h3>Hello World!</h3>
                </div>
            );
        }
    }

    export default App;
    ```

8. Write a test to check if Hello Web 18 renders after clicking a button with the text greet in `app.test.js`

```
    it('greets the web 18 cohort', () => {
        const { getByText } = render(<App />);
        const button = getByText(/greet/i);
        fireEvent.click(button);
        getByText(/hello web 18/i);
    });
```

9. Add the UI and functionality in `app.js` for the previous test using react hooks

    ```
    import React, { useState } from 'react';
    import './App.css';

    function App() {
        const [greeting, setGreeting] = useState('')

        const greet = () => {
            setGreeting('hello web 18')
        }

        return (
            <div className='App'>
                <h3>Hello World!</h3>
                <div>
                    <button onClick={greet}>Greet</button>
                </div>
                <h4>{greeting}</h4>
            </div>
        );
    }

    export default App;
    ```

10. Create a Players.js component in `/src` directory

    ```
    import React from 'react';

    function Players(props) {
        const { players = [] } = props;

        return (
            <>
                <h3>Player List</h3>
                {players.map(p => (
                    <div key={p.id}>{p.name}</div>
                ))}
            </>
        );
    }

    export default Players;
    ```

---

###Resources

**React Testing Library:** https://testing-library.com/docs/react-testing-library/intro

**Which query should I use?:** https://testing-library.com/docs/guide-which-query
