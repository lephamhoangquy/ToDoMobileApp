import React from "react";
import { IonItem, IonLabel } from "@ionic/react";

export const TaskItem = ({ task, index }) => {
  const { name } = task;
  return (
    <IonItem>
      <IonLabel>{index}</IonLabel>
      <IonLabel>{name}</IonLabel>
    </IonItem>
  );
};
