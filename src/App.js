import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, triangle } from "ionicons/icons";

import Tasks from "./pages/Tasks";
// import { ListExample } from "./pages/Tasks";
import AddTask from "./pages/AddTask";
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

const App = () => {
  const tasks = [
    {
      id: 1,
      name: "play game",
      isDone: true,
    },
    {
      id: 2,
      name: "soccer",
      isDone: false,
    },
  ];

  const handleSubmit = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * Math.floor(1000)),
      name: task,
      isDone: false,
    };
    tasks.push(newTask);
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/tasks"
              component={() => <Tasks tasks={tasks} />}
              exact={true}
            />
            <Route
              path="/add-task"
              component={() => <AddTask onSubmit={handleSubmit} />}
              exact={true}
            />
            <Route
              path="/"
              render={() => <Redirect to="/tasks" />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tasks">
              <IonIcon icon={triangle} />
              <IonLabel>Task List</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/add-task">
              <IonIcon icon={ellipse} />
              <IonLabel>Add Task</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
