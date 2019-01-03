import React, { Component } from "react";
import styled from "styled-components";
import Task from "./Task.jsx";
import { Droppable, Draggable } from "react-beautiful-dnd";

import InnerList from "./InnerList.jsx";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background: white;
  min-width: 250px;
  width: 33%;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background 0.2s ease;
  background: ${props => (props.isDraggingOver ? "lightgrey" : "inherit")};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}
              direction="vertical"
              type="task"
            >
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {
                    provided.placeholder /*increases space of droppable area when needed*/
                  }
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
