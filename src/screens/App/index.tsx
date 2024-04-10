import { useState } from 'react'
import * as S from './styles'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  function handleSubmit() {
    setTasks(state => ([...state, inputValue]))
    setInputValue('')
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <input id="task-form-input" value={inputValue} onChange={evt => setInputValue(evt.target.value)} type="text" placeholder='type your next task' />
            <button id="task-form-btn-submit" onClick={handleSubmit} >+ add</button>
          </S.Header>

          <S.List id="task-list">
            {tasks.map((task, key) => (
              <S.Task className='task-item' key={key} >
                {task}
              </S.Task>
            ))}
          </S.List>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App