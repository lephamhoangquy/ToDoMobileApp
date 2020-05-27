import React from "react";
import { IonItem, IonInput } from "@ionic/react";

export const FilterTask = ({ handleFilter }) => {
  return (
    <IonItem>
      <IonInput
        placeholder="Filter By Task Name"
        onIonChange={(e) => handleFilter(e.detail.value)}
      ></IonInput>
    </IonItem>
  );
};
