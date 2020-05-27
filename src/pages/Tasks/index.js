import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/react";
import { TaskItem } from "./taskitem";

const TaskList = ({ tasks }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tasks.map((task, index) => (
            <TaskItem key={index} index={index + 1} task={task} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
