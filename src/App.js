import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


function App() {
      let elements = ['first', 'secon', 'thid ']

      const grid = 8
      function Drag(elements, boxStyle, elementsStyle) {
            return (
                  <div>
                        {elements.map((e, index) => (
                              <Draggable key={`${index}`} draggableId={`${index}`} index={index} >
                                    {(provided, snapshot) => (
                                          <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                      background: provided.isDraggingOver ? 'lightgreen' : 'green',
                                                      padding: grid,
                                                      overflow: 'auto',
                                                      ...provided.draggableProps.style,
                                                      ...elementsStyle
                                                }}
                                          >{e}</div>
                                    )}
                              </Draggable>
                        ))}
                  </div>
            )
      }
      function Drop(elements, boxStyle, elementsStyle) {
            return (
                  <Droppable droppableId='droppable'>
                        {(provided, snapshot) => (
                              <div
                                    ref={provided.innerRef}
                                    style={{
                                          padding: grid,
                                          overflow: 'auto',
                                          height: '300px',
                                          ...boxStyle
                                    }}
                              >
                                    {Drag(elements, boxStyle, elementsStyle)}
                                    {provided.placeholder}
                              </div>
                        )}
                  </Droppable>
            )
      }
      function DND({ elements, boxStyle, elementsStyle }) {

            function reOrder(r) {
                  // console.log(Array.from(elements))
                  // console.log(elements)
                  // console.log(elements, r.source.index, r.destination.index)
                  const [removed] = elements.splice(r.source.index, 1);
                  elements.splice(r.destination.index, 0, removed);
            }

            return (
                  <DragDropContext onDragEnd={reOrder}>
                        {Drop(elements, boxStyle, elementsStyle)}
                  </DragDropContext >
            )
      }

      return (
            <div>
                  <DND boxStyle={{ background: 'black' }} elementsStyle={{ background: 'white' }} elements={elements} />
            </div>

      )
}

export default App