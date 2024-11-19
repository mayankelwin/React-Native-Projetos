import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Tarefas } from "../../components/Tarefas";
import { Header } from "../../components/header";
import { Task } from "../../components/Task";
import { useRef, useState } from "react";
import { TaskDTO } from "../../dtos/TaskDTO";
import { Empty } from "../../components/Empty";
import { uuid } from "../../utils/uuid";

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTasks, setNewTasks] = useState("");
  const newTaskInputRef = useRef<TextInput>(null);

  function handleTaskAdd() {
    if (newTasks !== "" && newTasks.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTasks.trim() },
      ]);
      setNewTasks("");

      newTaskInputRef.current?.blur();
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id == id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }
  function handleTaskRemove(id: string) {
    Alert.alert("EXCLUIR TAREFA", "Desejar excluir essa tarefa?", [
      {
        text: "SIM",
        style: "default",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "NÃO",
        style: "cancel",
      },
    ]);
  }
  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <View style={styles.container}>
      <Header
        inputRef={newTaskInputRef}
        task={newTasks}
        onChangeText={setNewTasks}
        onPress={handleTaskAdd}
      />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCriadas}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCreated}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksConcluidas}>Concluidas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCompleted}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskRemove={() => handleTaskRemove(item.id)}
              {...item}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
}
