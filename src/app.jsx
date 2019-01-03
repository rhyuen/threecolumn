import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column.jsx";
import data from "./data.js";

class App extends Component {
  state = data;

  onDragStart = start => {
    //For determinging if you can drag back to a previous column
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
    this.setState({
      homeIndex
    });
  };

  onDragUpdate = update => {};
  onDragEnd = result => {
    //Clears index for determining if you can drag back to previous column
    this.setState({
      homeIndex: null
    });
    //type below is in the result.  You can use it to discern between different types of elements you want to drag around.
    //ie: you can use it to determine if a 'column' or 'task' is being dragged.
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      // const newState = {
      //   ...this.state,
      //   columnOrder: newColumnOrder
      // };
      // this.setState(newState);
      // return;

      this.setState(prevState => {
        return {
          ...prevState,
          columnOrder: newColumnOrder
        };
      });
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: { ...this.state.columns, [newColumn.id]: newColumn }
      };

      this.setState(newState);
      return;
    }

    //Movine from one column to another;
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  };

  render() {
    const blah = this.state.columnOrder.map((columnId, index) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      const isDropDisabled = index < this.state.homeIndex;
      return (
        <Column
          key={column.id}
          column={column}
          tasks={tasks}
          isDropDisabled={isDropDisabled}
          index={index}
        />
      );
    });

    return (
      <div className="root">
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {provided => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {blah}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default hot(module)(App);
