import React from "react";
import { IonCheckbox, IonItem, IonLabel } from "@ionic/react";

export const TaskItem = ({ task, index, handleDone }) => {
  const { name, isDone, id } = task;
  return (
    <IonItem disabled={isDone}>
      <IonCheckbox
        checked={isDone}
        slot="end"
        color="primary"
        onIonChange={() => handleDone(id)}
      />
      <IonLabel>{index}</IonLabel>
      <IonLabel>{name}</IonLabel>
    </IonItem>
  );
};
