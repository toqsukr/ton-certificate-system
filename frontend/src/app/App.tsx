import Button from '@shared/uikit/button'
import ContentField from '@shared/uikit/content-field'
import { TONIcon } from '@shared/uikit/icons'
import Input from '@shared/uikit/input'
import LabelBelow from '@shared/uikit/label-below'
import LabelOpposite from '@shared/uikit/label-opposite'
import ToggleButtonGroup from '@shared/uikit/toggle-button'

function App() {
  return (
    <main className='p-12'>
      <ContentField title='TITLE'>
        <Input placeholder='Name' />
        <Input
          placeholder='Enter certificate ID'
          Button={
            <Button>
              <TONIcon />
            </Button>
          }
        />

        <Button>Submit</Button>

        <LabelBelow title='Description:'>
          <p>
            fakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjasfakljs;dfkja;skldfja;lsjdflkjas
          </p>
        </LabelBelow>

        <LabelOpposite title='Name:'>Elijahs</LabelOpposite>

        <ToggleButtonGroup>
          <ToggleButtonGroup.Button value='check'>Check</ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button selected value='profile'>
            Profile
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      </ContentField>
    </main>
  )
}

export default App
