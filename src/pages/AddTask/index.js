import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";

const AddTask = ({ onSubmit }) => {
  const [task, setTask] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (task) {
      onSubmit(task);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add New Task</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add New Task</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={submit}>
          <IonList>
            <IonItem>
              <IonInput
                placeholder="Enter Task Name"
                onIonChange={(e) => setTask(e.detail.value)}
              ></IonInput>
            </IonItem>
            <IonButton mode="ios" shape="round" type="submit" color="primary">
              Add Task
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddTask;
