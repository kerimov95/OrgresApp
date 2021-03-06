import { IonApp, setupConfig } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tabs from "./pages/Tabs";
import { authContext, pointContext } from './context';
import { useProvideAuth, useProvidePoint } from "./context/provide";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { } from './context/provide';

const App: React.FC = () => {

  setupConfig({
    mode: 'ios'
  });

  return (
    <IonApp>
      <IonReactRouter>
        <authContext.Provider value={useProvideAuth()} >
          <pointContext.Provider value={useProvidePoint()}>
            <Tabs />
          </pointContext.Provider>
        </authContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
