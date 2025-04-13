import Button from '@shared/uikit/button'
import { TONIcon } from '@shared/uikit/icons'
import Input from '@shared/uikit/input'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import ToggleButtonGroup from '@shared/uikit/toggle-button'

function App() {
  return (
    <main>
      <Input placeholder='Name' />

      <Button>Submit</Button>

      <Button>
        <TONIcon />
      </Button>

      <LabelBelow title='Description:'>
        <p>fakljs;dfkja;skldfja;lsjdflkjas</p>
      </LabelBelow>

      <LabelOpposite title='Name:'>Elijahs</LabelOpposite>

      <ToggleButtonGroup>
        <ToggleButtonGroup.Button selected value='check'>
          Check
        </ToggleButtonGroup.Button>
        <ToggleButtonGroup.Button value='profile'>Profile</ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    </main>
  )
}

export default App
