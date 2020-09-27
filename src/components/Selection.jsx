import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { thelement } from '../Actions/handlKey'
import { UiChecks, ListNested, Image } from 'react-bootstrap-icons';

function Selection({ target, setShow, mentE, Indexing, element, state, set }) {

      const [search, setSearch] = useState('')
      const options = [{ name: 'normal', icon: 'ListNested' }, { name: 'checkbox', icon: 'UiChecks' }, { name: 'image', icon: 'Image' }]
      const FilterSearch = options.filter(option => {
            return option.name.toLowerCase().includes(search.toLowerCase())
      })

      function Choosing(Val) {
            const index = state.findIndex(elem => elem.id == target.current.id)

            if (Val === 'normal') {
                  state[index].image = null
                  target.current.focus()
            }
            if (Val === 'checkbox') {
                  state[index].checkBox = state[index].checkBox == null ? false : null
                  target.current.focus()
            }
            if (Val === 'image') {
                  state[index].image = state[index].image == null ? 'https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree-400x266.jpg' : null
                  target.current.focus()
            }

      }
      function handlChoose(e) {
            setShow(false)
            Choosing(e.target.innerText)
      }
      function handlChoose2(e) {
            if (e.key === 'Enter') {
                  setShow(false)
                  Choosing(FilterSearch[0].name)
            }
      }


      return (
            <div>
                  <input onBlur={() => setShow(false)} autoFocus style={{ width: '100%', backgroundColor: 'rgba(140, 140, 140, 0.85)', border: 'none', outline: 'none' }} onKeyPress={handlChoose2} onChange={e => setSearch(e.target.value)} placeholder='for examle todo' className='PopSearchINput' />
                  <List component="nav" aria-label="main mailbox folders">
                        {FilterSearch.map((option) => (
                              <ListItem onMouseDown={handlChoose} key={option.name} button>
                                    <div style={{ marginRight: '5px', paddingLeft: '2px', paddingRight: '2px', borderRadius: '5px' }}>
                                          {option.icon === 'UiChecks' && <UiChecks />}
                                          {option.icon === 'ListNested' && <ListNested />}
                                          {option.icon === 'Image' && <Image />}
                                    </div>
                                    <ListItemText primary={option.name} />
                              </ListItem>
                        ))
                        }
                  </List>
            </div>
      )
}

export default Selection
