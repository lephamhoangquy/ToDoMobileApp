import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from "@ionic/react";
import { TaskItem } from "./taskitem";
import { FilterTask } from "./filterTask";

const TaskList = ({ tasks }) => {
  const [filerName, setFilterName] = useState("");
  const [id, setTaskDone] = useState("");

  const handleFilter = (task) => {
    setFilterName(task.toLowerCase());
  };

  const handleDone = (id) => {
    setTaskDone(id);
  };

  if (filerName) {
    tasks = tasks.filter((task) => task.name.toLowerCase().includes(filerName));
  }
  if (id) {
    tasks = tasks.map((task) => {
      if (task.id === id) task.isDone = true;
      return task;
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <FilterTask handleFilter={handleFilter} />
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              index={index + 1}
              task={task}
              handleDone={handleDone}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
